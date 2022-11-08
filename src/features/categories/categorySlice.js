/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state) => {
      state.books.push('Under construction');
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
