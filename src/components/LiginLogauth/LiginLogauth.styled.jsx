import styled from 'styled-components';

export const ContainerLoginer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  width: 120px;
  height: 35px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 15px;
  background-color: white;
  margin-left: 12px;
  color: #2493eb;
  border-color: #2493eb;
  &:hover {
    background-color: #2493eb;
    color: white;
    border: 1px solid #2493eb;
  }
`;

export const ImgStyledUder = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 20px;
`;
