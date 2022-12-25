import { Form } from './ContactForm/FormComponent';
// import { Filter } from 'components/FilterField/Filter';
// import { ContactList } from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getError, getIsLoading } from './redux/selectors';
import { fetchContacts } from './redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phone book</h1>
      <Form />
    </div>
  );
};
