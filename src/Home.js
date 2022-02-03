import React, { useEffect, useState } from "react";
import Search from './Search';

function Home() {


  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/trips')
      .then((r) => r.json())
      .then((trip) => setTrips(trip));
  }, []);

  const filteredTrips = trips.filter((trip) => trip.location.toLowerCase().includes(searchTerm.toLowerCase()));

  console.log(filteredTrips)

  return (
    <div>
      Welcome To TripFinder!
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  )
}

export default Home;