import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  height: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.beige};
`;