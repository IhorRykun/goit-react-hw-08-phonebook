import styled from 'styled-components';

export const ListContact = styled.ul`
  padding-left: 0;
  width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemContact = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
`;

export const Contact = styled.li`
  display: flex;
  width: 400px;
`;

export const NameCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-left: 5px;
  margin-right: 10px;
`;

export const BtnDelete = styled.button`
  width: 70px;
  height: 32px;
  margin-left: 5px;
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
    background-color: red;
    border: 2px solid red;
  }
`;
