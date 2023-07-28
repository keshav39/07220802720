// src/pages/SingleTrainPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainById } from '../services/trainService';
import { Card, CardContent, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles({
  card: {
    marginBottom: 20,
    padding: 16,
  },
});

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    getTrainById(trainId)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train details:', error);
      });
  }, [trainId]);

  return (
    <div>
      {train ? (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {train.name}
            </Typography>
            <Typography color="textSecondary">
              Departure Time: {train.departureTime}
            </Typography>
            <Typography color="textSecondary">
              Seat Availability: {train.seatAvailability}
            </Typography>
            <Typography>
              Sleeper Price: ${train.sleeperPrice}
            </Typography>
            <Typography>
              AC Price: ${train.acPrice}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
