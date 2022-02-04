import React, { useEffect, useState } from "react";
import Search from './Search';
import TripList from './TripList';

function Home() {


  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/trips')
      .then((r) => r.json())
      .then((trip) => setTrips(trip));
  }, []);

  const filteredTrips = trips.filter((trip) => trip.location.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      Welcome To TripFinder!
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ul>
        {filteredTrips.map((trip) =>
        <TripList
          key={trip.id}
          trip={trip}
        />
          )}
      </ul>
    </div>
  );
}

export default Home;