import fetch from "isomorphic-fetch";
import cookie from "js-cookie";
// import { API } from "../../config";
import Router from "next/router";
import { useRouter } from "next/router";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const API = publicRuntimeConfig.API;

export const handleResponse = (response) => {
  if (response.status === 401) {
    signout(() => {
      Router.push({
        pathname: "/signin",
        query: {
          message: "Your session is expired. Please signin.",
        },
      });
    });
  }
};

export const checkUsername = (username) => {
  return fetch(`${API}/username-availability/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return console.log("Rsponse from server");
      // return response.json();
    })
    .catch((err) => console.log(err));
};

// export const preSignup = (user) => {
//   console.log("Api Production 2", `${API}/api/pre-signup`);
//   return fetch(`${API}/api/pre-signup`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

export const signupWithoutPreSignUp = (user) => {
  console.log("Api Production 2", `${API}/api/without-pre-signup`);
  return fetch(`${API}/api/without-pre-signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signup = (token) => {
  return fetch(`${API}/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  console.log("Sign in", `${API}/api/signin`);
  return fetch(`${API}/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const signout = async (req, res) => {
//   removeCookie("token");
//   removeLocalStorage("user");

//   return await fetch(`${API}/api/signout`, {
//     method: "GET",
//     Accept: "application/json",

//   })
//     .then((response) => {
//       console.log("sig", response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

export const signout = async (req, res) => {
  removeCookie("token");
  removeLocalStorage("user");

  try {
    const response = await fetch(`${API}/api/signout`, {
      method: "GET",
      Accept: "application/json",
    });

    if (!response.ok) {
      throw new Error(`Signout failed with status ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error("Error during signout:", err);
    throw err; // Rethrow the error to be handled in the calling code
  }
};

// set cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};
// get cookie
export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};
// localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      const storedUserData = localStorage.getItem("user");
      if (storedUserData) {
        try {
          const userData = JSON.parse(storedUserData);
          return userData;
        } catch (error) {
          console.error("Error parsing user data:", error);
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return false;
};

export const updateUser = (user, next) => {
  if (process.browser) {
    if (localStorage.getItem("user")) {
      let auth = JSON.parse(localStorage.getItem("user"));
      auth = user;
      localStorage.setItem("user", JSON.stringify(auth));
      next();
    }
  }
};

export const forgotPassword = (email) => {
  return fetch(`${API}/forgot-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const resetPassword = (resetInfo) => {
  return fetch(`${API}/reset-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetInfo),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const loginWithGoogle = (user) => {
  return fetch(`${API}/google-login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tokenId: user }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
