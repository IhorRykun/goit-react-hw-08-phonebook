import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Auth/AuthOperation';
import { useAuth } from 'hooks';
import { ButtonStyled, User, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <User>Welcome, {user.name}</User>
      <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyled>
    </Wrapper>
  );
};
