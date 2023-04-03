import { useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';
import {
  getFilteredContacts,
  getVisibleContacts,
} from 'services/filterFunction';

export default function ContactList() {
  const { items, itemsIsLoading } = useSelector(state => state.contacts);
  const { filterName, filterCathegory } = useSelector(state => state.filter);

  const filteredContacts = getFilteredContacts(items, filterCathegory);
  const visibleContacts = getVisibleContacts(filteredContacts, filterName);

  return (
    <List>
      {itemsIsLoading ? (
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        visibleContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))
      )}
    </List>
  );
}
