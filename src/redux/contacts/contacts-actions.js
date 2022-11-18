
import { v4 as uuidv4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";

export const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: "contactsList",
  initialState: {
    contactsList: defaultContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare(name,number) {
        return {
          payload: {
            name,
            number,
            id: uuidv4(),
          },
        };
      },
    },
    deleteContact(state, {payload}) {
      const index = state.contactsList.findIndex(task => task.id === payload);
      state.contactsList.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export const tasksReducer = contactsSlice.reducer;
