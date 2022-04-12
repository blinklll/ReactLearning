import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import ExpiredClosure from './components/ExpiredClosure'

function App() {
  let [kun,setKun] = useState({})
  // let getFun = Promise.resolve(2);
  // getFun.then((res)=>{
  //   setKun(res);
  //   console.log(res);
  // })
  setTimeout(() => {
    //setKun({});
    console.log(19999);
  }, 5000);

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ExpiredClosure/>
    </div>
  );
}

export default App;
