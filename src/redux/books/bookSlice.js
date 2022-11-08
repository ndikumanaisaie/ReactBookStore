/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    book: {},
    books: [
      {
        title: 'Conan the barbarian',
        author: 'Ndikumana Isaie',
        id: '2wEoOULJ9t76goGgjhPZn',
      },
      {
        title: 'React tutorial for dummies',
        author: 'Ndikumana Isaie',
        id: '2wEoOULJ9t76aoGgjhPZn',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
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
