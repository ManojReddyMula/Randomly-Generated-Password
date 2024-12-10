
import './App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="container mt-5" >
      <h1 className="text-center mb-4">Randomly Generated Password</h1>
      <PasswordGenerator />
    
   </div>
  );
}

export default App;
