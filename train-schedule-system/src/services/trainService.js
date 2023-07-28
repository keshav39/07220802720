// src/services/trainService.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144:80/train/trains'; // Replace with the actual API base URL
const AUTH_TOKEN = 'sAzlpA'; // Replace with the actual authentication token

export const getAllTrains = () => {
  return axios.get(`${API_BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};

export const getTrainById = (trainId) => {
  return axios.get(`${API_BASE_URL}/${trainId}`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};
