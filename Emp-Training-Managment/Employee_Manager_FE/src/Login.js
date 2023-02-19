import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [mail, setMail] = useState("");

  const [password, setPassword] = useState("");

  // const [designation,setDesignation]=useState("");

  const manager = "Manager";

  const teamLeader = "Teamleader";

  const trainee = "Trainee";

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("http://localhost:8090/employee/employeeLogin/" + mail)
        .then((res) => {
          return res.json();
        })

        .then((jsonData) => {
          // console.log(jsonData);

          // console.log(jsonData.designation);

          if (
            jsonData.password === password &&
            jsonData.designation === manager
          ) {
            localStorage.setItem("jsonData", JSON.stringify(jsonData)); //key, value

            navigate("/ManagerDashBoard");

            alert("Login Successful");
          } else if (
            jsonData.password === password &&
            jsonData.designation === teamLeader
          ) {
            localStorage.setItem("jsonData", JSON.stringify(jsonData));

            navigate("/TeamLeadDashBoard");

            alert("Login Successful");
          } else if (
            jsonData.password === password &&
            jsonData.designation === trainee
          ) {
            localStorage.setItem("jsonData", JSON.stringify(jsonData));

            navigate("/TraineeDashBoard");

            alert("Login Successful");
          } else {
            alert("Invalid Credentials ...Please try again! ");
          }
        });
    }
  };

  const validate = () => {
    let result = true;

    if (mail === null || mail === " ") {
      result = false;
    }

    if (password === null || password === " ") {
      result = false;
    }

    return result;
  };

  return (
    <div className="container">

      <div className="myCard">
        <div className="row">
          <div className="col-md-6">
            <div className="myLeftCtn12">
              <form className="myForm text-center" onSubmit={proceedLogin}>
                <h1 classNamem="m-4">
                  <i className="bi-person-circle"></i>
                </h1>

                <br></br>

                <div className="form-group">
                  <i class="bi-envelope-fill"></i>

                  <input
                    className="myInput"
                    placeholder="Email"
                    type="text"
                    id="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />
                </div>

                <br></br>

                <div className="form-group">
                  <i class="bi bi-lock-fill"></i>

                  <input
                    className="myInput"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <br></br>

                <br></br>

                <input type="submit" className="butt" value="Login" />

                <br></br>

                <br></br>

                <h6>
                  <b>New Employee</b>
                  <Link to="/Registration"> Sign Up </Link>
                </h6>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="myRightCtn">
              <div className="box1">
                <h3> Welcome to EMS Portal</h3>

                <p>
                  This Employee Management System Project application
                  stores all the employee's information in a database & also
                  to improve employee satisfaction and productivity
                  to help a company achieve their overall goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
