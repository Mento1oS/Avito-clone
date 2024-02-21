import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledMain__Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`;
export const StyledMain__CenterBlock = styled.div``;
export const StyledMain__Menu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;
`;
export const StyledMenu__LogoLink = styled(NavLink)`
  width: 54;
  height: 50px;
`;
export const StyledMenu__LogoImg = styled.img`
  width: 54px;
  height: auto;
`;
export const StyledMenu__Form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;
export const StyledMenu__Btn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
`;
export const StyledMain__H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`;
export const StyledMain__Profile = styled.div`
  width: 100%;
  padding: 0 0 70px;
`;
export const StyledProfile__Content = styled.div`
  max-width: 834px;
`;
export const StyledProfile__Title = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
`;
export const StyledProfile__Settings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
export const StyledSettings__Left = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 43px;
`;
export const StyledSettings__Img = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const StyledSettings__ChangePhoto = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;
export const StyledSettings__Right = styled.div`
  width: 630px;
`;
export const StyledSettings__Form = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  input {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
  }
  input::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
  }
`;
export const StyledSettings__Div = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
`;
export const StyledUploadAvatar = styled.input`
  display: none;
`;
const StyledSettings = styled.input`
  width: 300px;
`;
export const StyledSettings__FName = styled(StyledSettings)``;
export const StyledSettings__LName = styled(StyledSettings)``;
export const StyledSettings__City = styled(StyledSettings)``;
export const StyledSettings__Phone = styled.input`
  width: 614px;
`;
export const StyledSettings__Btn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  &:hover {
    background-color: #0080c1;
  }
  &:disabled {
    background-color: rgb(120, 120, 120);
    border: 1px solid rgb(140, 140, 140);
    &:hover {
      background-color: rgb(110, 110, 110);
    }
  }
`;
export const StyledMain__Title = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
`;
export const StyledMain__Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const StyledCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px) [4];
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  min-height: 441px;
`;
export const StyledCards__Item = styled.div`
  margin: 0;
`;
export const StyledCard = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const StyledCard__Image = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const StyledCards__Title = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledCard__Price = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;
const StyledCard__Attr = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;
export const StyledCard__Place = styled(StyledCard__Attr)`
  margin-bottom: 4px;
`;
export const StyledCard__Date = styled(StyledCard__Attr)``;
