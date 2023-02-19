import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Svg/edit.svg";
import AddEmployeeSvg from "./Svg/personadd.svg";
import { Link } from "react-router-dom";
import HCLLogo from "./HCL logo.jpeg";
import ProfileDropDown from "./ProfileDropDown";
import DeleteCourseStatus from "./DeleteCourseStatus";

function GetAllcoursestatus() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiGetTeamLeader = () => {
    fetch("http://localhost:8090/coursestatus/getALLCourseStatus")
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

  const checkLogin = () => {
    console.log(localStorage.length);
    if (localStorage.length === 1) {
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
                <Link class="nav-link" to="/ManagerDashBoard">
                  ManagerDashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/GetAllcoursestatus"
                >
                  coursestatus Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ProfileDropDown></ProfileDropDown>
      </nav>
      <div className="ei">
        <h1>coursestatus Info</h1>
        <table className="table table-striped col-mdcd-3">
          <thead>
            <tr>
              <th>Course Id</th>
              <th>employeeId</th>
              <th>dueDate</th>
              <th>completionDate</th>
              <th>status</th>

              <th>Operations</th>
            </tr>{" "}
          </thead>
          <tbody>
            {data
              // .filter(
              //   (d) =>
              //     d.designation === "Teamleader" || d.designation === "Trainee"
              // )
              .map((d) => {
                return (
                  <tr key={d.courseIdId}>
                    {" "}
                    <td>{d.employeeId}</td>
                    <td>{d.employeeName}</td>
                    <td>{d.dueDate}</td>
                    <td>{d.completionDate}</td>
                    <td>{d.status}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/EditCourseStatus");
                        }}
                      >
                        <img src={Edit} alt="Edit icon"></img>
                      </button>
                      {/* </td> */}
                      {/* <td> */}
                      {
                        <DeleteCourseStatus
                          courseId={d.courseId}
                        ></DeleteCourseStatus>
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
            navigate("/AddCourseStatus");
          }}
        >
          <img src={AddEmployeeSvg} alt="Edit icon"></img> Add coursestatus
        </button>
      </div>
    </div>
  );
}

export default GetAllcoursestatus;
