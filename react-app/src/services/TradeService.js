import { hostNameUrl } from "../config/api";
import axios from "axios";

const findTrades = (id) => {
  const trades = axios.get(`${hostNameUrl}/trades/book/${id}`);
  return trades;
};

const findTradesID = (id) => {
  const trades = axios.get(`${hostNameUrl}/trades/security/${id}`);
  return trades;
};

export {findTrades, findTradesID}