import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/sortSlice';
import filtersReducer from './slices/filtersSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filters: filtersReducer,
  },
});

export default store;
