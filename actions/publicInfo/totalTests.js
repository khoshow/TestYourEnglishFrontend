import fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getTotalTestsNoCorrectWordIntermediate = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-tests/correct-word-intermediate`, {
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

export const getTotalTestsNoCorrectWordAdvanced = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-tests/correct-word-advanced`, {
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

export const getTotalTestsNoCorrectMeaningIntermediate = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-tests/correct-meaning-intermediate`, {
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

export const getTotalTestsNoCorrectMeaningAdvanced = () => {
  return fetch(`${API}/api/total-tests/correct-meaning-advanced`, {
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

export const getTotalTestsNoSynonymsIntermediate = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-tests/synonyms-intermediate`, {
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

export const getTotalTestsNoSynonymsAdvanced = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-tests/synonyms-advanced`, {
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
