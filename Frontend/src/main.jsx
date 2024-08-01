import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from "react";

export const Context = createContext({ isAuthenticated: false});

const AppWrapper = ()=>{
  const [isAuthenticated, setsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider 
      value={{isAuthenticated, setsAuthenticated, user, setUser}}
    >
      <App />
    </Context.Provider>
  )
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
