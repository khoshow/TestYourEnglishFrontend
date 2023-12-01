import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;
import { isAuth, handleResponse } from "../../../auth";



export const create = (correctWordIntermediate, token) => {
 
  return fetch(`${API}/api/correct-word-intermediate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(correctWordIntermediate),
  })
    .then((response) => {
      
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCorrectWordsIntermediate = () => {
  return fetch(`${API}/api/correct-word-intermediate`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestNo = (testNo) => {
  return fetch(`${API}/api/correct-word-intermediate/${testNo}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleCorrectWordMedium = (slug) => {
  return fetch(`${API}/correct-word-medium/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeCorrectWordMedium = (slug, token) => {
  return fetch(`${API}/correct-word-medium/${slug}`, {
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

export const update = (correctWordMedium, slug, token) => {

  return fetch(`${API}/correct-word-medium/update/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: correctWordMedium,
  })
    .then((response) => {
     
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postScore = (data, token) => {
  return fetch(`${API}/api/correct-word-intermediate/score-update`, {
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
    `${API}/api/correct-word-intermediate/user-test-data/${userId}`,
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
