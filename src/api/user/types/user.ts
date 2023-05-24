import axios from 'axios'

export function getUser(id: string) {
  return axios.get(`/users/${id}`)
}

export function updateUser(id: string, data: string) {
  return axios.put(`/users/${id}`, data)
}

export function deleteUser(id: string) {
  return axios.delete(`/users/${id}`)
}
