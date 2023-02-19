import React from "react";
import bin from "./Svg/bin.svg";

function DeleteTrainingDetails(props) {
  const apiDelete = (e) => {
    e.preventDefault(); //to fetch internally

    fetch(
      `http://localhost:8090/tainingdetails/deleteTrainingDetailsById/${props.trainingId}`,

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
        props.setStatus();
      }); //to check response data
  };

  return (
    <>
      <button type="button" className="btn" onClick={apiDelete}>
        <img src={bin} alt="delete"></img>
      </button>
    </>
  );
}

export default DeleteTrainingDetails;
