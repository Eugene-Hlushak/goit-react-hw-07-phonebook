import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 15px;
`;
export const FilterInput = styled.input`
  display: block;
  margin-top: 5px;
`;

export const BtnContainer = styled.div`
  margin-bottom: 15px;
`;

export const BtnFilter = styled.button`
  background-color: ${props => (props.selected ? `cyan` : `lightgray`)};
  margin-right: 10px;
  &:hover,
  &:focus {
    background-color: cyan;
  }
  &:active {
    background-color: violet;
  }
`;
