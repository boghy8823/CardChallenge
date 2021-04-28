import React from "react";
import PropTypes from "prop-types";
import NavigationLink from "../../components/NavigationLink";
import { MenuWrapper } from "./Menu.styled";

const Menu = ({ routes }) => (
  <MenuWrapper>
    {routes.map((route) => (
      <NavigationLink key={route.path} route={route.path}>
        {route.label}
      </NavigationLink>
    ))}
  </MenuWrapper>
);

Menu.propTypes = {
    routes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      path: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

Menu.defaultProps = {
    routes: [],
};

export default Menu;
