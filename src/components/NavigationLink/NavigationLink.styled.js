import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 22px;
  margin: 20 0 0;
  padding: 5px;
  text-decoration: none;


  &:hover {
    cursor: pointer;
    text-decoration: none;
    opacity: 0.7;
  }
`;
