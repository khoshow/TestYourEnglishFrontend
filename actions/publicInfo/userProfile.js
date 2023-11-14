import fetch from "isomorphic-fetch";
import { API } from "../../config";

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