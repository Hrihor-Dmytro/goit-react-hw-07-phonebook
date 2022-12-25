import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { addContact } from '../redux/operations';
import { nanoid } from 'nanoid';
import {
  FormLabel,
  FormInput,
  FormButton,
  FormWrapp,
  TextBox,
} from './FormComponent.stiyled';

const initialValues = {
  name: '',
  number: '',
};

export const Form = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    const { name, number } = values;

    const contact = {
      name,
      number,
    };

    const dublicateContact = findDublicateContact(contact, contacts);

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact({ ...values, id: nanoid() }));
  };

  const findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormWrapp autoComplete="off">
        <FormLabel>
          <TextBox>Name</TextBox>
          <FormInput
            type="text"
            name="name"
            placeholder="Please, enter your Name"
          />
        </FormLabel>
        <FormLabel>
          <TextBox>Number</TextBox>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Please, enter your Number"
          />
        </FormLabel>
        <FormButton type="submit">Add</FormButton>
      </FormWrapp>
    </Formik>
  );
};
