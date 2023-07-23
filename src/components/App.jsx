import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.section}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />
      </div>

      <div className={css.section}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
