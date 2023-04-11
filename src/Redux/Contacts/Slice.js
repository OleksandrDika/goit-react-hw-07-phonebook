import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchaddContact,
  fetchdeleteContact,
} from 'Redux/Contacts/Operations';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      alert(`${state.error}`);
    },
    [fetchaddContact.pending](state, action) {
      state.isLoading = true;
    },
    [fetchaddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.items.push(action.payload);
    },
    [fetchaddContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      alert(`${state.error}`);
    },

    [fetchdeleteContact.pending](state) {
      state.isLoading = true;
    },
    [fetchdeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [fetchdeleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      alert(`${state.error}`);
    },
  },
});

export const { onSubmitForm, deleteContact, changeFilter } =
  ContactsSlice.actions;
