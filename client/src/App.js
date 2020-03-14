import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolios from './pages/Portfolios/Portfolios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Portfolios}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
