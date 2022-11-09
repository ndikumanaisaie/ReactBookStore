/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api';

export const createBook = createAsyncThunk('books/createbook', async (updatedBookData) => {
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
    status: 'idle' || 'loading' || 'succeeded' || 'failed',
    books: [],
  },
  reducers: {
    // addBook: (state, action) => {
    //   state.books.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   const { id } = action.payload;
    //   if (id) {
    //     state.books = state.books.filter((book) => book.id !== id);
    //   }
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBook.fulfilled, (state) => {
        state.status = 'succeeded';
        // state.books = action.payload;
      })
      .addCase(createBook.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        let books = action.payload;
        books = Object.entries(books)?.map((book) => ({
          id: book[0],
          category: book[1][0].category,
          title: book[1][0].title,
          author: book[1][0].author,
        }));
        state.books = books;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeded';
        const { id } = action.payload;
        if (id) {
          state.books = state.books.filter((book) => book.id !== id);
        }
      })
      .addCase(deleteBook.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
