import {
  FormAuthor,
  FormAuthorInput,
  FormAuthorLable,
  SvgStyled,
  SvgSytledEmail,
} from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormAuthor>
      <FormAuthorLable>
        <SvgStyled />
        Name
        <FormAuthorInput type="text" />
      </FormAuthorLable>
    <FormAuthorLable>
     <SvgSytledEmail/>
        Email
        <FormAuthorInput type="text" />
      </FormAuthorLable>
    </FormAuthor>
  );
};
