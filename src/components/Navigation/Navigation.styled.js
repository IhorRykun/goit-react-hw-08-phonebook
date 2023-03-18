import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: #2493eb;
  text-decoration: none;
  width: 150px;
  height: 35px;
  border: 1px solid #2493eb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 40px;

  &.active {
    color: white;
    background-color: #2493eb;
  }
`;
