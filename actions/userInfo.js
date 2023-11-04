import fetch from "isomorphic-fetch";
import { API } from "../config";

export const getUserScores = (user, token) => {

  return fetch(`${API}/api/get-user-scores/${user}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
