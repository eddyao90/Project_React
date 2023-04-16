import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);

export const followUser = (id, currentUserId) => authenticatedHttp.post(`/follow/${id}`, {currentUserId});

