import fetch from "isomorphic-fetch";
import { API } from "../../config";

export const getCategoryRanking = async (slugForRank) => {

  return fetch(`${API}/api/get-category-ranking/${slugForRank}`, {
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
