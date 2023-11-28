import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;

export const getTotalTestsNoCorrectWordIntermediate = () => {
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
