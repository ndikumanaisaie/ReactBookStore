import axios from 'axios';

const API = axios.create({ baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lly0FSl5pPXCoi6SbhlH/' });

export const createBook = (bookData) => API.post('/books', bookData);
export const getBooks = () => API.get('/books');
export const deleteBook = (id) => API.delete(`/books/${id}`);
