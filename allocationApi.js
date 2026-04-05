import axios from "axios";

const BASE_URL = "http://localhost:8080/allocate/run";

export const allocateSeats = () => {
  return axios.post(BASE_URL);
};