import styled, { keyframes } from "styled-components";

const SvgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const CircleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
`;

export const LoaderContent = styled.span`
  margin: 0;
  color: ${({ theme }) => theme.loaderTextColor};
  margin-left: 10px;
  align-self: center;
`;

export const LoaderBackground = styled.circle`
  display: block;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.green};
  stroke-linecap: round;
  stroke-width: 10px;
  transform-origin: 50% 50%;
`;

export const LoaderForeground = styled.circle`
  animation: 1.4s ease-in-out infinite both ${CircleAnimation};
  display: block;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.gray};
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
`;

export const StyledLoader = styled.svg`
  animation: 2s linear infinite ${SvgAnimation};
  max-width: 100px;
  min-width: ${({ size = 20 }) => `${size}px`};
  min-height: ${({ size = 20 }) => `${size}px`};
  width: ${({ size = 20 }) => `${size}px`};
  height: ${({ size = 20 }) => `${size}px`};
  align-self: center;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: ${({ gutterTop = 0 }) => `${gutterTop}px`};
  padding-bottom: ${({ gutterBottom = 0 }) => `${gutterBottom}px`};
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
`;
