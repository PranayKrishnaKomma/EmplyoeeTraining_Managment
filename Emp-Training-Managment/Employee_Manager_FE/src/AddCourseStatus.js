import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddCourseStatus() {
  const courseIdRef = useRef();

  const employeeIdRef = useRef();

  const dueDateRef = useRef();

  const statusRef = useRef();

  const completionDateRef = useRef();

  const navigate = useNavigate("");

  const apiRegister = (e) => {
    // console.log(confirmPasswordRef.current.value);
    // console.log(genderRef.current.value);

    e.preventDefault();
    //to fetch internally
    // if (passwordRef.current.value === confirmPasswordRef.current.value) {
    fetch(
      "http://localhost:8090/coursestatus/addCourseStatus",

      {
        method: "POST",

        body: JSON.stringify({
          //to conv normal inputs to json data

          courseId: courseIdRef.current.value,
          employeeId: employeeIdRef.current.value,
          dueDate: dueDateRef.current.value,
          status: statusRef.current.value,
          completionDate: completionDateRef.current.value,
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
    // } else {
    //   alert("Password does not match..!!");
    // }
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
      <div className="ur">
        <form className="container col-md-5" onSubmit={apiRegister}>
          <h2>Add coursestatus</h2>
          <div className="form-group">
            <label>Enter course Id </label>

            <input
              type="text"
              name="courseId"
              required
              placeholder="Enter course Id"
              className="form-control"
              ref={courseIdRef}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter Employee Id </label>

            <input
              type="text"
              name="employeeId"
              required
              placeholder="Enter Employee Id"
              className="form-control"
              ref={employeeIdRef}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter dueDate </label>

            <input
              type="date"
              name="duedate"
              required
              placeholder="Enter Duedate"
              className="form-control"
              ref={dueDateRef}
            ></input>
          </div>

          <br></br>

          <div className="form-group">
            <label>Date Of Birth </label>

            <input
              type="date"
              name="dateOfBirth"
              required
              placeholder="Enter date of birth"
              className="form-control"
              ref={completionDateRef}
            ></input>
          </div>

          <br></br>
          <div className="form-group">
            <label>Date Of Birth </label>

            <input
              type="text"
              name="status"
              required
              placeholder="Enter status"
              className="form-control"
              ref={statusRef}
            ></input>
          </div>
          <br></br>
          <button
            type="button"
            style={{ marginInline: "2rem", paddingInline: "1.4rem" }}
            className="btn btn-primary"
            onClick={() => {
              navigate("/GetAllEmployees");
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

export default AddCourseStatus;
