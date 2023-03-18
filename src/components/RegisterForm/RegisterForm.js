import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Auth/AuthOperation';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LableStyled,
  RegStyledSvg,
  SvgStyled,
  SvgStyledPass,
  SvgSytledEmail,
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
        <SvgStyled />
        Name
        <InputStyled type="text" />
      </LableStyled>
      <LableStyled>
        <SvgSytledEmail />
        Email
        <InputStyled type="email" />
      </LableStyled>
      <LableStyled>
        <SvgStyledPass width="60px" />
        Password
        <InputStyled type="password" />
      </LableStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
};
