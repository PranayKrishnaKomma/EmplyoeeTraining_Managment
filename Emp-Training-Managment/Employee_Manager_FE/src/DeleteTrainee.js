import React from "react";
import bin from "./Svg/bin.svg";

function DeleteTrainee(props) {
  const apiDelete = (e) => {
    e.preventDefault(); //to fetch internally

    fetch(
      `http://localhost:8090/employee/deleteEmployee/${props.employeeId}`,

      {
        method: "DELETE",
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

  return (
    <>
      <button type="button" class="btn" onClick={apiDelete}>
        <img src={bin} alt="delete"></img>
      </button>
    </>
  );
}

export default DeleteTrainee;
