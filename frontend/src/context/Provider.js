
import { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [userData, setUserData] = useState({});

  const contextValue = {
    userData,
    setUserData
  };

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;