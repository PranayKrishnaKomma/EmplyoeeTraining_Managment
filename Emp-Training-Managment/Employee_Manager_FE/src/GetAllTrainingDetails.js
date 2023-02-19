import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Edit from "./Svg/edit.svg";
import Plus from "./Svg/plus.svg";
import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";
import DeleteTrainingDetails from "./DeleteTrainingDetails";
import EmployeeDataContext from "./EmployeeDataContext";

function GetAllEmployees() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const { setTrainingData } = useContext(EmployeeDataContext);
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
  }, [status]);

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
                <Link className="nav-link" to="/ManagerDashBoard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GetAllEmployees">
                  Employee Info
                </Link>
              </li>

              <li aria-current="page">
                <Link className="nav-link active" to="/GetAllTrainingDetails">
                  Training info
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/GetAllUseCases">
                  usecase info
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
              <th>course Name</th>
              <th>Duration</th>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Due Date</th>
              <th>Status Change Date</th>
              <th>Course Status</th>
              <th>Operations</th>
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
                  <td>{d.coursestatus.employee.employeeName}</td>
                  <td>{d.coursestatus.dueDate}</td>
                  <td>{d.coursestatus.completionDate}</td>
                  <td>{d.coursestatus.status}</td>
                  <td>
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/EditTrainingDetails");
                          setTrainingData(d);
                        }}
                      >
                        <img src={Edit} alt="Edit icon"></img>
                      </button>

                      {
                        <DeleteTrainingDetails
                          trainingId={d.trainingId}
                          setStatus={() => {
                            if (status === true) {
                              setStatus(false);
                            } else {
                              setStatus(true);
                            }
                          }}
                        ></DeleteTrainingDetails>
                      }
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/AddTrainingDetails");
          }}
        >
          <img src={Plus} alt="Edit icon"></img> Add New Training
        </button>
      </div>
    </div>
  );
}

export default GetAllEmployees;
