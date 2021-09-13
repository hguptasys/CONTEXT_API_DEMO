import React, { createContext, useReducer, Children } from "react";
import data_1_reducer from "./reducers/Data_1";
import data_1 from "./initialState/Data_1";
import data_2_reducer from "./reducers/Data_2";
import data_2 from "./initialState/Data_2";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [data_1State, data_1Dispatch] = useReducer(data_1_reducer, data_1);
  const [data_2State, data_2Dispatch] = useReducer(data_2_reducer,data_2);

  return (
    <GlobalContext.Provider
      value={{
        data_1State,
        data_1Dispatch,
        data_2State,
        data_2Dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};