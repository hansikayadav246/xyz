import axios from "axios";

const BASE_URL = "http://localhost:8080/halls";

export const addHall = (hall) => {
  return axios.post(BASE_URL, hall);
};