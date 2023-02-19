import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeDataContext from "./EmployeeDataContext";

function EditUseCase() {
  const { trainingData } = useContext(EmployeeDataContext);
  const data = () => {
    if (trainingData.ucId > 1) {
    } else {
      navigate("/GetAllUseCases");
    }
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
    data();
  });

  const [ucDescription, setUCDescription] = useState();
  const [duration, setDuration] = useState();

  const [employeeId, setEmployeeId] = useState();
  const [endDate, setEndDate] = useState();
  useEffect(() => {
    setUCDescription(() => trainingData.ucDescription);
    setDuration(() => trainingData.duration);
    setEmployeeId(() => trainingData.usecaseassingment.employee.employeeId);
    setEndDate(() => trainingData.usecaseassingment.endDate);
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate("");

  const apiRegister = (e) => {
    e.preventDefault();

    fetch(
      "http://localhost:8090/usecase/addUseCase",

      {
        method: "POST",

        body: JSON.stringify({
          //to conv normal inputs to json data
          ucId: trainingData.ucId,
          ucDescription: ucDescription,
          duration: duration,
          useCaseAssignmentDTO: {
            ucId: trainingData.ucId,
            employeeId: employeeId,
            ucStatus: "NotStarted",
            endDate: endDate,
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
        alert(resp);
      }); //to check response data
  };

  return (
    <>
      <div className="ET">
        <form className="container col-md-5" onSubmit={apiRegister}>
          <h2>Edit Usecase Details</h2>
          <div className="form-group">
            <label>Enter use Case Description </label>

            <input
              type="text"
              name="ucdescription"
              required
              value={ucDescription}
              placeholder="Enter uc description"
              className="form-control"
              onChange={(e) => setUCDescription(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter Duration </label>

            <input
              type="text"
              name="duration"
              required
              value={duration}
              placeholder="Enter Duration(months)"
              className="form-control"
              onChange={(e) => setDuration(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Employee Id</label>

            <input
              type="text"
              name="Employee Id"
              required
              value={employeeId}
              placeholder="Enter Employee Id"
              className="form-control"
              onChange={(e) => setEmployeeId(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter End Date </label>

            <input
              type="date"
              name="completionDate"
              required
              value={endDate}
              placeholder="Enter End Date"
              className="form-control"
              onChange={(e) => setEndDate(e.target.value)}
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

export default EditUseCase;
