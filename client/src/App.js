import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Home}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
