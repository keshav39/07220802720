// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AllTrainsPage from './pages/allTrainsPage';
import SingleTrainPage from './pages/singleTrainPage';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Route exact path="/" component={AllTrainsPage} />
          <Route exact path="/trains/:trainId" component={SingleTrainPage} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
