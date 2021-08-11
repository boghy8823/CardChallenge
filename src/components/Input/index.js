import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import { FormErrorIcon, FormSuccessIcon } from "../../components/Icons";
import {
  StyledInput,
  InputContainer,
  InputError,
  ValidFormIconWrapper,
  InvalidFormIconWrapper,
} from "./Input.styled";

export const InputTypes = ["text", "number"];

const Input = forwardRef(
  (
    {
      onChange,
      format,
      value,
      label,
      maxLength,
      modified,
      type,
      id,
      disabled,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <InputContainer>
        <Label htmlFor={id} disabled={disabled}>
          {label}
        </Label>
        <StyledInput
          type={type}
          id={id}
          value={format(value)}
          maxLength={maxLength}
          onChange={onChange}
          disabled={disabled}
          modified={modified}
          error={error}
          {...props}
          ref={ref}
        />
        <ValidFormIconWrapper hidden={!!error && modified}>
          <FormErrorIcon />
        </ValidFormIconWrapper>
        <InvalidFormIconWrapper hidden={!error && modified}>
          <FormSuccessIcon />
        </InvalidFormIconWrapper>
        {error && <InputError variant="caption">{error}</InputError>}
      </InputContainer>
    );
  }
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  format: PropTypes.func,
  onInputButtonClick: PropTypes.func,
  value: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  modified: PropTypes.bool,
  type: PropTypes.oneOf(InputTypes),
  label: PropTypes.string,
  inputValidatedMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  format: (d) => d,
  disabled: false,
  modified: false,
  type: "text",
  label: null,
  inputValidatedMessage: "",
  maxLength: null,
  error: null,
};

Input.displayName = "Input";

export default Input;
