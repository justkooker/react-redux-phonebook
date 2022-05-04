import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactDeleted } from '../../redux/features/phonebook/contactsSlice';
import styles from './ContactList.module.css';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.includes(filter),
  );
  const dispatch = useDispatch();
  return visibleContacts.length !== 0 ? (
    <ul className={styles.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.listItem} key={id}>
          <div className={styles.container}>
            <span>{name}</span>
            <span>{number}</span>
          </div>
          <button
            className={styles.listItemBtn}
            type="button"
            onClick={() => dispatch(contactDeleted(id))}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.noContacts}>No contacts</p>
  );
};

export default ContactList;
