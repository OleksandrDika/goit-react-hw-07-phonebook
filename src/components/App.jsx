import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Conteiner } from './Conteiner.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'Redux/Contacts/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/Contacts/Operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    </Conteiner>
  );
};