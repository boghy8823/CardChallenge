import styled, { css } from "styled-components";

export const componentsStyles = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `,
  body1: css`
    font-size: ${({ theme }) => theme.fontSizes.large};
  `,
  body2: css`
    font-size: ${({ theme }) => theme.fontSizes.medium};
  `,
  button: css`
    font-size: ${({ theme }) => theme.fontSizes.medium};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,
};

export const StyledTypography = styled.p`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ gutterBottom, theme }) => theme.spacings[gutterBottom] || "0px"};
  margin-top: ${({ gutterTop, theme }) => theme.spacings[gutterTop] || "0px"};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.gray};
  ${({ variant }) => componentsStyles[variant]}
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ uppercase }) => uppercase ? "uppercase" : "none"};
`;
