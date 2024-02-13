import { StyledContainer, StyledWrapper } from './styles';
export default function Container({ children }) {
  return (
    <StyledWrapper>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
}
