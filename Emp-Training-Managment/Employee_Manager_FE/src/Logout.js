import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate("");

  const logout = () => {
    navigate("/Login");
    localStorage.clear();
  };
  useEffect(() => {
    logout();
    // eslint-disable-next-line
  }, []);
}

export default Logout;
