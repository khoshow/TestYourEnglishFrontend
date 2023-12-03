import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;

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

export const getPublicProfile = (username) => {
  console.log("Username", username);
  return fetch(`${API}/api/public-profile/${username}`, {
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
