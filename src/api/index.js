import axios from 'axios';

const API = axios.create({ baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/app/abc234/' });

export const createBook = (bookData) => API.post('/books', bookData);
export const getBook = () => API.get('/books');
export const deleteBook = (id) => API.delete(`/books/${id}`);
