// services/api.js
import axios from 'axios'

const API_URL = 'https://dummyjson.com'

export const getProducts = (limit = 10, skip = 0) =>
  axios.get(`${API_URL}/products?limit=${limit}&skip=${skip}`)

export const getProduct = (id) => axios.get(`${API_URL}/products/${id}`)

export const getCategories = () => axios.get(`${API_URL}/products/categories`)

export const getProductsByCategory = (category) =>
  axios.get(`${API_URL}/products/category/${category}`)

export const searchProducts = (query) =>
  axios.get(`${API_URL}/products/search?q=${query}`)

export const addProduct = (product) =>
  axios.post(`${API_URL}/products/add`, product)

export const updateProduct = (id, product) =>
  axios.put(`${API_URL}/products/${id}`, product)

export const deleteProduct = (id) =>
  axios.delete(`${API_URL}/products/${id}`)
