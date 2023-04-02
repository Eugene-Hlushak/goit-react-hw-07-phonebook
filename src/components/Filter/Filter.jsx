import { useDispatch } from 'react-redux';
import { showContactsByName, setStatusFilter } from 'redux/filterSlice';
import {
  FilterLabel,
  FilterInput,
  BtnContainer,
  BtnFilter,
} from './Filter.styled';
import { filterByGroup } from 'redux/constants';

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
            return dispatch(showContactsByName(e.target.value));
          }}
        />
      </FilterLabel>
      <BtnContainer>
        <BtnFilter onClick={() => dispatch(setStatusFilter(filterByGroup.all))}>
          All
        </BtnFilter>
        <BtnFilter onClick={() => dispatch(setStatusFilter(filterByGroup.vip))}>
          VIP
        </BtnFilter>
        <BtnFilter
          onClick={() => dispatch(setStatusFilter(filterByGroup.family))}
        >
          Family
        </BtnFilter>
        <BtnFilter
          onClick={() => dispatch(setStatusFilter(filterByGroup.friends))}
        >
          Friends
        </BtnFilter>
        <BtnFilter
          onClick={() => dispatch(setStatusFilter(filterByGroup.work))}
        >
          Work
        </BtnFilter>
      </BtnContainer>
    </>
  );
}
