// import React, { useEffect, useState } from "react";
// import { Tree, TreeNode } from "react-organizational-chart";

// const EmployeeTree = () => {
//   const [data, setData] = useState([]);
//   const apiGetTeamLeader = () => {
//     fetch("http://localhost:8090/employee/GetAllEmployee")
//       .then((res) => {
//         return res.json();
//       }) //takes response and convert into text
//       .then((resp) => {
//         console.log(resp);
//         setData(resp);
//       }); //to check response data
//   };
//   const Manager = data.filter((d) => d.designation === "Manager");
//   const Teamleader = data.filter((d) => d.designation === "Teamleader");
//   const Trainee = data.filter((d) => d.designation === "Trainee");

//   useEffect(() => {
//     apiGetTeamLeader();
//   }, []);
//   return (
//     <>
//       {data.map((d) => {
//         return (
//           <div>
//             {data
//               .filter((d) => d.designation === "Teamleader")
//               .map((d) => {
//                 return (
//                   <div>
//                     <Tree label={<div>{d.employeeName}</div>}>
//                       <TreeNode label={<div>Teamleader</div>}>
//                         <TreeNode label={<div>Trainee</div>}></TreeNode>
//                       </TreeNode>
//                     </Tree>
//                   </div>
//                 );
//               })}
//           </div>
//         );
//       })}
//     </>
//   );
// };
// export default EmployeeTree;
