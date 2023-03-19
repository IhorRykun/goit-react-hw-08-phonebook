import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;
export const User = styled.p`
  font-weight: 700;
`;

export const ButtonStyled = styled.button`
  width: 70px;
  height: 32px;
  cursor: pointer;
  color: #2493eb;
  border: 2px solid #2493eb;
  border-radius: 25px;
  background-color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: red;
  }
`;
