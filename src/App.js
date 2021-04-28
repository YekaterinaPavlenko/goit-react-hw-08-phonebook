import React from 'react';
import './App.css';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
