import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

// TODO: move variables like color to theme file
export const StyledNavLink = styled(NavLink)`
  color: "#60a2f7";

  &:hover {
    text-decoration: none;
  }
`;
