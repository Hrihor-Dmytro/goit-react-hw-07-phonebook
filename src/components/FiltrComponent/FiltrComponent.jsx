import { SectionList, FormLabel, Input } from './FiltrComponent.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { getContactsValue, filterChange } from '../Redux/store';
import { getFilter } from '../redux/selectors';
import { filterChange } from '../redux/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getFilter);

  const onFilterChange = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

  return (
    <SectionList>
      <FormLabel htmlFor="text">Find contacts by name</FormLabel>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </SectionList>
  );
};
