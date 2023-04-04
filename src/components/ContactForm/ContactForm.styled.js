import { Form, Field } from 'formik';
import styled from 'styled-components';

export const AddContactForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  border: 1px solid black;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
`;
export const CheckboxLabel = styled(FormLabel)`
  margin-right: 10px;
`;

export const LabelTitle = styled.span`
  margin-right: 10px;
`;

export const FormInput = styled(Field)`
  display: block;
  margin-right: 10px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxTitle = styled.p`
  margin-right: 10px;
`;
