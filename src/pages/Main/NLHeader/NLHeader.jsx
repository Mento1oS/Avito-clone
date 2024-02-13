import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledHeader, StyledHeader__Nav } from './styles';
export default function NLHeader({ children }) {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledHeader__Nav>
        <StyledButton
          id="btnMainEnter"
          onClick={(e) => {
            e.preventDefault();
            navigate('/signin');
          }}
        >
          Вход в личный кабинет
        </StyledButton>
      </StyledHeader__Nav>
    </StyledHeader>
  );
}
