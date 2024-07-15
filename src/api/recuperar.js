import base from './base.js';

const endpoint = 'recuperar';

const recuperar = async (payload) => await base.post(endpoint, payload);

const api = { recuperar };

export default api;
