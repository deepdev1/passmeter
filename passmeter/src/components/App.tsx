import React from 'react';
import logo from './logo.svg';
import Searchbar from './Searchbar';
import { getInputDataStrength } from "../services/AppService";
import "./App.scss";
import Gauge from './Gauge';
import Metrics from './Metrics';

function App() {
  // getInputDataStrength().subscribe( (data) => {
  //   console.log(data);
  // })
  return (
    <div className="app-container">
      <Searchbar />
      {/* <Gauge /> */}
      <Metrics />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
