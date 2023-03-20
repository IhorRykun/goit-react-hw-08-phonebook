import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Auth/AuthOperation';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LableStyled,
  RegStyledSvg,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <RegStyledSvg />
      <LableStyled>
        name
        <InputStyled type="text" name="name" />
      </LableStyled>
      <LableStyled>
        Email
        <InputStyled type="email" name="email" />
      </LableStyled>
      <LableStyled>
        Password
        <InputStyled type="password" name="password" />
      </LableStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
};
