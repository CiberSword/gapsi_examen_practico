import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: "https://axesso-walmart-data-service.p.rapidapi.com",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key" : "fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7"
  },
});
