import { useCallback, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppContext from './context/AppContext.js';
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';
import Register from './pages/Register.jsx';

function App() {
  const { setUserData } = useContext(AppContext);
  const [isLogged, setIsLogged] = useState(true);

  const getUserData = useCallback(() => {
    const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user'));

    if (getUserFromLocalStorage) {
      setUserData(getUserFromLocalStorage);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [setUserData]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={
          isLogged
            ? <Main />
            : <Navigate to="/login" />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
