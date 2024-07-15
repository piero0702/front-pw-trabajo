import base from './base.js';

const endpoint = 'signup';

const register = async (payload) => await base.post(endpoint, payload);

const api = { register };

export default api;
