import React from "react";
import Search from './Search';
import TripList from './TripList';

function Home({ filteredTrips, searchTerm, setSearchTerm }) {

  return (
    <div className="home">
      <h1>Welcome To TripFinder!</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ul id="trip">
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