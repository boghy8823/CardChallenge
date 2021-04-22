import React from "react";
import PropTypes from "prop-types";
import { StyledNavLink } from "./NavigationLink.styled";


const NavigationLink = ({ route, children }) => (
  <StyledNavLink exact to={route}>
    {children}
  </StyledNavLink>
);

NavigationLink.propTypes = {
  route: PropTypes.string,
  children:  PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
};

NavigationLink.defaultProps = {
  route: "",
};

export default NavigationLink;
