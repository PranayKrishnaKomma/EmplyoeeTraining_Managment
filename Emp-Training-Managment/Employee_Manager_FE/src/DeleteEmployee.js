import React from "react";

function DeleteEmployee(props) {
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
        return res.ok;
      }) //takes response and convert into text

      .then((resp) => {
        console.log(resp);
        if (resp) {
          alert("Employee Deleted Sucessfully");
        } else {
          alert("pls check if employee if assigned with task");
        }
        props.onHide();
      }); //to check response data
  };

  return (
    <>
      <button type="button" className="btn" onClick={apiDelete}>
        Confirm
      </button>
    </>
  );
}

export default DeleteEmployee;
