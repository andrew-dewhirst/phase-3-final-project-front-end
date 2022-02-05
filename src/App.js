import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Review from "./Review";

function App() {

  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/trips')
      .then((r) => r.json())
      .then((trip) => setTrips(trip));
  }, []);

  const filteredTrips = trips.filter((trip) => trip.location.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home filteredTrips={filteredTrips} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </Route>
        <Route exact path='/reviews/:id'>
          <Review trips={trips}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
