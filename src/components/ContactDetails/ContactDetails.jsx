import { useSelector } from 'react-redux';
import { selectContactInfo, selectContactIsLoading } from 'redux/selectors';
import { Puff } from 'react-loader-spinner';
import { LoaderContainer } from 'components/GlobalStyle';
import {
  DetailsContainer,
  ContactCard,
  ContactTitle,
  ContactData,
  LastElement,
} from './ContactDetails.styled';

const ContactDetails = () => {
  const contact = useSelector(selectContactInfo);
  const isLoading = useSelector(selectContactIsLoading);

  return (
    <DetailsContainer>
      <ContactTitle>Here you can see contact details</ContactTitle>
      {!contact && isLoading && (
        <LoaderContainer>
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
        </LoaderContainer>
      )}
      {contact && !isLoading && (
        <ContactCard>
          <ContactData>Name - {contact.name}</ContactData>
          <ContactData>Phone number - {contact.phone}</ContactData>
          <ContactData>Cathegory: {contact.cathegory.join(', ')}</ContactData>
          <LastElement>Created: {contact.createdAt}</LastElement>
        </ContactCard>
      )}
    </DetailsContainer>
  );
};

export default ContactDetails;
