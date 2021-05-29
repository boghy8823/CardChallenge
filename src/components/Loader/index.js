import React from "react";
import PropTypes from "prop-types";
import { StyledLoader, LoaderBackground, LoaderForeground, LoaderWrapper, LoaderContent } from "./Loader.styled";

const Loader = ({ color, size, children, ...props }) => (
  <LoaderWrapper {...props}>
    <StyledLoader color={color} size={size} viewBox="0 0 100 100">
      <LoaderBackground color={color} cx="50" cy="50" r="45" />
      <LoaderForeground color={color} cx="50" cy="50" r="45" />
    </StyledLoader>
    {children && <LoaderContent>{children}</LoaderContent>}
  </LoaderWrapper>
);

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

Loader.defaultProps = {
  color: "primary",
  size: 20,
  children: null,
};

Loader.displayName = "Loader";

export default Loader;
