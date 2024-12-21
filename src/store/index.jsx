import { configureStore } from '@reduxjs/toolkit';
import mouseReducer from './mouse';

const store = configureStore({
  reducer: {
    mouse: mouseReducer,
  },
});

export default store;