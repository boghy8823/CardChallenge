import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacings.xl};
  background-color: ${({ theme }) => theme.colors.purpleLight30};
  border-radius: ${({ theme }) => theme.borderRadiuses.medium};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px 0;
  min-height: 185px;
  min-width: 310px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: flex-start;
  z-index: 1;
`;

export const Field = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  margin-right: ${({ gutterRight, theme }) =>
    theme.spacings[gutterRight] || "0px"};
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const MastercardBackgroundStyles = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0px;
  right: 4px;
  border-radius: 24px;
`;
