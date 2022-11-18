import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

function ContactList() {
  const { contacts, filters } = useSelector(state => state);

  const dispatch = useDispatch();
  const onDeleteBtn = id => dispatch(deleteContact(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts(contacts.contactsList, filters.status);

  return (
    <ul className={s.Item}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li className={s.list} key={id}>
            <p>
              {name}: {number}
            </p>
            <button className={s.button} id={id} onClick={e => onDeleteBtn(id)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
