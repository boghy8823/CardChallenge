import styled from "styled-components";

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  top: 0px;
  left: 0;
  font-weight: 600;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.black};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Label;
