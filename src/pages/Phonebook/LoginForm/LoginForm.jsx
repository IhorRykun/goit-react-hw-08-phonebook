import {
  FormAuthor,
  FormAuthorInput,
  FormAuthorLable,
  StyledSvgLogin,
  SvgStyled,
  SvgSytledEmail,
} from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormAuthor>
      <StyledSvgLogin />
      <FormAuthorLable>
        <SvgStyled />
        Name
        <FormAuthorInput type="text" />
      </FormAuthorLable>
      <FormAuthorLable>
        <SvgSytledEmail />
        Email
        <FormAuthorInput type="text" />
      </FormAuthorLable>
    </FormAuthor>
  );
};
