import Dropdown from "react-bootstrap/Dropdown";
import Profile from "./Svg/profile.svg";

function ProfileDropDown() {
  //   const [name, setName] = useState("");

  //   function getLocalStorage() {
  //     localStorage.length === 1 &&
  //       setName(JSON.parse(localStorage.getItem("jsonData")).employeeName);
  //   }
  //   useEffect(() => {
  //     getLocalStorage();
  //   }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="active" id="dropdown-basic">
        <img src={Profile} alt="profile"></img>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <h4 style={{ textAlign: "center" }}>{name}</h4> */}
        <Dropdown.Item href="/ChangePassword">Change Password</Dropdown.Item>
        <Dropdown.Item href="/Logout">Signout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropDown;
