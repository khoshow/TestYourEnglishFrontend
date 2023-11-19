import fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getTotalTestNo = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-test/correct-word-intermediate`, {
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
