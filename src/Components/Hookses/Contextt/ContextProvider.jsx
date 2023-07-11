import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export default ContextProvider;
