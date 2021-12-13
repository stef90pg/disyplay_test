import { createSlice } from '@reduxjs/toolkit';

const workSlice = createSlice({
  name: 'work',
  initialState: {
    works: [],
    totalPages: 3,
    per: 12,
    page: 1,
    filter: '',
  },
  reducers: {
    replaceWokr(state, action) {
      if (state.filter != action.payload.filter) {
        state.works = [...action.payload.works];
        state.page = action.payload.filter === 'All' ? 2 : 1;
      } else {
        state.works = [...state.works, ...action.payload.works];
        state.page = action.payload.page;
      }

      state.filter = action.payload.filter;
    },
  },
});

export const workActions = workSlice.actions;

export default workSlice;
