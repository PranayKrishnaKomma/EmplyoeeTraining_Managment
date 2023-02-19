import React from "react";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <nav class="navbar navbar-light bg-info">
          <div class="container-fluid">
            <div class="navbar-header">
              <h2>EMPLOYEE MANAGEMENT SYSTEM</h2>
            </div>
          </div>
        </nav>

        <nav style={{ textAlign: "left" }}></nav>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h3>Click below to Get Started...</h3>

        <div className="button">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login Here
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
