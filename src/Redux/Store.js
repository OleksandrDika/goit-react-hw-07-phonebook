import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './Contacts/Slice';

export const store = configureStore({
  reducer: {
    [ContactsSlice.name]: ContactsSlice.reducer,
  },
});
