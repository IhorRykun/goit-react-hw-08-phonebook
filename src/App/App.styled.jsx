import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavNavigation = styled.nav`
  padding: 10px 0;
  padding-left: 20px;
  border-bottom: 2px solid black;
  margin-bottom: 100px;
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
