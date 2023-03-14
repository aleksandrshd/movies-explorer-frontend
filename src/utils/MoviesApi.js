export const BASE_URL = 'https://api.nomoreparties.co';

export const getAllFilms = async (token) => {
  const res = await fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return checkResponse(res);
};

const checkResponse = res => res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
