import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactList/ContactListItem';
import { List } from 'components/Filter/Filter.styled';
import {
  getFilteredContacts,
  getVisibleContacts,
} from 'services/filterFunction';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  const visibleContacts = getVisibleContacts(filteredContacts, filter);

  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
    </List>
  );
}
