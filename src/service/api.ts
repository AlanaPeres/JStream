import axios from "axios";

const API_BASE_URL = 'https://localhost:7079';

export const Api = () => {
  return axios.create({
    baseURL: `${API_BASE_URL}`
  })
}
