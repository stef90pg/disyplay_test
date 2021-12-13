import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    services: [],
    active: 'PHOTOGRAPHY',
  },
  reducers: {
    replaceServices(state, action) {
      state.services = action.payload.services;
    },
    setActive(state, action) {
      console.log(action);
      state.active = action.payload;
    },
  },
});

export const aboutActions = aboutSlice.actions;

export default aboutSlice;
