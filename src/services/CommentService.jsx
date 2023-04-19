
 

import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const createComment = (infoToSend) => authenticatedHttp.post(`scrapbook/comments`, infoToSend);

export const getComments = (id) => authenticatedHttp.get(`scrapbook/comments/${id}`);

export const deleteComment = (commentId) => authenticatedHttp.delete(`scrapbook/comments/${commentId}`);

