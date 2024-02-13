import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledMain = styled.main`
  margin: 0 auto;
`;
export const StyledMain__Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
`;
export const StyledMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 11px 0;
  padding: 43px 5px 77px;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
export const StyledMenu__BtnSearch = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
`;
export const StyledMain__Artic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
`;
export const StyledArtic__Content = styled.div`
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
export const StyledArticle__Left = styled.div`
  max-width: 480px;
  margin-right: 54px;
`;
export const StyledArticle__FillImg = styled.div`
  width: 100%;
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
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`;
export const StyledArticle__Img = styled.div`
  width: 480px;
  height: 480px;
  margin: 0 5px;
  img {
    width: 100%;
    max-height: 480px;
    display: block;
    -o-object-fit: contain;
    object-fit: contain;
  }
`;
export const StyledArticle__ImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
`;
export const StyledArticle__ImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
  &:hover {
    border: 2px solid #009ee4;
  }
`;
export const StyledArticle__ImgBarMob = styled.div`
  display: none;
`;
export const StyledImgBarMob__Circle = styled.div`
  ${({ isactive }) => {
    if (isactive === 'true') {
      return `background-color: #FFFFFF;`;
    } else {
      return ``;
    }
  }}
`;
export const StyledArticle__Right = styled.div`
  max-width: 621px;
`;
export const StyledArticle__Block = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const StyledArticle__Title = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;
export const StyledArticle__Info = styled.div`
  margin-bottom: 34px;
`;
const StyledData = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;
export const StyledArticle__Date = styled(StyledData)``;
export const StyledArticle__City = styled(StyledData)``;
export const StyledArticle__Link = styled(NavLink)`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
`;
export const StyledArticle__Price = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const StyledArticle__Btn = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }
  &:hover {
    background-color: #0080c1;
  }
`;
export const StyledArticle__Author = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
`;
export const StyledAuthor__Img = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const StyledAuthor__Cont = styled.div`
  margin-left: 12px;
`;
export const StyledAuthor__Name = styled.p`
  cursor: pointer;
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
`;
export const StyledAuthor__About = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`;
export const StyledMain__Title = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;
export const StyledMain__Content = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`;
export const StyledMain__Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
