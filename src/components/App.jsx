
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
  // const [contactsList, setContactsList] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? value
  // );
  // const [filter, setFilter] = useState('');
  // const addTodo = elm => {
  //   setContactsList(el => [...el, elm]);
  // };
  // const remove = id => {
  //   setContactsList(el => el.filter(el => el.id !== id));
  // };
  // const onFilter = e => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contactsList));
  // }, [contactsList]);
  // const contactsUser = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   const contactUser =
  //     filter === ''
  //       ? contactsList
  //       : contactsList.filter(el =>
  //           el.name.toLowerCase().includes(normalizedFilter)
  //         );
  //   return contactUser;
  // };

  return (
    <>
      <h1 className={s.titel}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.titel}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
  // return (
  //   <>
  //     <h1 className={s.titel}>Phonebook</h1>
  //     <ContactForm addTodo={addTodo} contacts={contactsList} />
  //     <h2 className={s.titel}>Contacts</h2>
  //     <Filter filter={onFilter} value={filter} />
  //     <ContactList  />
  //   </>
  // );
};

export default App;
