import { useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import ContactListItem from './ContactListItem';
import { selectVisibleContacts, selectItemsIsLoading } from 'redux/selectors';
import { List } from './ContactList.styled';

export default function ContactList() {
  const itemsIsLoading = useSelector(selectItemsIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

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
