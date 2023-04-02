import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getStatusFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactList/ContactListItem';
import { List } from 'components/Filter/Filter.styled';
import { fetchContacts } from 'redux/operations';

const getVisibleContacts = (contacts, filter) => {
  if (!filter.filterName) return contacts;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filterName.toLowerCase())
  );
};

const getFilteredContacts = ({ items }, filter) => {
  if (filter.filterGroup === 'all') return items;
  return items.filter(contact => contact.group.includes(filter.filterGroup));
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const filteredContacs = getFilteredContacts(contacts, filter);
  const visibleContacts = getVisibleContacts(filteredContacs, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
    </List>
  );
}
