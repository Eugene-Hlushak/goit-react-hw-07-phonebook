import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GlobalStyle,
  MainContainer,
  Title,
  Container,
  MainTitle,
} from './GlobalStyle';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactDetails from './ContactDetails/ContactDetails';
import { selectContacts } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <Title>Add new contact</Title>
        <ContactForm />

        <Container>
          <div>
            <Title>
              Contacts: {contacts.length > 0 && <span>{contacts.length}</span>}
            </Title>
            <Filter />
            <ContactList />
          </div>
          <ContactDetails />
        </Container>
        <GlobalStyle />
      </MainContainer>
    </>
  );
}
