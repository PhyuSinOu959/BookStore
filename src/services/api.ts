import axios from 'axios';
import { Book } from '../types';

const API_BASE_URL = 'YOUR_API_URL';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const bookService = {
  getBooks: () => api.get<Book[]>('/books'),
  getBookById: (id: string) => api.get<Book>(`/books/${id}`),
  searchBooks: (query: string) => api.get<Book[]>(`/books/search?q=${query}`),
}; 