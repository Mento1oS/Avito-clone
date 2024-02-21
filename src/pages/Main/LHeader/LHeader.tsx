import { useNavigate } from 'react-router-dom';
import {
  StyledHeader,
  StyledHeader__BtnLk,
  StyledHeader__BtnPutAd,
  StyledHeader__Logo,
  StyledHeader__Nav,
  StyledLogoMob__Img,
  StyledLogoMob__Link,
} from './styles';
import { useDispatch } from 'react-redux';
import { setAddAdIsOpen } from '../../../store/slices/adsSlice';
export default function LHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openAddAd = () => {
    dispatch(setAddAdIsOpen(true));
  };
  return (
    <StyledHeader>
      <StyledHeader__Nav>
        <StyledHeader__Logo>
          <StyledLogoMob__Link to="">
            <StyledLogoMob__Img src="img/logo-mob.png" alt="logo" />
          </StyledLogoMob__Link>
        </StyledHeader__Logo>
        <StyledHeader__BtnPutAd onClick={() => openAddAd()} id="btputAd">
          Разместить объявление
        </StyledHeader__BtnPutAd>
        <StyledHeader__BtnLk onClick={() => navigate('/profile')} id="btnlk">
          Личный кабинет
        </StyledHeader__BtnLk>
      </StyledHeader__Nav>
    </StyledHeader>
  );
}
