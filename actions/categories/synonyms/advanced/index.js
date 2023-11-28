import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;
import { isAuth, handleResponse } from "../../../auth";

export const createSynonymsAdvanced = (synonymsAdvanced, token) => {
 
  return fetch(`${API}/api/synonyms-advanced`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(synonymsAdvanced),
  })
    .then((response) => {
     
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSynonymsAdvanced = () => {
  return fetch(`${API}/api/synonyms-advanced`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestNo = (testNo) => {
  return fetch(`${API}/api/synonyms-advanced/${testNo}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};



export const removeSynonymsAdvanced = (slug, token) => {
  return fetch(`${API}/synonyms-advanced/${slug}`, {
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

export const update = (synonymsAdvanced, slug, token) => {
 
  return fetch(`${API}/synonyms-advanced/update/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: synonymsAdvanced,
  })
    .then((response) => {
 
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postScore = (data, token) => {

  return fetch(`${API}/api/synonyms-advanced/score-update`, {
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
  return fetch(
    `${API}/api/synonyms-advanced/user-test-data/${userId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
 
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

