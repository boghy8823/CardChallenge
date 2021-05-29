import styled, { css } from "styled-components";
import Label from "../Label";

const labelTopPositionStyles = css`
  font-size: 12px;
  letter-spacing: 0.4px;
  opacity: 1;
  transform: translate(0, 3px);
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 50ms,
    font-size cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: all;
`;

export const StyledInput = styled.input`
  width: 100%;
  display: inline-flex;
  position: relative;
  padding: 0 25px 4px 0;
  margin-top: 17px;
  box-sizing: border-box;
  font-size: 18px;
  letter-spacing: ${({ type }) => (type === "password" ? "1.5px" : "0.4px")};
  line-height: 24px;
  color: ${({ theme }) => theme.inputColor};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.inputBorderColor};
  background: ${({ theme }) => theme.inputBgColor};
  border-radius: 0;
  cursor: text;

  &:hover:not(:focus):enabled {
    border-color: ${({ theme }) => theme.inputBorderHoverColor};
  }

  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.inputFocusColor};
    color: ${({ theme }) => theme.inputColor};
    box-shadow: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.inputDisabledColor};
    background: ${({ theme }) => theme.inputBgColor};
    border-color: ${({ theme }) => theme.inputDisabledColor};
    cursor: not-allowed;
  }
`;

const errorStyles = css`
  ${StyledInput} {
    border-color: ${({ theme }) => theme.inputErrorColor};
  }
  ${Label} {
    color: ${({ theme }) => theme.labelErrorColor};
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  &:focus-within {
    ${Label} {
      ${labelTopPositionStyles}
      color: ${({ theme }) => theme.labelActiveColor};
    }
  }

  ${Label} {
    ${({ hasValue }) => hasValue && labelTopPositionStyles}
  }

  ${({ hasError }) => hasError && errorStyles}
`;

export const InputError = styled.div`
  margin: 3px 0 0 0;
  color: ${({ theme }) => theme.inputErrorColor};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;
