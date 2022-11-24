import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFiler } from 'redux/selectors';

import { ButtonDelete, List } from './ContactListStyled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiler);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {visibleContacts.map(contact => (
        <List key={contact.id}>
          {contact.name}: {contact.phone}
          <ButtonDelete
            type="button"
            onClick={() => deleteSelectedContact(contact.id)}
          >
            Delete
          </ButtonDelete>
        </List>
      ))}
    </ul>
  );
};
