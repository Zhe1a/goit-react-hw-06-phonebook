import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contacts/contacts-actions';
import { filterReducers } from './contacts/filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist:['contactsList'],
};


const persistedReducer = persistReducer(contactsPersistConfig, tasksReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filterReducers,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
