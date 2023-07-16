import axios from "axios";

export const axiosInst = axios.create({
  //   baseURL: "https://jsonplaceholder.typicode.com/posts/1",
  baseURL: "http://localhost:3000",
});
