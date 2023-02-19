import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";

function TLGetAllTrainingDetails() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiGetTrainingDetails = () => {
    fetch("http://localhost:8090//tainingdetails/getALLTrainingDetails")
      .then((res) => {
        return res.json();
      }) //takes response and convert into text
      .then((resp) => {
        console.log(resp);
        setData(resp);
      }); //to check response data
  };

  useEffect(() => {
    apiGetTrainingDetails();
  }, []);

  const [userData, setUserData] = useState([]);
  const checkLogin = () => {
    if (localStorage.length === 1) {
      setUserData(JSON.parse(localStorage.getItem("jsonData")));
    } else {
      alert("Please Login To Get Services");
      navigate("/Login");
    }
  };

  useEffect(() => {
    //to call cl

    checkLogin();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={HCLLogo} alt="hcllogo" style={{ height: "4rem" }}></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/TeamleadDashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GetAllTrainees">
                  Trainee Info
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/TLGetAllTrainingDetails"
                >
                  Training Info
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/TLGetAllUseCases">
                  UseCase Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h5>{userData.employeeName}</h5>
        <ProfileDropDown></ProfileDropDown>
      </nav>
      <div className="ei">
        <h1>Welcome {userData.employeeName}</h1>
        <h1>Training Info</h1>
        <table className="table table-striped col-mdcd-3">
          <thead>
            <tr>
              <th>Training Id</th>
              <th>course Name</th> <th>Duration</th>
              <th>Employee Id</th> <th>Due Date</th>
              <th>Status Change Date</th>
              <th>Course Status</th>
            </tr>{" "}
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d.trainingId}>
                  {" "}
                  <td>{d.trainingId}</td>
                  <td>{d.courseName}</td>
                  <td>{d.duration + "(months)"}</td>
                  <td>{d.coursestatus.employee.employeeId}</td>
                  <td>{d.coursestatus.dueDate.slice(0, 10)}</td>
                  <td>{d.coursestatus.completionDate.slice(0, 10)}</td>
                  <td>{d.coursestatus.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TLGetAllTrainingDetails;
