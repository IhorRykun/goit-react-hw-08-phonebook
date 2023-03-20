import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavNavigation = styled.nav`
  padding: 10px 20px;
  border-bottom: 2px solid #2493eb;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
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

export const StyledContainerLink = styled.div`
  display: flex;
`;
