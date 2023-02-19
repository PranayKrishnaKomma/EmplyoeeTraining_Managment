import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function TTrainingUpdate(props) {
  const statusRef = useRef();

  const navigate = useNavigate("");
  const completionDate = new Date().toJSON().slice(0, 10);
  const apiRegister = (e) => {
    e.preventDefault(); //to fetch internally
    console.log(props.dueDate);
    if (validation()) {
      fetch(
        "http://localhost:8090/tainingdetails/updateTrainingDetails",

        {
          method: "Put",

          body: JSON.stringify({
            trainingId: Number(props.trainingId),
            courseName: props.courseName,
            duration: Number(props.duration),
            courseStatusDTO: {
              courseId: Number(props.trainingId),
              employeeId: Number(props.employeeId),
              dueDate: props.dueDate,
              status: statusRef.current.value,
              completionDate: completionDate,
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
    } else {
      alert("due date already exceded");
    }
  };
  const validation = () => {
    const duration = completionDate <= props.dueDate;
    return duration;
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
      {props.status === "Completed" ? (
        "Completed"
      ) : (
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
      )}
    </>
  );
}

export default TTrainingUpdate;
