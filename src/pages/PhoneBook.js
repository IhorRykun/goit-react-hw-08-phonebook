import { useEffect } from 'react';
import { Contacts } from '../components/Contacts/Contacts';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../Redux/phonebook/phonebookOperation';
import { ContainerStyled } from './PhoneBook.styled';

export function PhoneBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <Contacts />
      <Filter />
      <ContactsList />
    </ContainerStyled>
  );
}
