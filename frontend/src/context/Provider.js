
import { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLogged, setIsLogged] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  const contextValue = {
    userData,
    setUserData,
    isLogged,
    setIsLogged,
    tasks,
    setTasks,
    filter,
    setFilter,
  };

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;