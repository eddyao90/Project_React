import { createHttp } from './BaseService';

const http = createHttp(false);

export const register = ({ firstName, lastName, email, password}) => http.post('/register', { firstName, lastName, email, password})


export const login = ({ email, password }) => http.post('/login', { email, password })
