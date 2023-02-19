import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";

function TeamleadDashboard() {
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
    //to call cl

    checkLogin();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src={HCLLogo} alt="hcllogo" style={{ height: "4rem" }}></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/TeamleadDashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/GetAllTrainees">
                  Trainee Info
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/TLGetAllTrainingDetails">
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
      <div className="mr">
        <h1 className="ur">Welcome {userData.employeeName}</h1>
      </div>
    </div>
  );
}

export default TeamleadDashboard;
