import styled from "styled-components";

// TODO: Create flex component
export const SessionsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SessionItemList = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 5px 0px;
  padding: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
