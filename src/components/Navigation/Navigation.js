import { useAuth } from 'hooks';
import { NavigationLink, NavStyle } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyle>
      {/* <NavigationLink to="/">Home</NavigationLink> */}
      {isLoggedIn && <NavigationLink to="/contacts">Phonebook</NavigationLink>}
    </NavStyle>
  );
};
