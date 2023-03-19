import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  margin: 0 auto;
`;
export const PhoneBook = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 256px;
  height: 100%;
  border: 3px solid #2493eb;
  margin: 0 auto;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${theme.fontWeights.bolt};
`;

export const Input = styled.input`
  margin-left: 20px;
  border: none;
  border-bottom: 2px solid #2493eb;
  outline: none;
  margin-bottom: 20px;

  &:hover {
    outline: 2px solid #2493eb;
  }
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BtnSubmit = styled.button`
  width: 100px;
  height: 32px;
  margin-left: 50px;
  cursor: pointer;
  color: #2493eb;
  border: 2px solid #2493eb;
  border-radius: 25px;
  background-color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: green;
  }
`;
