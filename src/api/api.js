import axios from "axios";

const baseURL = "https://workintech-fe-ecommerce.onrender.com";

export const api = axios.create({
  baseURL,
});