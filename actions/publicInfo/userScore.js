import fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getUserScores = (user, scoreCategory) => {
  return fetch(`${API}/api/${scoreCategory}/${user}`, {
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
