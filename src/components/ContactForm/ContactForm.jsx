import React, { useState } from 'react';
import { Forma, FormButton, FormField } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { fetchaddContact } from 'Redux/Contacts/Operations';
import { selectContacts } from 'Redux/Contacts/Selectors';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const inputHundleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name-${name} не орбрабатываеться`);
        break;
    }
  };
  const contacts = useSelector(selectContacts);
  const hundleSubmit = event => {
    event.preventDefault();
    const stateValue = { name, number };
    const sameNames = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameNames) {
      toast(`${name}is already in contacts`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(fetchaddContact(stateValue));
    setName('');
    setNumber('');
  };

  return (
    <Forma onSubmit={hundleSubmit}>
      <FormField>
        Name
        <input
          type="text"
          value={name}
          onChange={inputHundleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormField>
      <FormField>
        Number
        <input
          type="tel"
          value={number}
          onChange={inputHundleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormField>

      <FormButton type="submit">Add contact</FormButton>
    </Forma>
  );
};
