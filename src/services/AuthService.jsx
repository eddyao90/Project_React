import { createHttp } from './BaseService';

const http = createHttp(false);

export const register = ({ email, password, firstName, lastName, username }) => http.post('/register', { email, password, firstName, lastName, username })


export const login = ({ email, password }) => http.post('/login', { email, password })
