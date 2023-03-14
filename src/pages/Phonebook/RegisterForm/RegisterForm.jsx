import {
  FormStyled,
  InputStyled,
  LableStyled,
  SvgStyled,
  SvgStyledPass,
  SvgSytledEmail,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <FormStyled>
      <LableStyled>
        <SvgStyled />
        Name
        <InputStyled type="text" />
      </LableStyled>
      <LableStyled>
        <SvgSytledEmail />
        Email
        <InputStyled type="text" />
      </LableStyled>
      <LableStyled>
        <SvgStyledPass width="60px" />
        Password
        <InputStyled type="text" />
      </LableStyled>
    </FormStyled>
  );
};
