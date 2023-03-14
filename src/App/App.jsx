import { useEffect } from 'react';
import css from '../App/App.module.css';
import { Forma } from 'components/ContactForm/Forma';
import { ContactsList } from 'components/Contacts/ContactsList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/phonebook/phonebookOperation';
import { Filter } from 'components/Filter/Filter';
import { Home } from 'pages/home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <h1>Phonebook</h1>
      <Forma />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};
