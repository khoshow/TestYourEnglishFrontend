import _fetch from "isomorphic-fetch";
import { API } from "../config";

export const sendQuery = (formData) => {
  
    return fetch(`${API}/api/contact-form`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };