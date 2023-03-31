import { Form, Field } from 'formik';
import styled from 'styled-components';

export const AddContactForm = styled(Form)`
  width: 500px;
  padding: 20px;

  border: 1px solid black;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const FormInput = styled(Field)`
  display: block;
  margin-top: 5px;
`;
