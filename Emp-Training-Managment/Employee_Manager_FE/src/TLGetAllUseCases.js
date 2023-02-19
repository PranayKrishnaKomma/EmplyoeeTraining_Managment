import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";

function TLGetAllUseCases() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiGetTeamLeader = () => {
    fetch("http://localhost:8090/usecase/getALLUseCases")
      .then((res) => {
        return res.json();
      }) //takes response and convert into text
      .then((resp) => {
        console.log(resp);
        setData(resp);
      }); //to check response data
  };

  useEffect(() => {
    apiGetTeamLeader();
  }, []);

  const [userData, setUserData] = useState([]);
  const checkLogin = () => {
    // console.log("check")
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
                <Link className="nav-link" to="/TeamLeadDashBoard">
                  DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GetAllTrainees">
                  TraineeInfo
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/TLGetAllTrainingDetails">
                  Training info
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/GetAllcoursestatus">
                  coursestatus info
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/TLGetAllUseCases"
                >
                  UseCase info
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/GetAllUseCaseAssignment">
                  UseCaseAssignment info
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <h5>{userData.employeeName}</h5>
        <ProfileDropDown></ProfileDropDown>
      </nav>
      <div className="ei">
        <h1>Welcome {userData.employeeName}</h1>
        <h1>Use Case Info</h1>
        <table className="table table-striped col-mdcd-3">
          <thead>
            <tr>
              <th>Use Case Id</th>
              <th>Use Case Description</th>
              <th>Duration</th>
              <th>Employee Id</th>
              <th>Use Case Status</th>
              <th>EndDate</th>
            </tr>{" "}
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d.ucId}>
                  {" "}
                  <td>{d.ucId}</td>
                  <td>{d.ucDescription}</td>
                  <td>{d.duration + ` (months)`}</td>
                  <td>{d.usecaseassingment.employee.employeeId}</td>
                  <td>{d.usecaseassingment.ucStatus}</td>
                  <td>{d.usecaseassingment.endDate.slice(0, 10)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TLGetAllUseCases;
