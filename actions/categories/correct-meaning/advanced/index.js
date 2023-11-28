import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;
import { isAuth, handleResponse } from "../../../auth";

export const createCorrectMeaningAdvanced = (correctMeaningAdvanced, token) => {

  return fetch(`${API}/api/correct-meaning-advanced`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(correctMeaningAdvanced),
  })
    .then((response) => {
    
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCorrectMeaningAdvanced = () => {
  return fetch(`${API}/api/correct-meaning-advanced`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestNo = (testNo) => {
  return fetch(`${API}/api/correct-meaning-advanced/${testNo}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleCorrectMeaningAdvanced = (slug) => {
  return fetch(`${API}/correct-meaning-advanced/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeCorrectMeaningAdvanced = (slug, token) => {
  return fetch(`${API}/correct-meaning-advanced/${slug}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (correctMeaningAdvanced, slug, token) => {

  return fetch(`${API}/correct-meaning-advanced/update/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: correctMeaningAdvanced,
  })
    .then((response) => {
    
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postScore = (data, token) => {
  return fetch(`${API}/api/correct-meaning-advanced/score-update`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
    
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getTestData = (userId, token) => {
  return fetch(`${API}/api/correct-meaning-advanced/user-test-data/${userId}`, {
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
