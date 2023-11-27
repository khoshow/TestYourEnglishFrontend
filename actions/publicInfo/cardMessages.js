import fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getCardMessages = () => {

  return fetch(`${API}/api/get-card-messages`, {
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

export const getWhenCorrectMessages = () => {
 
  return fetch(`${API}/api/get-correct-messages`, {
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

export const getWhenWrongMessages = () => {
 
  return fetch(`${API}/api/get-wrong-messages`, {
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
