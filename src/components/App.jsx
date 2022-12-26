import { Form } from './ContactForm/FormComponent';
import { Filter } from './FiltrComponent/FiltrComponent';
import { ContactList } from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getError, getIsLoading } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import { Loader } from './Loader/Loader';
import { BoockTitle } from './App.styled';
import { ButtonTheme } from './ButtonTheme/ButtonTheme';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ButtonTheme />
      <BoockTitle>Phone book</BoockTitle>
      <Form />
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader />}
    </div>
  );
};
