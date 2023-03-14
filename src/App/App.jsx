import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/phonebook/phonebookOperation';
import { Home } from 'pages/home';
import { Route, Routes } from 'react-router-dom';
import { PhoneBook } from 'pages/Phonebook/Phonebook/Phonebook';
import { RegisterForm } from 'pages/Phonebook/RegisterForm/RegisterForm';
import { LoginForm } from 'pages/Phonebook/LoginForm/LoginFomr';
import { NavNavigation, StyledLink } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <NavNavigation>
        <StyledLink to="/contacts">контакти</StyledLink>
        <StyledLink to="/register">реєстрація</StyledLink>
        <StyledLink to="/login"> Логін</StyledLink>
      </NavNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<PhoneBook />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
};
