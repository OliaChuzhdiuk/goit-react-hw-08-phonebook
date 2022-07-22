import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredContacts } from 'redux/contacts/selectors';
import contactsOperations from 'redux/contacts/operations';
import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(contactsOperations.deleteContact(id))}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
