import styled from "styled-components";

export const StyledTabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 0 8px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.grey};
    z-index: 1;
  }
`;

export const StyledTab = styled.button`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.navyBlue : theme.colors.grey)};
  border: 0;
  background: ${({ theme }) => theme.colors.white};
  padding: 24px 16px;
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 12px;
    width: calc(100% - 26px);
    height: 4px;
    background: ${({ theme, isActive }) => (isActive ? theme.activeTabColor : "transparent")};
    border-radius: 4px 4px 0 0;
    z-index: ${({ theme }) => theme.zIndexDefault};
  }

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
  }
`;
