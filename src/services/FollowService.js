import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);

export const followUser = (id, currentUserId) => authenticatedHttp.post(`/follow/${id}`, {currentUserId});

export const getPeopleIFollow = (currentUserId) => authenticatedHttp.get(`/follow/following/${currentUserId}`);

export const getPeopleWhoFollows = (currentUserId) => authenticatedHttp.get(`/follow/followers/${currentUserId}`);