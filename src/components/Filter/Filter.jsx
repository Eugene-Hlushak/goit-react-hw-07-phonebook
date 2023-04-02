import { useDispatch } from 'react-redux';
import { showContacts } from 'redux/filterSlice';
import {
  FilterLabel,
  FilterInput,
  BtnContainer,
  BtnFilter,
} from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel>
        Find contact by name
        <FilterInput
          type="text"
          name="filterName"
          onChange={e => {
            console.log(e.target.value);
            return dispatch(showContacts(e.target.value));
          }}
        />
      </FilterLabel>
      <BtnContainer>
        <BtnFilter>All</BtnFilter>
        <BtnFilter>VIP</BtnFilter>
        <BtnFilter>Family</BtnFilter>
        <BtnFilter>Friends</BtnFilter>
        <BtnFilter>Work</BtnFilter>
      </BtnContainer>
    </>
  );
}
