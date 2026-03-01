import axios from "axios";

// Читаем jwt при каждом запросе, а не один раз при загрузке модуля
function authHeaders() {
  const jwt = localStorage.getItem("jwt") || "";
  return jwt ? { authorization: `Bearer ${jwt}` } : {};
}

export const api = axios.create({
  baseURL: "https://front-school-strapi.ktsdev.ru/api/products",
});

export const apiCategories = axios.create({
  baseURL: "https://front-school-strapi.ktsdev.ru/api/product-categories",
});

// Интерсептор подставляет актуальный токен перед каждым запросом
[api, apiCategories].forEach((instance) => {
  instance.interceptors.request.use((config) => {
    Object.assign(config.headers, authHeaders());
    return config;
  });
});
