import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddTrainee() {
  const employeeNameRef = useRef();

  const emailRef = useRef();

  const phoneNumRef = useRef();

  const passwordRef = useRef();

  const dateOfBirthRef = useRef();

  const confirmPasswordRef = useRef();

  const genderRef = useRef();
  const navigate = useNavigate("");

  const apiRegister = (e) => {
    console.log(confirmPasswordRef.current.value);
    console.log(genderRef.current.value);

    e.preventDefault(); //to fetch internally
    if (validation()) {
      fetch(
        "http://localhost:8090/employee/AddEmployee",

        {
          method: "POST",

          body: JSON.stringify({
            //to conv normal inputs to json data

            employeeName: employeeNameRef.current.value,

            email: emailRef.current.value,

            phoneNum: phoneNumRef.current.value,

            password: passwordRef.current.value,

            designation: "Trainee",

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
          alert("Employee Added Successfully");
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

  const checkLogin = () => {
    if (localStorage.length === 1) {
    } else {
      alert("Please Login To Get Services");
      navigate("/Login");
    }
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <>
      <div className="ur">
        <form className="container col-md-5" onSubmit={apiRegister}>
          <h2>Add Trainee</h2>
          <div className="form-group">
            <label>Enter Name </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter name"
              className="form-control"
              ref={employeeNameRef}
            ></input>
          </div>

          <div className="form-group">
            <label>Enter Mail </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="form-control"
              ref={emailRef}
            ></input>
          </div>
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

          <div className="form-group">
            <label>Date Of Birth </label>

            <input
              type="date"
              name="dateOfBirth"
              required
              placeholder="Enter date of birth"
              className="form-control"
              ref={dateOfBirthRef}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Phone number </label>

            <input
              type="text"
              name="phoneNumber"
              required
              placeholder="Enter Phone Number"
              className="form-control"
              ref={phoneNumRef}
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Select Gender </label>

            <select ref={genderRef}>
              <option value="Male">Male</option>

              <option value="Female">Female</option>
            </select>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTrainee;
