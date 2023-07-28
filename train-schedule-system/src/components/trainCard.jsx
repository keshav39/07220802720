// src/components/TrainCard.js
import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles({
  card: {
    marginBottom: 20,
    padding: 16,
  },
});

const TrainCard = ({ train }) => {
  const classes = useStyles();

  return (
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
  );
};

export default TrainCard;
