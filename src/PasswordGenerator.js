

import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PasswordGenerator(){

    const [length, setLength]=useState(10);
    const [uppercase, setUppercase]=useState(false);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true); 
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState("");
    const generatePassword = () => {
        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
        
        let charPool = "";
        if (uppercase) charPool += upperChars;
        if (lowercase) charPool += lowerChars;
        if (numbers) charPool += numberChars;
        if (symbols) charPool += symbolChars;
    
        if (charPool === "") {
          alert("Please select at least one character type.");
          return;
        }
    
        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charPool.length);
          generatedPassword += charPool[randomIndex];
        }
        setPassword(generatedPassword);
      };
    
      const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
      };


      return (
        <div className="card shadow"  >
          <div className="card-body" >
            <h5 className="card-title">Generate a Secure Password</h5>
            <div className="form-group mb-3">
              <label>Generated Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="New Password"
                value={password}
                readOnly
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="uppercase"
                checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="uppercase">
                Include Uppercase Letters
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="lowercase"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="lowercase">
                Include Lowercase Letters
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="numbers"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="numbers">
                Include Numbers
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="symbols"
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="symbols">
                Include Special Symbols
              </label>
            </div>
            <div className="form-group mb-3">
              <label>Password Length</label>
              <input
                type="number"
                className="form-control"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min="6"
                max="20"
              />
            </div>
            <button className="btn btn-success me-2" onClick={generatePassword}>
              Generate Password
            </button>
            <button className="btn btn-danger" onClick={copyToClipboard}>
              Copy Password
            </button>
          </div>
        </div>
      );
    }

    export default PasswordGenerator;

