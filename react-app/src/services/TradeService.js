import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findTrades = (id) => {
  const trades = axios.get(`${hostNameUrl}/trades/book/${id}`);
  return trades;
};