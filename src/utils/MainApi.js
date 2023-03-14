export const BASE_URL = 'http://localhost:3001';

export const register = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  });
  return checkResponse(res);
};

export const login = async (email, password) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  });
  return checkResponse(res);
};

export const checkToken = async (token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return checkResponse(res);
};

export const changeUserData = async (name, email) => {
  const jwt = localStorage.getItem('jwt');
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email})
  });
  return checkResponse(res);
};

const checkResponse = res => res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
