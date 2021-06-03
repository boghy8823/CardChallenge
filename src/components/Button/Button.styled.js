import styled, { css } from "styled-components";

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
      background-color: ${({ theme }) => theme.colors.purple};
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
  height: ${({ height }) => (height || "auto")};
  width: ${({ width }) => (width || "auto")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 17px;
  border-radius: 22px;
  user-select: none;
  transition: all 150ms ease;

  ${({ variant }) => typeStyles[variant] || typeStyles.primary}

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }
`;
