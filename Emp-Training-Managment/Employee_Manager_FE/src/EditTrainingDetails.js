import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeDataContext from "./EmployeeDataContext";

function EditTrainingDetails() {
  const { trainingData } = useContext(EmployeeDataContext);
  const data = () => {
    if (trainingData.coursestatus.employee.employeeId > 0) {
    } else {
      navigate("/GetAllTrainingDetails");
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
    console.log(trainingData);
  });
  const [courseName, setCourseName] = useState(() => trainingData.courseName);
  const [duration, setDuration] = useState(() => trainingData.duration);
  const [employeeId, setEmployeeId] = useState(
    () => trainingData.coursestatus.employee.employeeId
  );
  const [dueDate, setDueDate] = useState(
    () => trainingData.coursestatus.dueDate
  );

  const navigate = useNavigate("");

  const apiRegister = (e) => {
    e.preventDefault(); //to fetch internally

    fetch(
      "http://localhost:8090/tainingdetails/updateTrainingDetails",

      {
        method: "Put",

        body: JSON.stringify({
          trainingId: trainingData.trainingId,
          courseName: courseName,
          duration: duration,
          courseStatusDTO: {
            courseId: trainingData.trainingId,
            employeeId: employeeId,
            dueDate: dueDate,
            status: "Not Started",
            completionDate: null,
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
          <h2>Edit TrainingDetails</h2>
          <div className="form-group">
            <label>Enter Course Name </label>

            <input
              type="text"
              value={courseName}
              required
              placeholder="Enter taining id"
              className="form-control"
              onChange={(e) => setCourseName(e.target.value)}
            ></input>
          </div>

          {/* <div className="form-group">
            <label>Enter Course Name </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter course name"
              className="form-control"
              ref={courseNameRef}
            ></input>
          </div> */}

          <div className="form-group">
            <label>Enter Duration </label>

            <input
              type="text"
              value={duration}
              required
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
              value={employeeId}
              required
              placeholder="Enter Employee Id"
              className="form-control"
              onChange={(e) => setEmployeeId(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter Due Date </label>

            <input
              type="date"
              name="dueDate"
              value={dueDate}
              required
              placeholder="confirm password"
              className="form-control"
              onChange={(e) => setDueDate(e.target.value)}
            ></input>
          </div>

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

export default EditTrainingDetails;
