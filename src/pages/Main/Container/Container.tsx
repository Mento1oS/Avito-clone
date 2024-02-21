import { ReactNode } from 'react';
import { StyledContainer, StyledWrapper } from './styles';
export default function Container({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <StyledWrapper>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
}
