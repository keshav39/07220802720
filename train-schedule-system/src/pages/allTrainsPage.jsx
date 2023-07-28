// src/pages/AllTrainsPage.js
import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../services/trainService';
import TrainList from '../components/trainList';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getAllTrains()
      .then((response) => {
        // Assuming the API response is an array of trains
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trains:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains.length > 0 ? (
        <TrainList trains={trains} />
      ) : (
        <p>No trains available at the moment.</p>
      )}
    </div>
  );
};

export default AllTrainsPage;
