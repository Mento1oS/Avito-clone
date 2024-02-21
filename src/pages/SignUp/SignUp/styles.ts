import styled from 'styled-components';

interface TrueFalse {
  iserror?: 'false' | 'true';
}

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
export const StyledContainerSignup = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;
export const StyledModal__Block = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (647px / 2));
  opacity: 1;
`;
export const StyledModal__FormLogin = styled.form`
  width: 366px;
  min-height: 647px;
  background-color: #ffffff;
  border-radius: 12px;
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
  padding: 43px 42px 47px;
  input:first-child {
    margin-bottom: 30px;
  }
`;
export const StyledModal__Logo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;
  img {
    width: 140px;
    height: auto;
  }
`;
const StyledModal__Input = styled.input<TrueFalse>`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-bottom: 38px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  ${({ iserror }) => {
    if (iserror === 'true') {
      return `border-color:red;
        outline-color:red;`;
    } else {
      return ``;
    }
  }}
`;
export const StyledModal__InputLogin = styled(StyledModal__Input)``;
export const StyledModal__InputPasswordFirst = styled(StyledModal__Input)``;
export const StyledModal__InputPasswordDouble = styled(StyledModal__Input)``;
export const StyledModal__InputFirstName = styled(StyledModal__Input)``;
export const StyledModal__InputFirstLast = styled(StyledModal__Input)``;
export const StyledModal__InputCity = styled(StyledModal__Input)``;
export const StyledModal__BtnSignupEnt = styled.button`
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #0080c1;
  }
  width: 278px;
  height: 62px;
  background-color: #009ee4;
  border-radius: 6px;
  border: none;
  margin-top: 30px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;
export const StyledModal__BtnEnter = styled.button<TrueFalse>`
  ${({ iserror }) => {
    if (iserror === 'true') {
      return `border-color:red;
      outline-color:red;`;
    } else {
      return ``;
    }
  }}
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 20px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }
`;
export const StyledNotification = styled.div`
  text-align: center;
`;
export const StyledFlip = styled.div<TrueFalse>`
  ${({ iserror }) => {
    if (iserror === 'true') {
      return ``;
    } else {
      return `display:none;`;
    }
  }}
`;
