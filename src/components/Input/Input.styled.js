import styled from "styled-components";
import Typography from "../../components/Typography";

export const StyledInput = styled.input`
  width: 100%;
  display: inline-flex;
  position: relative;
  padding: 0 25px 4px 0;
  margin-top: ${({ theme }) => theme.spacings.m};
  margin-bottom: ${({ theme }) => theme.spacings.m};
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme, error, modified }) =>
    !error && modified ? theme.colors.green : theme.colors.gray}};
  border: 0;
  border-bottom: 1px solid ${({ theme, error, modified }) =>
    !error && modified ? theme.colors.green : theme.colors.gray}};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  cursor: text;

  &:focus {
    outline: 0;
    border-color: ${({ theme, error, modified }) =>
      !error && modified ? theme.colors.green : theme.colors.gray}};
    color: ${({ theme, error, modified }) =>
      !error && modified ? theme.colors.green : theme.colors.gray}};
    box-shadow: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  &:after {
    content: "";
    position:absolute;
    width: 17px;
    height: 14px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const InputError = styled(Typography)`
  margin: 3px 0 0 0;
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  line-height: 16px;
`;

export const ValidFormIconWrapper = styled.div`
  position: absolute;
  display:  ${({ hidden }) => (hidden ? "flex" : "none")}};
  top: 32px;
  right: 0;
  width: 17px;
  height: 14px;
`;

export const InvalidFormIconWrapper = styled.div`
  position: absolute;
  display: ${({ hidden }) => (hidden ? "flex" : "none")}};
  top: 32px;
  right: 0;
  width: 17px;
  height: 14px;
`;
