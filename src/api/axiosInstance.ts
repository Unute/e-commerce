import axios from "axios";

const API_TOKEN = import.meta.env.API_TOKEN;

export const api = axios.create({
  baseURL: "https://front-school-strapi.ktsdev.ru/api/products",
  headers: {
    authorization: `${API_TOKEN}`,
  },
});
