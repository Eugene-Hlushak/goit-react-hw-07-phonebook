import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getStatusFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactList/ContactListItem';
import { List } from 'components/Filter/Filter.styled';
import { fetchContacts } from 'redux/operations';

const getVisibleContacts = ({ items }, filter) => {
  if (!filter) return items;

  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

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
