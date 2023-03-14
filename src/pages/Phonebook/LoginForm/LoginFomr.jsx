import {
  FormAuthor,
  FormAuthorInput,
  FormAuthorLable,
} from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormAuthor>
      <FormAuthorLable>
        Name
        <FormAuthorInput type="text" />
      </FormAuthorLable>
      <FormAuthorLable>
        Email
        <FormAuthorInput type="text" />
      </FormAuthorLable>
    </FormAuthor>
  );
};
