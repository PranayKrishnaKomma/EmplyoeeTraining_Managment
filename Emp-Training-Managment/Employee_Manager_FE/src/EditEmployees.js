import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeDataContext from "./EmployeeDataContext";
function EditEmployees() {
  const { employeeData } = useContext(EmployeeDataContext);
  const checkLogin = () => {
    if (localStorage.length === 1) {
    } else {
      alert("Please Login To Get Services");
      navigate("/Login");
    }
  };
  const updateData = () => {
    if (employeeData.employeeId > 1) {
    } else {
      navigate("/GetAllEmployees");
    }
  };

  const [employeeName, setEmployeeName] = useState(
    () => employeeData.employeeName
  );
  const [email, setEmail] = useState(() => employeeData.email);
  const [phoneNum, setphoneNum] = useState(() => employeeData.phoneNum);
  const [designation, setDesignation] = useState(
    () => employeeData.designation
  );
  const [gender, setGender] = useState(() => employeeData.gender);
  const [dateOfBirth, setDateOfBirth] = useState(
    () => employeeData.dateOfBirth
  );
  const navigate = useNavigate("");
  useEffect(() => {
    checkLogin();
    console.log(employeeData);
    updateData();
  });

  const apiUpdateTL = (e) => {
    e.preventDefault();

    fetch(
      "http://localhost:8090/employee/UpdateEmployee",

      {
        method: "PUT",

        body: JSON.stringify({
          //to conv normal inputs to json data
          employeeId: Number(employeeData.employeeId),

          employeeName: employeeName,

          email: email,

          phoneNum: phoneNum,

          password: employeeData.password,

          designation: designation,

          dateOfBirth: dateOfBirth,

          confirmPassword: employeeData.confirmPassword,

          gender: gender,
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
      <div className="EE">
        <form className="container col-md-5" onSubmit={apiUpdateTL}>
          <h2>Update Employee Details</h2>
          <div className="form-group">
            <label>Enter Name </label>

            <input
              type="text"
              name="name"
              value={employeeName}
              required
              placeholder="Enter name"
              className="form-control"
              onChange={(e) => setEmployeeName(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter Mail </label>

            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Designation </label>

            <select onChange={(e) => setDesignation(e.target.value)}>
              <option>default designation</option>

              <option value="Teamleader">TeamLeader</option>

              <option value="Trainee">Trainee</option>
            </select>
          </div>
          <br></br>
          <div className="form-group">
            <label>Date Of Birth</label>

            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              required
              placeholder="Enter date of birth"
              className="form-control"
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Phone number </label>

            <input
              type="text"
              name="phoneNumber"
              value={phoneNum}
              required
              placeholder="Enter Phone Number"
              className="form-control"
              onChange={(e) => setphoneNum(e.target.value)}
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Select Gender </label>
            <select onChange={(e) => setGender(e.target.value)}>
              <option>default Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
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

export default EditEmployees;
