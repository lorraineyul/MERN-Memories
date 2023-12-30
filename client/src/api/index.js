import axios from "axios";

const API = axios.create({baseURL:"http://localhost:5000"})


export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const updatePost = (id, updatePost) => axios.patch(`/posts/${id}`, updatePost)
export const deletePost = (id) => axios.delete(`/posts/${id}`)
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)