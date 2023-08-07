import { hostNameUrl } from "../config/api";
import axios from "axios";

const findSecurities = () => {
  const securities = axios.get(`${hostNameUrl}/securities`);
  return securities;
};

const postRedeem = (params) => {
  console.log(params);
  axios.post(`${hostNameUrl}/securities/redeem/${params}`)
}

export {findSecurities, postRedeem}