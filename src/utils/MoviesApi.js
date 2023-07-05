import {checkResponse} from "./MainApi";

export const BASE_URL = 'https://api.nomoreparties.co';

export const getAllMovies = async () => {
  const res = await fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return checkResponse(res);
};
