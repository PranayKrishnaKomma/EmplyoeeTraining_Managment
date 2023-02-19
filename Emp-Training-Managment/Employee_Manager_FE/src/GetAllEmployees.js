import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Svg/edit.svg";
import AddEmployeeSvg from "./Svg/personadd.svg";
import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";
import EmployeeDataContext from "./EmployeeDataContext";
import DeletePopUp from "./DeletePopUp";

function GetAllEmployees() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const { setEmployeeData } = useContext(EmployeeDataContext);
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
    // eslint-disable-next-line
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
    checkLogin();
    // eslint-disable-next-line
  }, []);

  function propsPassing(d) {
    navigate("/EditEmployees");
    setEmployeeData(d);
  }
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
                <Link className="nav-link" to="/ManagerDashBoard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/GetAllEmployees"
                >
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
      <div className="ei">
        <h1>Welcome {userData.employeeName}</h1>
        <h1>Employee Info</h1>
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
              .filter(
                (d) =>
                  d.designation === "Teamleader" || d.designation === "Trainee"
              )
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
                          propsPassing(d);
                        }}
                      >
                        <img src={Edit} alt="Edit icon"></img>
                      </button>
                      {
                        <DeletePopUp
                          email={d.email}
                          employeeId={d.employeeId}
                          employeeName={d.employeeName}
                          setStatus={() => {
                            if (status === true) {
                              setStatus(false);
                            } else {
                              setStatus(true);
                            }
                          }}
                        ></DeletePopUp>
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
            navigate("/AddEmployee");
          }}
        >
          <img src={AddEmployeeSvg} alt="Edit icon"></img> Add Employee
        </button>
      </div>
    </div>
  );
}

export default GetAllEmployees;
