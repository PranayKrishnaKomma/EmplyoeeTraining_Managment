import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddUseCase() {
  const ucDescriptionRef = useRef();

  const durationRef = useRef();

  const employeeIdRef = useRef();

  const endDateRef = useRef();

  const navigate = useNavigate("");

  const apiRegister = (e) => {
    e.preventDefault(); //to fetch internally

    fetch(
      "http://localhost:8090/usecase/addUseCase",

      {
        method: "POST",

        body: JSON.stringify({
          //to conv normal inputs to json data

          ucDescription: ucDescriptionRef.current.value,
          duration: durationRef.current.value,
          useCaseAssignmentDTO: {
            employeeId: employeeIdRef.current.value,
            ucStatus: "NotStarted",
            endDate: endDateRef.current.value,
          },
        }),

        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        return res.text();
      }) //takes response and convert into text

      .then((resp) => {
        console.log(resp);
        alert("Use Case Add Successfully");
      }); //to check response data
  };

  const checkLogin = () => {
    if (localStorage.length === 1) {
    } else {
      alert("Please Login To Get Services");
      navigate("/Login");
    }
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <>
      <div className="AD">
        <form className="container col-md-5" onSubmit={apiRegister}>
          <h2>Add Use Case</h2>
          <div className="form-group">
            <label>Enter use Case Description </label>

            <input
              type="text"
              name="ucdescription"
              required
              placeholder="Enter uc description"
              className="form-control"
              ref={ucDescriptionRef}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter Duration </label>

            <input
              type="text"
              name="duration"
              required
              placeholder="Enter Duration(months)"
              className="form-control"
              ref={durationRef}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Employee Id</label>

            <input
              type="text"
              name="Employee Id"
              required
              placeholder="Enter Employee Id"
              className="form-control"
              ref={employeeIdRef}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter completion Date </label>

            <input
              type="date"
              name="completionDate"
              required
              placeholder="Enter Completion Date"
              className="form-control"
              ref={endDateRef}
            ></input>
          </div>

          <br></br>
          <button
            type="button"
            style={{ marginInline: "2rem", paddingInline: "1.4rem" }}
            className="btn btn-primary"
            onClick={() => {
              navigate("/GetAllUseCases");
            }}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUseCase;
