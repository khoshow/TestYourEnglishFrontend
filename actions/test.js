import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;

export const getTestTypes = () => {
  return fetch(`${API}/api/testList`, {
    method: "GET",
    "Accept": "application/json",
    "Content-Type": "application/json",
  })
    .then((response) => {
 
      return response.json();
    })
    .catch((err) => console.log(err));
};
