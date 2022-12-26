import {
  SectionList,
  SectionLi,
  ContactTitle,
  ContactTel,
  ContactButton,
} from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/operations';
import { getContacts, getFilter } from '../redux/selectors';
import { toast } from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const notify = () => toast.error('Contact deleted!');

  const getRequiredCard = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deliteContact = contactId => {
    dispatch(removeContact(contactId));
    notify();
  };

  const requiredCard = getRequiredCard();

  return (
    <SectionList>
      {requiredCard.map(({ id, name, number }) => {
        return (
          <SectionLi key={id}>
            <ContactTitle> {name} </ContactTitle>
            <ContactTel>{number}</ContactTel>
            <ContactButton type="button" onClick={() => deliteContact(id)}>
              Delite
            </ContactButton>
          </SectionLi>
        );
      })}
    </SectionList>
  );
};
