import axios from 'axios';
import type { CartItem } from '../stores/CartStore';

const STRAPI_BASE_URL = 'https://front-school-strapi.ktsdev.ru';
const CART_URL = `${STRAPI_BASE_URL}/api/cart`;

function authHeaders() {
  const jwt = localStorage.getItem('jwt') || '';
  return { Authorization: `Bearer ${jwt}` };
}

export type CartResponse = {
  data: CartItem[];
};

export const getCart = async (): Promise<CartItem[]> => {
  const response = await axios.get<CartItem[]>(CART_URL, {
    headers: authHeaders(),
  });
  return response.data;
};

export const addToCart = async (productId: number, quantity: number = 1): Promise<CartItem[]> => {
  const response = await axios.post<CartResponse>(
    `${CART_URL}/add`,
    { product: productId, quantity },
    { headers: authHeaders() }
  );
  return response.data.data;
};

export const removeFromCart = async (productId: number, quantity: number = 1): Promise<CartItem[]> => {
  const response = await axios.post<CartResponse>(
    `${CART_URL}/remove`,
    { product: productId, quantity },
    { headers: authHeaders() }
  );
  return response.data.data;
};