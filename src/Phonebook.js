import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './Phonebook.module.css';

function Phonebook() {
  return (
    <div className={styles.container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default Phonebook;
