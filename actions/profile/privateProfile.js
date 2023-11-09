import _fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getPrivateProfile = (user) => {
  console.log("User", user);
  return fetch(`${API}/api/getUserProfile/${user}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
