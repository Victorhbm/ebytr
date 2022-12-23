import { useCallback, useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppContext from './context/AppContext.js';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  const { setUserData, isLogged, setIsLogged } = useContext(AppContext);

  const getUserData = useCallback(() => {
    const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user'));

    if (getUserFromLocalStorage) {
      setUserData(getUserFromLocalStorage);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [setUserData, setIsLogged]);

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
