import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  // State variables for username and secret
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  // Create a context value object with the state variables and setter functions
  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };
  // Return the Context.Provider component with the context value and child components
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
