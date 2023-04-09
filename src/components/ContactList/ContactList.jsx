import React from 'react';
import { ButtonList, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/Slice';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'Redux/Contacts/Selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();
  console.log(isLoading);
  return (
    <ul>
      {visibleContacts.map(item => {
        return (
          <Item key={item.id}>
            {item.name}:{item.phone}
            <ButtonList
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </ButtonList>
            {isLoading && <p>Loading</p>}
          </Item>
        );
      })}
    </ul>
  );
};
