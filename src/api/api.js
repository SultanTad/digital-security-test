import axios from "axios";
const api = axios.create({
  baseURL: "https://status.neuralgeneration.com/api",
});

export default api;
