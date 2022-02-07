import React, { useEffect, useState } from "react";
import Search from './Search';
import TripList from './TripList';

function Home({ filteredTrips, searchTerm, setSearchTerm }) {

  return (
    <div className="home">
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