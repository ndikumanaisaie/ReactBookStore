/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    book: {},
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem('books', JSON.stringify({ ...action.payload }));
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      if (id) {
        state.books = state.books.filter((book) => book.id !== id);
      }
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
