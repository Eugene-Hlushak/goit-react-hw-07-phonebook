import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactList/ContactListItem';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) return contacts;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
