import React, { useRef } from "react";

import "./Registration.css";

function Registration() {
  const employeeNameRef = useRef();

  const emailRef = useRef();

  const phoneNumRef = useRef();

  const passwordRef = useRef();

  const designationRef = useRef();

  const dateOfBirthRef = useRef();

  const confirmPasswordRef = useRef();

  const genderRef = useRef();

  const apiRegister = (e) => {
    console.log(confirmPasswordRef.current.value);

    console.log(genderRef.current.value);

    e.preventDefault(); //to fetch internally

    if (validation()) {
      fetch(
        "http://localhost:8090/employee/employeeRegisteration",

        {
          method: "POST",

          body: JSON.stringify({
            //to conv normal inputs to json data

            employeeName: employeeNameRef.current.value,

            email: emailRef.current.value,

            phoneNum: phoneNumRef.current.value,

            password: passwordRef.current.value,

            designation: designationRef.current.value,

            dateOfBirth: dateOfBirthRef.current.value,

            confirmPassword: confirmPasswordRef.current.value,

            gender: genderRef.current.value,
          }),

          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => {
          return res.text();
        }) //takes response and convert into text

        .then((resp) => {
          console.log(resp);

          alert("Registration Sucessfull");
        }); //to check response data
    } else {
    }
  };

  const validation = () => {
    const currentDate = new Date().getFullYear();
    let date = new Date(dateOfBirthRef.current.value).getFullYear();
    const age = currentDate - date;
    if (age > 18 && age < 120) {
      if (passwordRef.current.value === confirmPasswordRef.current.value) {
        return true;
      } else {
        alert("Password does not match..!!");
        return false;
      }
    } else {
      alert("age should be above 18");
      return false;
    }
  };

  return (
    <div className="Body1">
      <div className="container1">
        <div className="title1">Registration</div>

        <form onSubmit={apiRegister}>
          <div className="user-details1">
            <div className="input-box1">
              <span className="details1">Full Name</span>

              <input
                type="text"
                placeholder="Enter your name"
                required
                ref={employeeNameRef}
              ></input>
            </div>

            <div className="input-box1">
              <span className="details1">Email</span>

              <input
                type="text"
                placeholder="Enter your email"
                required
                ref={emailRef}
              ></input>
            </div>

            <div className="input-box1">
              <span className="details1">Phone Number</span>

              <input
                type="text"
                placeholder="Enter your number"
                required
                ref={phoneNumRef}
                pattern="[0-9]{10}"
              ></input>
            </div>

            <div className="input-box1">
              <span className="details1">Date Of Birth</span>

              <input
                type="date"
                placeholder="Enter your DOB"
                required
                ref={dateOfBirthRef}
              ></input>
            </div>

            <div className="input-box1">
              <span className="details1">Enter Designation</span>

              <select ref={designationRef}>
                <option value="Manager">Manager</option>

                <option value="Teamleader">TeamLeader</option>

                <option value="Trainee">Trainee</option>
              </select>
            </div>

            <div className="input-box1">
              <span className="details1">Password</span>

              <input
                type="text"
                placeholder="Enter your password"
                required
                ref={passwordRef}
              ></input>
            </div>

            <div className="input-box1">
              <span className="details1">Confirm Password</span>

              <input
                type="text"
                placeholder="Confirm your password"
                required
                ref={confirmPasswordRef}
              ></input>
            </div>
          </div>

          <div className="input-box1">
            <span className="details1">Enter Designation</span>

            <select ref={genderRef}>
              <option>Select Option</option>

              <option value="male">Male</option>

              <option value="female">Female</option>
            </select>
          </div>

          <div className="button1">
            <input type="submit" value="Register"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
