import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import AddTeamLeader from "./AddEmployee";
import AddTrainee from "./AddTrainee";
import "./App.css";
import DeleteTeamLead from "./DeleteEmployee";
import DeleteTrainee from "./DeleteTrainee";
import GetAllEmployees from "./GetAllEmployees";

import GetAllTrainees from "./GetAllTrainees";
import Home from "./Home";
import Login from "./Login";
import ManagerDashBoard from "./ManagerDashBoard";
import Registration from "./Registration";
import TeamLeadDashBoard from "./TeamLeadDashBoard";
import TraineeDashBoard from "./TraineeDashBoard";
import UpdateTrainee from "./UpdateTrainee";
import EditEmployees from "./EditEmployees";
import AddEmployee from "./AddEmployee";
import ChangePassword from "./ChangePassword";
import Logout from "./Logout";
import AddCourseStatus from "./AddCourseStatus";
import AddTrainingDetails from "./AddTrainingDetails";
import AddUseCase from "./AddUseCase";
import GetAllUseCases from "./GetAllUseCases";
import GetAllTrainingDetails from "./GetAllTrainingDetails";
import TLGetAllTrainingDetails from "./TLGetAllTrainingDetails";
import EditTrainingDetails from "./EditTrainingDetails";
import EditUseCase from "./EditUseCase";
import TLGetAllUseCases from "./TLGetAllUseCases";
import TGetAllTrainingDetails from "./TGetAllTrainingDetails";
import TGetAllUseCases from "./TGetAllUseCases";
import EmployeeDataContext from "./EmployeeDataContext";
import { useState } from "react";
function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [trainingData, setTrainingData] = useState([]);
  return (
    <>
      <EmployeeDataContext.Provider
        value={{ employeeData, setEmployeeData, trainingData, setTrainingData }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route
              path="/Registration"
              element={<Registration></Registration>}
            ></Route>
            <Route
              path="/ManagerDashBoard"
              element={<ManagerDashBoard></ManagerDashBoard>}
            ></Route>
            <Route
              path="/TeamLeadDashBoard"
              element={<TeamLeadDashBoard></TeamLeadDashBoard>}
            ></Route>
            <Route
              path="/TraineeDashBoard"
              element={<TraineeDashBoard></TraineeDashBoard>}
            ></Route>
            <Route
              path="/AddTeamLeader"
              element={<AddTeamLeader></AddTeamLeader>}
            ></Route>
            <Route
              path="/GetAllEmployees"
              element={<GetAllEmployees></GetAllEmployees>}
            ></Route>
            <Route
              path="/GetAllTrainees"
              element={<GetAllTrainees></GetAllTrainees>}
            ></Route>
            <Route
              path="/AddTrainee"
              element={<AddTrainee></AddTrainee>}
            ></Route>
            <Route
              path="/DeleteTeamLead"
              element={<DeleteTeamLead></DeleteTeamLead>}
            ></Route>
            <Route
              path="/DeleteTrainee"
              element={<DeleteTrainee></DeleteTrainee>}
            ></Route>
            <Route
              path="/EditEmployees"
              element={<EditEmployees></EditEmployees>}
            ></Route>
            <Route
              path="/UpdateTrainee"
              element={<UpdateTrainee></UpdateTrainee>}
            ></Route>
            <Route
              path="/AddEmployee"
              element={<AddEmployee></AddEmployee>}
            ></Route>
            <Route
              path="/ChangePassword"
              element={<ChangePassword></ChangePassword>}
            ></Route>
            <Route path="/Logout" element={<Logout></Logout>}></Route>

            <Route
              path="/AddCourseStatus"
              element={<AddCourseStatus></AddCourseStatus>}
            ></Route>

            <Route
              path="/AddTrainingDetails"
              element={<AddTrainingDetails></AddTrainingDetails>}
            ></Route>

            <Route
              path="/AddUseCase"
              element={<AddUseCase></AddUseCase>}
            ></Route>

            <Route
              path="/GetAllTrainingDetails"
              element={<GetAllTrainingDetails></GetAllTrainingDetails>}
            ></Route>

            <Route
              path="/GetAllUseCases"
              element={<GetAllUseCases></GetAllUseCases>}
            ></Route>
            <Route
              path="/TLGetAllTrainingDetails"
              element={<TLGetAllTrainingDetails></TLGetAllTrainingDetails>}
            ></Route>
            <Route
              path="/EditUseCase"
              element={<EditUseCase></EditUseCase>}
            ></Route>
            <Route
              path="/EditTrainingDetails"
              element={<EditTrainingDetails></EditTrainingDetails>}
            ></Route>
            <Route
              path="/TLGetAllUseCases"
              element={<TLGetAllUseCases></TLGetAllUseCases>}
            ></Route>
            <Route
              path="/TGetAllTrainingDetails"
              element={<TGetAllTrainingDetails></TGetAllTrainingDetails>}
            ></Route>
            <Route
              path="/TGetAllUseCases"
              element={<TGetAllUseCases></TGetAllUseCases>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </EmployeeDataContext.Provider>
    </>
  );
}

export default App;
