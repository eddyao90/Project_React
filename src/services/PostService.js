import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);
