import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contacts-actions';

export const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
      state.filter(contact => {
        console.log(contact);
        return contact.id !== payload;
      }),
  }
);

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,  
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
