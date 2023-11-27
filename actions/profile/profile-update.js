import axios from "axios";
import fetch from "isomorphic-fetch";
import { API } from "../../config";
import { handleResponse } from "../auth";

export const updateStatus = async (data, token) => {
 

  try {
    const response = await axios.put(`${API}/api/profile-update/status`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

   
    handleResponse(response);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Throw the error to handle it in the calling code
  }
};
// Have the above used axios for experiment

export const updateMessage = async (data, token) => {
  return fetch(`${API}/api/profile-update/message`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateName = async (data, token) => {
  return fetch(`${API}/api/profile-update/name`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUsername = async (data, token) => {
  return fetch(`${API}/api/profile-update/username`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateSex = async (data, token) => {
  return fetch(`${API}/api/profile-update/sex`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateDOB = async (data, token) => {
  return fetch(`${API}/api/profile-update/dob`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateCountry = async (data, token) => {
  return fetch(`${API}/api/profile-update/country`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateState = async (data, token) => {
  return fetch(`${API}/api/profile-update/state`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateAbout = async (data, token) => {
  return fetch(`${API}/api/profile-update/about`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUserPhoto = async (image, token) => {

  const formData = new FormData();
  formData.append("photo", image);
 
  return fetch(`${API}/api/profile-update/photo`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const updateUserPhoto = async (data, token) => {
//   console.log("t Chnage:", data);
//   console.log("Data:", token);
//   console.log("API:", API);

//   try {
//     const response = await axios.put(`${API}/api/profile-update/photo`, data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     console.log("Response:", response);
//     handleResponse(response);

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error; // Throw the error to handle it in the calling code
//   }
// };
