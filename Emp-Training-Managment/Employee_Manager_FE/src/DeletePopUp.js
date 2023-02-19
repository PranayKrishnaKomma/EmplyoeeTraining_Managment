import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import bin from "./Svg/bin.svg";
import DeleteEmployee from "./DeleteEmployee";

function DeletePopUp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    props.setStatus();
  };
  const handleShow = () => {
    setShow(true);
    props.setStatus();
  };

  return (
    <>
      <Button variant="active" onClick={handleShow}>
        {" "}
        <img src={bin} alt="delete"></img>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Click Confirm if you want to Remove<br></br>
          <b>{props.employeeName}</b> with <b>{props.email}</b> <br></br>from
          DataBase
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <div style={{ backgroundColor: "red", borderRadius: "0.5rem" }}>
            <DeleteEmployee
              employeeId={props.employeeId}
              onHide={() => {
                handleClose();
              }}
            ></DeleteEmployee>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeletePopUp;
