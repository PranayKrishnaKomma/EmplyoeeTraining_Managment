import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddTrainingDetails() {
  const courseNameRef = useRef();

  const durationRef = useRef();

  const employeeIdRef = useRef();

  const dueDateRef = useRef();

  // const completionDateRef = useRef();
  const navigate = useNavigate("");

  const apiRegister = (e) => {
    e.preventDefault(); //to fetch internally

    fetch(
      "http://localhost:8090/tainingdetails/addTrainingDetails",

      {
        method: "POST",

        body: JSON.stringify({
          //to conv normal inputs to json data

          courseName: courseNameRef.current.value,
          duration: durationRef.current.value,
          courseStatusDTO: {
            employeeId: employeeIdRef.current.value,
            dueDate: dueDateRef.current.value,
            status: "Not Started",
            completionDate: new Date("0000-00-00"),
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
        alert("Training Added Successfully");
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
          <h2>Add TrainingDetails</h2>
          <div className="form-group">
            <label>Enter Course Name </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter course name"
              className="form-control"
              ref={courseNameRef}
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
            <label>Enter Due Date </label>

            <input
              type="date"
              name="dueDate"
              required
              placeholder="confirm password"
              className="form-control"
              ref={dueDateRef}
            ></input>
          </div>

          {/* <div className="form-group">
            <label>Enter completion Date </label>

            <input
              type="date"
              name="completionDate"
              required
              placeholder="Enter Completion Date"
              className="form-control"
              ref={completionDateRef}
            ></input>
          </div> */}

          <br></br>
          <button
            type="button"
            style={{ marginInline: "2rem", paddingInline: "1.4rem" }}
            className="btn btn-primary"
            onClick={() => {
              navigate("/getALLTrainingDetails");
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

export default AddTrainingDetails;
