import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperation';

import {
  ButtonStyled,
  FormAuthor,
  FormAuthorInput,
  FormAuthorLable,
  StyledSvgLogin,
  SvgStyled,
  SvgSytledEmail,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormAuthor nSubmit={handleSubmit} autoComplete="off">
      <StyledSvgLogin />
      <FormAuthorLable>
        <SvgStyled />
        Name
        <FormAuthorInput type="text" />
      </FormAuthorLable>
      <FormAuthorLable>
        <SvgSytledEmail />
        Email
        <FormAuthorInput type="email" />
      </FormAuthorLable>
      <ButtonStyled type="submit">Log in</ButtonStyled>
    </FormAuthor>
  );
};
