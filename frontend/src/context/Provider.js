
import { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLogged, setIsLogged] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('ASC');

  const contextValue = {
    userData,
    setUserData,
    isLogged,
    setIsLogged,
    tasks,
    setTasks,
    filter,
    setFilter,
    sortColumn,
    setSortColumn,
    sortOrder,
    setSortOrder,
  };

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;