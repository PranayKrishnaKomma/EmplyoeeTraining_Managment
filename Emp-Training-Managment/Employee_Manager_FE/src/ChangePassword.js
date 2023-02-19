import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const passwordRef = useRef();

  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const checkLogin = () => {
    console.log("check");
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

  const apiRegister = (e) => {
    console.log(userData);

    e.preventDefault(); //to fetch internally
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      fetch(
        "http://localhost:8090/employee/AddEmployee",

        {
          method: "POST",

          body: JSON.stringify({
            //to conv normal inputs to json data
            employeeId: Number(userData.employeeId),

            employeeName: userData.employeeName,

            email: userData.email,

            phoneNum: userData.phoneNum,

            password: passwordRef.current.value,

            designation: userData.designation,

            dateOfBirth: userData.dateOfBirth,

            confirmPassword: confirmPasswordRef.current.value,

            gender: userData.gender,
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
          //navigate("/Logout");
        }); //to check response data
    } else {
      alert("Password does not match..!!");
    }
  };

  return (
    <>
      <div className="ar">
        <form className="container col-md-5" onSubmit={apiRegister}>
          <h2>Change Password</h2>

          <div className="form-group">
            <label>Enter Password </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter password"
              className="form-control"
              ref={passwordRef}
            ></input>
          </div>

          <div className="form-group">
            <label>Confirm Password </label>

            <input
              type="password"
              name="confirm password"
              required
              placeholder="confirm password"
              className="form-control"
              ref={confirmPasswordRef}
            ></input>
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

export default ChangePassword;
