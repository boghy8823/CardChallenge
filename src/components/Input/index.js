import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import { StyledInput, InputContainer, InputError } from "./Input.styled";

export const InputTypes = ["text", "number"];

const Input = forwardRef(
  (
    { onChange, value, label, type, id, disabled, error, ...props },
    ref
  ) => {

    return (
      <InputContainer hasError={!!error} hasValue={!!value}>
        <StyledInput
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
          ref={ref}
        />
        <Label htmlFor={id} disabled={disabled}>
          {label}
        </Label>
        {error && <InputError data-test="input-error">{error}</InputError>}
      </InputContainer>
    );
  }
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onInputButtonClick: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(InputTypes),
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  disabled: false,
  autoCapitalize: "off",
  type: "text",
  label: null,
  error: null
};

Input.displayName = "Input";

export default Input;
