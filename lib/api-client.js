import { HOST } from "../src/components/utils/constants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: HOST,
  withCredentials: true, // enable sending cookies with the request , for Ahmed hossam
});

export default apiClient;
