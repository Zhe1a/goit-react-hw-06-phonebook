
import s from './App.module.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';



function App() {

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
