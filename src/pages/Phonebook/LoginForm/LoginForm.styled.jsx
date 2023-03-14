import styled from 'styled-components';

export const FormAuthor = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 400px;
  padding: 50px 10px;
  margin-top: 200px;
  margin: 0 auto;
  border-radius: 25px;
  align-items: center;
`;

export const FormAuthorLable = styled.label`
  color: orange;
`;

export const FormAuthorInput = styled.input`
  margin-left: 20px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
`;
