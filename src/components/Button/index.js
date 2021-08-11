import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const ButtonProperties = {
  buttonVariants: ["primary", "clear"],
};

const Button = ({ children, disabled, variant, color, fullWidth, ...props }) => (
  <StyledButton
    disabled={disabled}
    variant={variant}
    color={color}
    fullWidth={fullWidth}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(ButtonProperties.buttonVariants),
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  children: "",
  disabled: false,
  variant: "primary",
  color: null,
  fullWidth: false,
};

export default Button;
