/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: '',
    categories: [],
  },
  reducers: {
    checkStatus: (state) => {
      state.data = 'Under constuction';
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
