import axios from "axios";

export const axiousConfig = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})