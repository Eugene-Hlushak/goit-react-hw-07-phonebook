import { DetailsContainer, ContactCard } from './ContactDetails.styled';
import { useSelector } from 'react-redux';
import { selectContactInfo, selectContactIsLoading } from 'redux/selectors';
import { Puff } from 'react-loader-spinner';

const ContactDetails = () => {
  const contact = useSelector(selectContactInfo);
  const isLoading = useSelector(selectContactIsLoading);

  return (
    <DetailsContainer>
      <ContactCard>
        <p>Here you can see contact details</p>
        {!contact && isLoading && (
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
        {contact && !isLoading && (
          <>
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
