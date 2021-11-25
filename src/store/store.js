import { configureStore } from '@reduxjs/toolkit';
import mapReducer from 'src/reducer/mapReducer';

export const store = configureStore({
  reducer: {
    dataState: mapReducer,
  },
});