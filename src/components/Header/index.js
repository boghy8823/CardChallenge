import React from "react";
import PropTypes from "prop-types";
import Menu from "../Menu";
import { HeaderWrapper } from "./Header.styled";

const Header = ({ routes }) => {
  return (
    <HeaderWrapper>
      <Menu routes={routes} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      path: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

Header.defaultProps = {
  routes: [],
};

export default Header;
