import fetch from "isomorphic-fetch";
import { API } from "../config";

export const getRanking = async (toSendSlug) => {

  return fetch(`${API}/api/get-ranking/${toSendSlug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
