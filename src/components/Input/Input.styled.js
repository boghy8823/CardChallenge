import styled, { css } from "styled-components";
import Typography from "../../components/Typography";

export const StyledInput = styled.input`
  width: 100%;
  display: inline-flex;
  position: relative;
  padding: 0 25px 4px 0;
  margin-top: ${({ theme }) => theme.spacings.l};
  margin-bottom: ${({ theme }) => theme.spacings.l};
  box-sizing: border-box;
  font-size: 18px;
  letter-spacing: 1.5px;
  line-height: 24px;
  color: ${({ theme, error, modified }) =>
    !error && modified ? theme.colors.green : theme.colors.gray}};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  cursor: text;



  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.gray};
    box-shadow: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

const errorStyles = css`
  ${StyledInput} {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  ${({ hasError }) => hasError && errorStyles}
`;

export const InputError = styled(Typography)`
  margin: 3px 0 0 0;
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

export const InputValidated = styled.div`
  margin: 3px 0 0 0;
  color: ${({ theme }) => theme.colors.green};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;
