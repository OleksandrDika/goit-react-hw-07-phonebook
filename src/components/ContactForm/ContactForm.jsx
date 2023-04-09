import React, { useState } from 'react';
import { Forma, FormButton, FormField } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { onSubmitForm } from 'Redux/Contacts/Slice';

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

  const hundleSubmit = e => {
    e.preventDefault();
    const stateValue = { name, number };
    dispatch(onSubmitForm({ ...stateValue }));
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
