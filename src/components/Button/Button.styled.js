import styled, { css } from "styled-components";
import {
  LoaderBackground,
  LoaderForeground,
  StyledLoader,
} from "../Loader/Loader.styled";

const IconContainerStyles = css`
  display: flex;
  align-items: center;
`;

export const ButtonLoader = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  transition: opacity 200ms;
  transition-delay: 200ms;

  ${StyledLoader} {
    align-self: center;
  }
`;

export const StartIconContainer = styled.span`
  transition: opacity 0.15s ease;
  margin-right: 6px;
  margin-left: -5px;
  ${IconContainerStyles}
`;

export const EndIconContainer = styled.span`
  transition: opacity 0.15s ease;
  margin-left: 6px;
  margin-right: -5px;
  ${IconContainerStyles}
`;

const loadingStyle = css`
  cursor: not-allowed;
  box-shadow: none;
  color: rgba(0, 0, 0, 0);

  & ${StartIconContainer}, & ${EndIconContainer} {
    display: none;
  }

  ${ButtonLoader} {
    display: flex;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const rippleStyle = css`
  &::after {
    content: "";
    background-color: ${({ theme, variant }) =>
      variant === "clear" ? theme.colors.purpleLighten20 : theme.colors.purple};

    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px;
    margin-top: -120%;
    opacity: 0;
    border-radius: 100px;
    transition: all 0.8s;
    pointer-events: none;
  }

  &:active::after {
    padding: 0;
    margin: 0;
    opacity: 0.8;
    transition: 0s;
  }
  &:disabled {
    &::after {
      background-color: transparent;
    }
  }
`;

const typeStyles = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }

    &:hover:disabled {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    &:focus-visible {
      background-color: ${({ theme }) => theme.colors.purple};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    ${LoaderBackground} {
      stroke: ${({ theme }) => theme.colors.purple};
    }

    ${LoaderForeground} {
      stroke: ${({ theme }) => theme.colors.gray};
    }

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  `,
  clear: css`
    background-color: transparent;
    border: none;
    color: ${({ theme, color }) => theme.colors[color] || theme.colors.gray};
  `,
};

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  height: 57px;
  min-width: 20px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 6px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 17px;
  border-radius: 22px;
  user-select: none;
  transition: all 150ms ease;

  ${ButtonLoader} {
    display: none;
  }

  ${({ variant }) => typeStyles[variant] || typeStyles.primary}

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

  ${({ isLoading }) => (isLoading ? loadingStyle : rippleStyle)}
`;
