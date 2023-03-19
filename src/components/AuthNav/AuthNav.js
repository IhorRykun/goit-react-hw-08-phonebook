import { AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </>
  );
};
