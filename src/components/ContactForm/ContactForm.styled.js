import { Form, Field } from 'formik';
import styled from 'styled-components';

export const AddContactForm = styled(Form)`
  width: 500px;
  padding: 20px;

  border: 1px solid black;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 15px;
`;

export const LabelTitle = styled.span`
  margin-right: 10px;
`;

export const FormInput = styled(Field)`
  display: block;
  margin-right: 10px;
  margin-top: 5px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
`;
