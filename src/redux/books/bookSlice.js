/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api';

export const createBook = createAsyncThunk('books/createbook', async ({ updatedBookData }) => {
  try {
    const response = await api.createBook(updatedBookData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await api.getBooks();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deletebook', async ({ id }) => {
  try {
    const response = await api.deleteBook(id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
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
  extraReducers(builder) {
    builder
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = [action.payload];
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id } = action.payload;
        if (id) {
          state.books = state.books.filter((book) => book.id !== id);
        }
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
