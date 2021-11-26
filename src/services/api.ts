import axios from "axios";

const api = axios.create({
  baseURL: "http://dev.alexandria.solar:8888",
});

export default api;