import fetch from "isomorphic-fetch";
import { API } from "../config";

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
