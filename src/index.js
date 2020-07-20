import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from './components/Portfolio.js';
import Homepage from './components/Homepage.js';
import DesignF1tenth from './components/f1tenthDesign.js';
import ForFun from './components/forFun.js';
import HerCampus from './components/herCampus.js';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
    	<Route exact path="/" component={Homepage} />
    	<Route path="/portfolio" component={Portfolio} />
        <Route path="/f1tenth-design" component={DesignF1tenth} />
        <Route path="/for-fun-design" component={ForFun} />
        <Route path="/hercampus-design" component={HerCampus} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
