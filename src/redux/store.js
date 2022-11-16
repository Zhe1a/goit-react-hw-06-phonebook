import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import combineReducers from './contacts/contacts-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: combineReducers,
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;