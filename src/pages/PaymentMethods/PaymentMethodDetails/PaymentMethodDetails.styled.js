import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxxxxl || "0px"};
`;

export const FieldRow = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings.l || "0px"};
  width: 100%;
`;