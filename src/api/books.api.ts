import { api } from "./api";

export const createLivro = (livroData: object) => api.post('/livros', livroData);
export const getAllLivros = () => api.get('/livros');
export const getLivroById = (id: string) => api.get(`/livros/${id}`);
export const updateLivro = (id: string, livroData: object) => api.put(`/livros/${id}`, livroData);
export const deleteLivro = (id: string) => api.delete(`/livros/${id}`);
export const createEmprestimo = (emprestimoData: object) => api.post('/emprestimos', emprestimoData);
export const getAllEmprestimos = () => api.get('/emprestimos');
export const getEmprestimoById = (id: string) => api.get(`/emprestimos/${id}`);
export const updateEmprestimo = (id: string, emprestimoData: object) => api.put(`/emprestimos/${id}`, emprestimoData);
export const deleteEmprestimo = (id: string) => api.delete(`/emprestimos/${id}`);
