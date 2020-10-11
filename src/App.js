import React from 'react';
import './App.css';

import useApp from './useApp';

function App() {
  const { value, inc, dec } = useApp()

  return (
    <div className="App">
      {value}
      <button onClick={inc}>
        inc
      </button>
      <button onClick={dec}>
        dec
      </button>
    </div>
  );
}

export default App;
