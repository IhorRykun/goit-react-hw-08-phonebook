import { AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import styled from 'styled-components';

export const FormStyled = styled.form`
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

export const LableStyled = styled.label`
  color: black;
  margin-top: 30px;
  display: flex;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
`;

export const InputStyled = styled.input`
  margin-left: 30px;
  border: none;
  border-bottom: 2px solid #2493eb;
  outline: none;
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

export const SvgStyledPass = styled(RiLockPasswordFill)`
  width: 30px;
  margin-right: 7px;
  margin-left: 26px;
`;
