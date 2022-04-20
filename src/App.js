import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/style.css';
import React from 'react';
import style from '../src/assets/styles/styles';
import { BrowserRouter } from 'react-router-dom';
import Router from './routers/index';

function App() {
  return (
    <div className="body" style={style.body}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
