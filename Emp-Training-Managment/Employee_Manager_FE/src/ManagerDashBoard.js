import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";

function ManagerDashBoard() {
  const navigate = useNavigate("");

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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/ManagerDashBoard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GetAllEmployees">
                  Employee Info
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/GetAllTrainingDetails">
                  Training info
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/GetAllcoursestatus">
                  coursestatus info
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/GetAllUseCases">
                  usecase info
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
      <div className="mr">
        <h1 className="ur">Welcome {userData.employeeName}</h1>
        {/* <EmployeeTree></EmployeeTree> */}
      </div>
    </div>
  );
}

export default ManagerDashBoard;
