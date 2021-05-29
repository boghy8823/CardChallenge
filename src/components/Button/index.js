import React from "react";
import PropTypes from "prop-types";
import { EndIconContainer, StartIconContainer, StyledButton, ButtonLoader } from "./Button.styled";
import Loader from "../Loader";

export const ButtonProperties = {
  buttonVariants: ["primary", "clear"],
};

const Button = ({ children, disabled, endIcon, startIcon, variant, loading, color, fullWidth, ...props }) => (
  <StyledButton
    disabled={disabled}
    variant={variant}
    isLoading={loading}
    color={color}
    fullWidth={fullWidth}
    {...props}
  >
    <ButtonLoader>
      <Loader />
    </ButtonLoader>
    {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
    {children}
    {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
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
  loading: PropTypes.bool,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  variant: PropTypes.oneOf(ButtonProperties.buttonVariants),
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  children: "",
  disabled: false,
  loading: false,
  endIcon: null,
  startIcon: null,
  variant: "primary",
  color: null,
  fullWidth: false,
};

Button.displayName = "Button";

export default Button;
