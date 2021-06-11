import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import {AllegroMusic} from './components/App';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <AllegroMusic/>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


