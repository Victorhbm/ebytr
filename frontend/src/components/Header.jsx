import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function Header() {
  const { userData: { name }, setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUserData({});
    navigate('/login');
  };

  return (
    <header>
      <h1>To-do List</h1>
      <div>
        <p>{ name }</p>
        <button type="button" onClick={ logout }>
          Log Out
        </button>
      </div>
    </header>
  )
}

export default Header;