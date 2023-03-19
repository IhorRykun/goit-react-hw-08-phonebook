import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/Auth/AuthOperation';
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
    <FormAuthor onSubmit={handleSubmit} autoComplete="off">
      <StyledSvgLogin />
      <FormAuthorLable>
        <SvgSytledEmail />
        Email
        <FormAuthorInput type="email" name="email" />
      </FormAuthorLable>
      <FormAuthorLable>
        <SvgStyled /> Password
        <FormAuthorInput type="password" name="password" />
      </FormAuthorLable>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </FormAuthor>
  );
};
