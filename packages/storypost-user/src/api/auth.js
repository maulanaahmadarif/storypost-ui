import client from "./client";

export const register = (data) => {
  client
    .post('/auth/register', data)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export const login = (data) => {
  client
    .post('/auth/login', data)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}