import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findBook = () => {
  const books = axios.get(`${hostNameUrl}/Book`);
  return books;
};