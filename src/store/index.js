import { configureStore } from '@reduxjs/toolkit';
import aboutSlice from './About/about-slice';
import homeSlice from './Home/home-slice';
import workSlice from './Work/work-slice';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    about: aboutSlice.reducer,
    work: workSlice.reducer,
  },
});

export default store;
