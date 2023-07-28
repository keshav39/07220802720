// src/components/TrainList.js
import React from 'react';
import TrainCard from './trainCard';

const TrainList = ({ trains }) => {
  return (
    <div>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
