import axios from 'axios';

const URL ='http://localhost:9000'
//'https://blog-app-liem.herokuapp.com'
export const fetchPosts = () => axios.get(`${URL}/posts`)
export const createPosts = (payload) => axios.post(`${URL}/posts`, payload)
export const updatePosts = (payload) => axios.post(`${URL}/posts/update`, payload)