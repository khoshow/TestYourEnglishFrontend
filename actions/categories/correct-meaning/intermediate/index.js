import fetch from "isomorphic-fetch";
import { API } from "../../../../config";
import { isAuth, handleResponse } from "../../../auth";

export const createCorrectMeaningIntermediate = (
  correctMeaningIntermediate,
  token
) => {
  console.log("Data from action", correctMeaningIntermediate);
  console.log("Token", token);
  return fetch(`${API}/api/correct-meaning-intermediate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(correctMeaningIntermediate),
  })
    .then((response) => {
      // console.log(category.name);
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCorrectMeaningsIntermediate = () => {
  return fetch(`${API}/api/correct-meaning-intermediate`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestNo = (testNo) => {
  return fetch(`${API}/api/correct-meaning-intermediate/${testNo}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleCorrectMeaningIntermediate = (slug) => {
  return fetch(`${API}/correct-meaning-intermediate/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeCorrectMeaningIntermediate = (slug, token) => {
  return fetch(`${API}/correct-meaning-intermediate/${slug}`, {
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

export const update = (correctMeaningIntermediate, slug, token) => {
  // console.log("categroy: "+ category);
  return fetch(`${API}/correct-meaning-intermediate/update/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: correctWordMedium,
  })
    .then((response) => {
      // console.log(category.name);
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postScore = (data, token) => {
  return fetch(`${API}/api/correct-meaning-intermediate/score-update`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // console.log(category.name);
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestData = (userId, token) => {
  return fetch(
    `${API}/api/correct-meaning-intermediate/user-test-data/${userId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      // console.log(category.name);
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
