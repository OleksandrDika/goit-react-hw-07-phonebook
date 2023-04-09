import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Conteiner } from './Conteiner.styled';

import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/Contacts/Selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Conteiner>
      <h2>Phonebook</h2>
      <ContactForm />

      <div>
        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter />}

        {contacts.length > 0 && <ContactList />}
      </div>
    </Conteiner>
  );
};
