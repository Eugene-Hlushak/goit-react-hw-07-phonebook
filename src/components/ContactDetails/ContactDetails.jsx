import { DetailsContainer, ContactCard } from './ContactDetails.styled';
import { useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';

const ContactDetails = () => {
  const { contact, contactIsLoading } = useSelector(state => state.contacts);
  return (
    <DetailsContainer>
      <ContactCard>
        {!contact && contactIsLoading && (
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
        )}
        {contact && !contactIsLoading && (
          <>
            <p>Here you can see contact details</p>
            <p>Name - {contact.name}</p>
            <p>Phone number - {contact.phone}</p>
            <p>Cathegory: {contact.cathegory.join(', ')}</p>
            <p>Created: {contact.createdAt}</p>
          </>
        )}
      </ContactCard>
    </DetailsContainer>
  );
};

export default ContactDetails;
