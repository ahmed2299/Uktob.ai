import './App.css';
import React, { useState} from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [inputString, setInputString] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [outputList, setOutputList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputString || !inputNumber) alert('Please enter both a string and a number.');
    let repeatedString = '';
    for (let i = 0; i < inputNumber; i++) {
      if (i < inputNumber - 1) repeatedString += inputString + ' , ';
      else repeatedString += inputString + ' ';
    }
    setOutputList(repeatedString.split(','));
  };
  return (
    <div className="container my-5 py-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" id="inputString" onChange={(e) => setInputString(e.target.value)} className="form-control" placeholder='Enter string' />
        </div>
        <br />
        <div className="mb-3">
          <input type="number" id="inputNumber" onChange={(e) => setInputNumber(e.target.value)} className="form-control" min={1} placeholder='Enter a number' />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br />
      {outputList.map((output, index) => {
        return (
          <ul>
            <li>
              <h5>{output}</h5>
            </li>
          </ul>
        )
      })}
    </div>
  );
};

export default App;
