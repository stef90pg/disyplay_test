import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    sliders: [],
  },
  reducers: {
    replaceSliders(state, action) {
      state.sliders = action.payload.sliders;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice;
