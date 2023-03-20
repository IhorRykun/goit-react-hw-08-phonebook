import styled from 'styled-components';
import { GiArchiveRegister } from 'react-icons/gi';

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

export const LableStyled = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputStyled = styled.input`
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

export const RegStyledSvg = styled(GiArchiveRegister)`
  width: 200px;
  height: 64px;
  fill: #2493eb;
  margin-bottom: 30px;
`;

export const ButtonStyled = styled.button`
  width: 160px;
  height: 32px;
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
    background-color: #2493eb;
  }
`;
