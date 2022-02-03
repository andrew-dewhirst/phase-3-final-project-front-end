import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {

  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/trips')
      .then((r) => r.json())
      .then((trip) => setTrips(trip));
  }, []);

  console.log(trips)

  const filteredTrips = trips.filter((trip) => trip.location.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
