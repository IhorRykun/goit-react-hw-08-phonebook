import {
  FormStyled,
  InputStyled,
  LableStyled,
  RegStyledSvg,
  SvgStyled,
  SvgStyledPass,
  SvgSytledEmail,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <FormStyled>
      <RegStyledSvg />
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
