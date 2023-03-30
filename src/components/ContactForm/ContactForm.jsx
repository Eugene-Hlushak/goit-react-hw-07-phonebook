import { addContact } from 'redux/contactsSlice';

import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AddContactForm, FormInput, FormLabel } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const saveNewContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = form.elements;
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (checkContact) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    dispatch(addContact(name.value, number.value));
    form.reset();
  };

  return (
    <AddContactForm onSubmit={saveNewContact}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <button type="submit">Add contact</button>
    </AddContactForm>
  );
}
