import { useContext, useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';

import { ContextProvider } from './GlobalContext';

function App() {
  return (
    <ContextProvider>
      <div className='flex items-center justify-center h-[100vh]'>
        <Calculator />
      </div>
    </ContextProvider>
  );
}

export default App;
