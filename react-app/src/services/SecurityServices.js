import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findSecurities = () => {
  const securities = axios.get(`${hostNameUrl}/securities`);
  return securities;
};