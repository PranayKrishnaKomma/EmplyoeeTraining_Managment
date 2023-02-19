import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Svg/edit.svg";
import AddEmployeeSvg from "./Svg/personadd.svg";
import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import DeleteTrainee from "./DeleteTrainee";
import ProfileDropDown from "./ProfileDropDown";

function GetAllTrainees() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiGetTeamLeader = () => {
    fetch("http://localhost:8090/employee/GetAllEmployee")
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
                <Link class="nav-link" to="/TeamleadDashboard">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/GetAllTrainees"
                >
                  Trainee Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TLGetAllTrainingDetails">
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
        <h1>Trainee Info</h1>
        <table className="table table-striped col-mdcd-3">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Name</th> <th>Email</th>
              <th>PhoneNumber</th> <th>DateOfBirth</th>
              <th>Gender</th>
              <th>Designation</th>
              <th>Operations</th>
            </tr>{" "}
          </thead>
          <tbody>
            {data
              .filter((d) => d.designation === "Trainee")
              .map((d) => {
                return (
                  <tr key={d.employeeId}>
                    {" "}
                    <td>{d.employeeId}</td>
                    <td>{d.employeeName}</td>
                    <td>{d.email}</td>
                    <td>{d.phoneNum}</td>
                    <td>{d.dateOfBirth}</td>
                    <td>{d.gender}</td>
                    <td>{d.designation}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/EditEmployees");
                        }}
                      >
                        <img src={Edit} alt="Edit icon"></img>
                      </button>
                      {/* </td> */}
                      {/* <td> */}
                      {
                        <DeleteTrainee
                          employeeId={d.employeeId}
                        ></DeleteTrainee>
                      }
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/AddTrainee");
          }}
        >
          <img src={AddEmployeeSvg} alt="Edit icon"></img> Add Trainee
        </button>
      </div>
    </div>
  );
}

export default GetAllTrainees;
