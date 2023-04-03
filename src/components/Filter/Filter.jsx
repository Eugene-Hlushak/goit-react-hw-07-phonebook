import { useDispatch, useSelector } from 'react-redux';
import { showContactsByName, setStatusFilter } from 'redux/filterSlice';
import {
  FilterLabel,
  FilterInput,
  BtnContainer,
  BtnFilter,
} from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { filterByCathegory } from 'redux/constants';

export default function Filter() {
  const dispatch = useDispatch();
  const { filterCathegory } = useSelector(getFilter);
  console.log(filterCathegory);
  console.log(BtnFilter);

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
        <BtnFilter
          selected={filterCathegory === filterByCathegory.all}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.all))}
        >
          All
        </BtnFilter>
        <BtnFilter
          selected={filterCathegory === filterByCathegory.vip}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.vip))}
        >
          VIP
        </BtnFilter>
        <BtnFilter
          selected={filterCathegory === filterByCathegory.family}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.family))}
        >
          Family
        </BtnFilter>
        <BtnFilter
          selected={filterCathegory === filterByCathegory.friends}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.friends))}
        >
          Friends
        </BtnFilter>
        <BtnFilter
          selected={filterCathegory === filterByCathegory.work}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.work))}
        >
          Work
        </BtnFilter>
      </BtnContainer>
    </>
  );
}
