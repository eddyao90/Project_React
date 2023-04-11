import { createHttp } from './BaseService';
import axios from 'axios';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${http}/${id}`, updatedPost);