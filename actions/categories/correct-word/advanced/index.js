import fetch from "isomorphic-fetch";
import { API } from "../../../../config";
import { isAuth, handleResponse } from "../../../auth";

export const createCorrectWordAdvanced = (correctWordsAdvanced, token) => {
  console.log("Data from action", correctWordsAdvanced);
  console.log("Token", token);
  return fetch(`${API}/api/correct-word-advanced`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(correctWordsAdvanced),
  })
    .then((response) => {
      // console.log(category.name);
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getcorrectWordsAdvanced = () => {
  return fetch(`${API}/api/correct-word-advanced`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestNo = (testNo) => {
  return fetch(`${API}/api/correct-word-advanced/${testNo}`, {
    Accept: "json/application",
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleCorrectWordAdvanced = (slug) => {
  return fetch(`${API}/correct-word-advanced/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeCorrectWordAdvanced = (slug, token) => {
  return fetch(`${API}/correct-word-advanced/${slug}`, {
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

export const update = (correctWordAdvanced, slug, token) => {
  // console.log("categroy: "+ category);
  return fetch(`${API}/correct-word-advanced/update/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: correctWordAdvanced,
  })
    .then((response) => {
      // console.log(category.name);
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postScore = (data, token) => {
  return fetch(`${API}/api/correct-word-advanced/score-update`, {
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
    `${API}/api/correct-word-advanced/user-test-data/${userId}`,
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


export const testGiveOrNot = (testCategory, token) => {
  const queryString = Object.keys(testCategory)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(testCategory[key])
    )
    .join("&");

  console.log("test Given", testCategory);
  return fetch(`${API}/api/test-given/${queryString}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log("hello this is not working");
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};