import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
// import { MdLogout } from "react-icons/md"

function Header() {
  const { userData: { name }, setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUserData({});
    navigate('/login');
  };

  return (
    <header className="flex justify-between px-5 py-3 bg-primary items-center">
      <h1 className="text-2xl font-bold">To-do List</h1>
      <div className="flex justify-between items-center">
        <p className="mr-3 text-lg min-h-8">{ name }</p>
        <button type="button" className="btn btn-outline btn-sm" onClick={ logout }>
          Log Out
        </button>
      </div>
    </header>
  )
}

export default Header;