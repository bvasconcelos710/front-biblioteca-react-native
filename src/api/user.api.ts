import { api } from './api';

export const login = async (email: string, password: string) => {
	const response = await api.post('/usuarios/login', { email, senha: password });
	console.log(response);
	return response.data;
}

// GET all usuarios
export const getUsers = () => api.get('/usuarios');

// GET a single usuario by ID
export const getUserById = (id: string) => api.get(`/usuarios/${id}`);

// POST a new usuario
export const createUser = (userData: object) => api.post('/usuarios', userData);

// PUT update a usuario
export const updateUser = (id: string, userData: object) => api.put(`/usuarios/${id}`, userData);

// DELETE a usuario
export const deleteUser = (id: string) => api.delete(`/usuarios/${id}`);