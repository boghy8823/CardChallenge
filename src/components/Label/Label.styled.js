import styled, { css } from "styled-components";

export const labelTopPositionStyles = css`
  font-size: 12px;
  letter-spacing: 0.4px;
  opacity: 1;
  transform: translate(0, 3px);
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 50ms,
    font-size cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: all;
`;

const Label = styled.label`
  position: absolute;
  top: -4px;
  left: 0;
  font-size: 18px;
  color: ${({ theme, disabled }) => (disabled ? theme.labelDisabledColor : theme.labelColor)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transform: translate(0, 24px);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    font-size 200ms cubic-bezier(0, 0, 0.2, 1) 100ms;
  transform-origin: top left;

  &:hover {
    color: ${({ theme, disabled }) => (disabled ? theme.labelDisabledColor : theme.labelHoverColor)};
  }
`;

export default Label;
