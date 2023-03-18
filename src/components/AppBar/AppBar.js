import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { NavNavigation } from 'App.styled';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavNavigation>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavNavigation>
  );
};
