// src/services/trainService.js
import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/train"; 
var AUTH_TOKEN;

axios.post(`${API_BASE_URL}/auth`, {
  body: {
    companyName: "DMRC",
    clientID: "9a565944-e994-4421-b03c-3f9512a1c388",
    ownerName: "Keshav Garg",
    ownerEmail: "keshavgarg3902@gmail.com",
    rollNo: "07220802720",
    clientSecret: "SKNVGPOKLVebtrtu",
  },
}).then((Response) => {
    AUTH_TOKEN=Response;
}, (error) => {
  console.log(error);
});

export const getAllTrains = () => {
  return axios.get(`${API_BASE_URL}/trains`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};

export const getTrainById = (trainId) => {
  return axios.get(`${API_BASE_URL}/trains/${trainId}`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};
