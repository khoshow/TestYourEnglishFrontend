import fetch from "isomorphic-fetch";
import { API } from "../config";

export const getUserProfile = (user, token) => {
  return fetch(`${API}/api/getUserProfile/${user}`, {
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
      if (!response.ok) {
        console.log("ressss", response);
        // Check if the response status is not in the 2xx range
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch((err) => {
      throw new Error("Failed to fetch user scores");
    });
};

export const getPublicDisplayUserScores = () => {
  return fetch(`${API}/api/get-public-display-user-scores/${user}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
     
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log("ressss", response);
        // Check if the response status is not in the 2xx range
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch((err) => {
      throw new Error("Failed to fetch user scores");
    });
};
