import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const commentPost = (comment, id) => API.post(`/posts/${id}/commentPost`, { comment });
export const deleteCommentPost = (comment, id) => API.post(`/posts/${id}/deleteCommentPost`, { comment });

export const login = (authData) => API.post('/auth/login', authData);
export const register = (authData) => API.post('/auth/register', authData);