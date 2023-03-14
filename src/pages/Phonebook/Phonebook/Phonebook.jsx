import { Forma } from 'components/ContactForm/Forma';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from './Phonebooktyled';

export const PhoneBook = () => {
  return (
    <ContactsForm>
      <h1>Phonebook</h1>
      <Forma />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </ContactsForm>
  );
};
