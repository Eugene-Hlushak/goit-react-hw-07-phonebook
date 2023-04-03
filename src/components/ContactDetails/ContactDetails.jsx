import { DetailsContainer, ContactCard } from './ContactDetails.styled';
import { getContactInfo } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactDetails = () => {
  const contactInfo = useSelector(getContactInfo);
  console.log(contactInfo);
  return (
    <DetailsContainer>
      <ContactCard>
        {contactInfo && (
          <>
            <p>Here you can see contact details</p>
            <p>Name - {contactInfo.name}</p>
            <p>Phone number - {contactInfo.phone}</p>
            <p>Cathegory: {contactInfo.cathegory.join(', ')}</p>
            <p>Created: {contactInfo.createdAt}</p>
          </>
        )}
      </ContactCard>
    </DetailsContainer>
  );
};

export default ContactDetails;
