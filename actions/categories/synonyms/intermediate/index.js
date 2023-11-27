import fetch from "isomorphic-fetch";
import { API } from "../../../../config";
import { isAuth, handleResponse } from "../../../auth";

export const createSynonymsIntermediate = (synonymsIntermediate, token) => {
  return fetch(`${API}/api/synonyms-intermediate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(synonymsIntermediate),
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSynonymsIntermediate = () => {
  return fetch(`${API}/api/synonyms-intermediate`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestNo = (testNo) => {
  return fetch(`${API}/api/synonyms-intermediate/${testNo}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeSynonymsIntermediate = (slug, token) => {
  return fetch(`${API}/synonyms-intermediate/${slug}`, {
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

export const update = (synonymsIntermediate, slug, token) => {
  return fetch(`${API}/synonyms-intermediate/update/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: synonymsIntermediate,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postScore = (data, token) => {
  return fetch(`${API}/api/synonyms-intermediate/score-update`, {
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
  return fetch(`${API}/api/synonyms-intermediate/user-test-data/${userId}`, {
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
