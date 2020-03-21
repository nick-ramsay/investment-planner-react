import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolios from './pages/Portfolios/Portfolios';
import NewPortfolio from './pages/NewPortfolio/NewPortfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Portfolios}></Route>
            <Route exact path="/new-portfolio" component={NewPortfolio}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
