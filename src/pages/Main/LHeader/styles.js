import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledHeader = styled.header`
  background-color: #009ee4;
`;
export const StyledHeader__Nav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;
export const StyledHeader__Logo = styled.div`
  display: none;
`;
export const StyledLogoMob__Link = styled(NavLink)`
  display: block;
  width: 32px;
  height: 32px;
`;
export const StyledLogoMob__Img = styled.img`
  width: 32px;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;
const StyledHeader__Btn = styled.button`
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;
export const StyledHeader__BtnPutAd = styled(StyledHeader__Btn)`
  width: 232px;
  height: 40px;
`;
export const StyledHeader__BtnLk = styled(StyledHeader__Btn)`
  width: 173px;
  height: 40px;
  margin-left: 10px;
`;
