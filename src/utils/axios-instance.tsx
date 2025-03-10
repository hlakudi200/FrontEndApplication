import axios from "axios";

const baseURL=process.env.NEXT_PUBLIC_API_BASE_URL;
export const getAxiosInstace = () =>
  axios.create({
    baseURL: `${baseURL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });