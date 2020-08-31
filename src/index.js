import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //untuk import default
// import {App1} from './App'; //untuk import by name
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <App1 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
