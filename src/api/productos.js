import base from './base.js';

const endpoint = 'productos';

const findAll = async () => await base.get(endpoint);

const findOne = async (id) => await base.get(`${endpoint}/${id}`);

const create = async (payload) => await base.post(endpoint, payload);

const update = async (id, payload) => await base.put(`${endpoint}/${id}`, payload);

const remove = async (id) => await base.remove(`${endpoint}/${id}`);

const api = { findAll, findOne, create, update, remove };

export default api;