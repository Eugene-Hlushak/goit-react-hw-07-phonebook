import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { AddContactForm, FormInput, FormLabel } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formInitialValues = {
    name: '',
    number: '',

    group: [],
  };

  const validationSchema = object({
    name: string()
      .min(3, 'Too short name')
      .max(20, 'Too long name')
      .required('Required'),
    number: string().required('Required'),
  });

  const saveNewContact = (values, { resetForm }) => {
    console.log(values);
    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const checkContactNumber = contacts.find(
      contact => contact.number === values.number
    );

    if (checkContactName || checkContactNumber) {
      if (checkContactName) {
        alert(`${values.name} is already in contacts`);
        return;
      } else {
        alert(`${values.number} is already in contacts`);
        return;
      }
    }

    dispatch(addContact(values.name, values.number, values.group));
    resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={saveNewContact}
    >
      <AddContactForm>
        <FormLabel>
          Name
          <FormInput type="text" name="name" />
          <ErrorMessage name="name" />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput type="tel" name="number" />
          <ErrorMessage name="number" />
        </FormLabel>

        <FormLabel>
          <FormInput type="checkbox" name="group" value="Friends" />
          Friends
        </FormLabel>
        <FormLabel>
          <FormInput type="checkbox" name="group" value="Family" />
          Family
        </FormLabel>
        <FormLabel>
          <FormInput type="checkbox" name="group" value="Vip" />
          Vip
        </FormLabel>
        <FormLabel>
          <FormInput type="checkbox" name="group" value="Work" />
          Work
        </FormLabel>
        <button type="submit">Add contact</button>
      </AddContactForm>
    </Formik>
  );
}
