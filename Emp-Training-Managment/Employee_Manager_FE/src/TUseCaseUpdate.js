import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function TUseCaseUpdate(props) {
  const statusRef = useRef();

  const navigate = useNavigate("");

  const apiRegister = (e) => {
    e.preventDefault(); //to fetch internally

    fetch(
      "http://localhost:8090/usecase/addUseCase",

      {
        method: "POST",

        body: JSON.stringify({
          //to conv normal inputs to json data
          ucId: props.ucId,
          ucDescription: props.ucDescription,
          duration: props.duration,
          useCaseAssignmentDTO: {
            ucId: props.ucId,
            employeeId: props.employeeId,
            ucStatus: statusRef.current.value,
            endDate: props.endDate,
          },
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
      }); //to check response data
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
      <form onSubmit={apiRegister}>
        <div>
          <div className="form-group">
            <select ref={statusRef}>
              <option>{props.status}</option>

              <option value="InProgress">InProgress</option>

              <option value="Completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default TUseCaseUpdate;
