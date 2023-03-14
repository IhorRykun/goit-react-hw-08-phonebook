import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/phonebook/phonebookOperation';
import { Home } from 'pages/home';
import { Route, Routes } from 'react-router-dom';
import { PhoneBook } from 'pages/Phonebook/Phonebook/Phonebook';
import { RegisterForm } from 'pages/Phonebook/RegisterForm/RegisterForm';
import { LoginForm } from 'pages/Phonebook/LoginForm/LoginFomr';
import { NavNavigation, StyledContainerLink, StyledLink } from './App.styled';
import { LoginLogautg } from 'components/LiginLogauth/LiginLogauth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <NavNavigation>
        <StyledContainerLink>
          <StyledLink to="/contacts">Контакти</StyledLink>
          <StyledLink to="/register">Реєстрація</StyledLink>
          <StyledLink to="/login"> Логін</StyledLink>
        </StyledContainerLink>
        <LoginLogautg />
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
