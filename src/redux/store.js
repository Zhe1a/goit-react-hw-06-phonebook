import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contacts/contacts-actions';
import { filterReducers } from './contacts/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filters: filterReducers,
  },
});
