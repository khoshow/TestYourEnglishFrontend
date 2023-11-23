import fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getTotalTestNoCorrectWordIntermediate = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-test/correct-word-intermediate`, {
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

export const getTotalTestNoCorrectWordAdvanced = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-test/correct-word-advanced`, {
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

export const getTotalTestNoCorrectMeaningIntermediate = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-test/correct-meaning-intermediate`, {
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

export const getTotalTestNoCorrectMeaningAdvanced = () => {
  return fetch(`${API}/api/total-test/correct-meaning-advanced`, {
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

export const getTotalTestNoSynonymsIntermediate = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-test/synonyms-intermediate`, {
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

export const getTotalTestNoSynonymsAdvanced = () => {
  console.log("I am here");
  return fetch(`${API}/api/total-test/synonyms-advanced`, {
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
