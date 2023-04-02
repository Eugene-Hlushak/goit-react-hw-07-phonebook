import { GlobalStyle, MainContainer, Title, Container } from './GlobalStyle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactDetails from './ContactDetails/ContactDetails';

export function App() {
  return (
    <MainContainer>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactDetails />
      </Container>
      <Container>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
      <GlobalStyle />
    </MainContainer>
  );
}
