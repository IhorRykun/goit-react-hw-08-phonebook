import { AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import styled from 'styled-components';

export const FormAuthor = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px solid #2493eb;
  width: 400px;
  padding: 50px 10px;
  margin-top: 200px;
  margin: 0 auto;
  border-radius: 25px;
  align-items: center;
`;

export const FormAuthorLable = styled.label`
  color: black;
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }
`;

export const FormAuthorInput = styled.input`
  margin-left: 20px;
  border: none;
  border-bottom: 2px solid #2493eb;
  outline: none;

  &:hover {
    outline:2px solid #2493eb;
  }
`;

export const SvgStyled = styled(FaUserAlt)`
  width: 30px;
  margin-right: 7px;
`;

export const SvgSytledEmail = styled(AiOutlineMail)`
  width: 30px;
  height: 17px;
  margin-right: 7px;
`;

export const StyledSvgLogin = styled(BiLogIn)`
  width: 200px;
  height: 64px;
  fill: #2493eb;
`;
