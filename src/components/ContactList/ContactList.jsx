import React from 'react';
import { ButtonList, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/Slice';
import { selectContacts, selectFilter } from 'Redux/Contacts/Selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <ul>
      {visibleContacts.map(item => {
        return (
          <Item key={item.id}>
            {item.name}:{item.number}
            <ButtonList
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </ButtonList>
          </Item>
        );
      })}
    </ul>
  );
};
