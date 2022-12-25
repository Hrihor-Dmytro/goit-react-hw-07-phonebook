import {
  SectionList,
  SectionLi,
  ContactTitle,
  ContactTel,
  ContactButton,
} from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContactsValue, removeContact } from '../Redux/store';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(getContactsValue);

  const getRequiredCard = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deliteContact = contactId => {
    dispatch(removeContact(contactId));
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
