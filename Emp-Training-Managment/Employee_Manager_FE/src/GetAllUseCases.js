import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Svg/edit.svg";
import Plus from "./Svg/plus.svg";
import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";
import DeleteUseCase from "./DeleteUseCase";
import EmployeeDataContext from "./EmployeeDataContext";

function GetAllUseCases() {
  const { setTrainingData } = useContext(EmployeeDataContext);
  const [data, setData] = useState([]);
  const [s, setS] = useState();
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
  }, [s]);

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
                <Link className="nav-link" to="/ManagerDashBoard">
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/GetAllUseCases"
                >
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
        <h1>Use Case Info</h1>
        <table className="table table-striped col-mdcd-3">
          <thead>
            <tr>
              <th>Use Case Id</th>
              <th>Use Case Description</th>
              <th>Duration</th>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Use Case Status</th>
              <th>EndDate</th>
              <th>Operations</th>
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
                  <td>{d.usecaseassingment.employee.employeeName}</td>
                  <td>{d.usecaseassingment.ucStatus}</td>
                  <td>{d.usecaseassingment.endDate}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => {
                        navigate("/EditUseCase");
                        setTrainingData(d);
                      }}
                    >
                      <img src={Edit} alt="Edit icon"></img>
                    </button>

                    {
                      <DeleteUseCase
                        ucId={d.ucId}
                        setS={() => {
                          s ? setS(false) : setS(true);
                        }}
                      ></DeleteUseCase>
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
            navigate("/AddUseCase");
          }}
        >
          <img src={Plus} alt="plus Svg"></img> Add Use Case
        </button>
      </div>
    </div>
  );
}

export default GetAllUseCases;
