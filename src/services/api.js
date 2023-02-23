import axios from "axios";

export const getAllModes = () => {
  return axios.get('http://demo7919674.mockable.io')
  .then((res) => res.data)
}