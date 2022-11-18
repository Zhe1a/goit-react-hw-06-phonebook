
import s from './App.module.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const contactsList = useSelector(state => {
    return state.contacts;
  });
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  return (
    <>
      <h1 className={s.titel}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.titel}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
