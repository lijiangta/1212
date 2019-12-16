import axios from "axios";

const baseURL1 = "http://106.54.54.237:8000/api/v1"
const baseURL2 = "http://123.207.32.32:8000/api/vip"
export function request(config){

  const instance = new axios.create({
    baseURL:baseURL1 || baseURL2,
    timeout:10000
  })

  return instance(config);
}