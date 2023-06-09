import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentUser = () => authenticatedHttp.get('/users/me');

export const getPeopleToFollow = (currentUserId) => authenticatedHttp.get(`/people/${currentUserId}`);

export const editUser = (userInfo) => authenticatedHttp.post('/users/edit', userInfo)

export const getOneUser = (id) => authenticatedHttp.get(`/users/${id}`);

