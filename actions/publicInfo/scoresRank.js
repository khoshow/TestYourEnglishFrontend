import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;

export const getPublicDisplayUserScores = (username) => {
  console.log("I am here", username);
  return fetch(`${API}/api/get-public-display-user-scores/${username}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        // Check if the response status is not in the 2xx range
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch((err) => {
      throw new Error("Failed to fetch user scores");
    });
};
