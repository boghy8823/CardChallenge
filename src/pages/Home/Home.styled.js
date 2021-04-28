import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  background-color: #1b70fa;
  border-radius: 25px;
  padding: 20px 40px;
  margin: 20px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  margin-top: ${({ gutterTop }) => gutterTop || 0}px;
  margin-bottom: ${({ gutterBottom }) => gutterBottom || 0}px;
`;

export const SessionDuration = styled.p`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ gutterTop }) => gutterTop || 0}px;
  margin-bottom: ${({ gutterBottom }) => gutterBottom || 0}px;
  font-weight: bold;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

// TODO: move font styles to global css
export const StyledInput = styled.input`
  width: 100%;
  display: inline-flex;
  position: relative;
  padding: 15px;
  margin-top: 10px;
  box-sizing: border-box;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grey};
  border: 0;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  cursor: text;
  outline: none;
`;
