import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";
import DeadRouter from "./router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DeadRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
