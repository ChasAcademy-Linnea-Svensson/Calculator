import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenText, setScreenText] = useState('');
  const [result, setResult] = useState('');
  const [wasPressed, setWasPressed] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        screenText,
        result,
        wasPressed,
        setScreenText,
        setResult,
        setWasPressed,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
