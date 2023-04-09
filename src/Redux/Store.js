import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './Contacts/Slice';
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

const persistedContactsReducers = persistReducer(
  {
    storage,
    key: 'contacts',
    whitelist: ['items'],
  },
  ContactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    [ContactsSlice.name]: persistedContactsReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
