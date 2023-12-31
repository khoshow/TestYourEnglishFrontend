import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;
import { isAuth, handleResponse } from "../auth";

export const testGiveOrNot = (testCategory, token) => {
    const queryString = Object.keys(testCategory)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(testCategory[key])
      )
      .join("&");
  
  
    return fetch(`${API}/api/test-given/${queryString}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
       
        handleResponse(response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };
  
  
  