import axios from "axios";

export default axios.create({
  // baseURL: "http://34.244.217.79:3000",
  baseURL:"http://localhost:3000",
  headers: {
    "Content-type": "application/json",
    Accept:"application/json",

  }
});