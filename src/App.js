import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Review from "./Review";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/reviews/:id'>
          <Review />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
