import { FaBlenderPhone } from 'react-icons/fa';
import styled from 'styled-components';

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
  border-radius: 45px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2493eb;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-left: 20px;
  border: none;
  border-bottom: 2px solid #2493eb;
  outline: none;
  margin-bottom: 20px;
  margin-top: 20px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #2493eb;

  &:hover {
    outline: 2px solid #2493eb;
  }
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BtnSubmit = styled.button`
  width: 124px;
  height: 32px;
  margin-left: 50px;
  cursor: pointer;
  color: #2493eb;
  border: 2px solid #2493eb;
  border-radius: 25px;
  background-color: white;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2493eb;

  &:hover,
  &:focus {
    color: white;
    background-color: green;
  }
`;

export const SvgStyled = styled(FaBlenderPhone)`
  width: 200px;
  height: 64px;
  fill: #2493eb;
  margin-bottom: 20px;
`;
