import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Conteiner } from './Conteiner.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'Redux/Contacts/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/Contacts/Operations';
import { Toaster, toast } from 'react-hot-toast';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) {
      return;
    }
    toast(error);
  }, [error]);

  return (
    <Conteiner>
      <h2>Phonebook</h2>
      <ContactForm />

      <div>
        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter />}

        {contacts.length > 0 && <ContactList />}
        {isLoading && <p>Loading</p>}
      </div>
      <Toaster />
    </Conteiner>
  );
};
