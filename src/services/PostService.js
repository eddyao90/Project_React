import { createHttp } from './BaseService';


const authenticatedHttp = createHttp(true);


export const fetchPosts = () => authenticatedHttp.get('/posts');
export const createPost = (newPost) => authenticatedHttp.post('/posts', newPost);
export const updatePost = (id, updatedPost) => authenticatedHttp.patch(`/posts/${id}`, updatedPost);
