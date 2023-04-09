import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    onSubmitForm: {
      reducer: (state, { payload }) => {
        const sameNames = state.items.some(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );
        if (sameNames) {
          alert(`${payload.name}is already in contacts`);
          return;
        }
        state.items = [...state.items, payload];
      },
      prepare: newContact => {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
    },

    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { onSubmitForm, deleteContact, changeFilter } =
  ContactsSlice.actions;
