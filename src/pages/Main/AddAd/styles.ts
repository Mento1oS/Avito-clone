import styled from 'styled-components';

interface TrueFalse {
  iserror?: 'false' | 'true';
}

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
export const StyledContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;
export const StyledModal__Block = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: 60px;
  opacity: 1;
`;
export const StyledModal__Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
`;
export const StyledModal__Title = styled.h3`
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;
export const StyledModal__BtnClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;
export const StyledModal__BtnCloseLine = styled.div`
  &:hover::before {
    background-color: #0080c1;
  }
  &:hover::after {
    background-color: #0080c1;
  }
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;
export const StyledModal__FormNewArt = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
`;
export const StyledFormNewArt__Block = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const StyledFormNewArt__BlockPrice = styled(StyledFormNewArt__Block)`
  position: relative;
`;
export const StyledFormNewArt__Input = styled.input<TrueFalse>`
  padding: 13px 19px;
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  ${({ iserror }) => {
    if (iserror === 'true') {
      return `border: 1px solid red;
      outline-color:red;`;
    } else {
      return `border: 1px solid rgba(0, 0, 0, 0.2);`;
    }
  }}
`;
export const StyledFormNewArt__Area = styled.textarea<TrueFalse>`
  padding: 13px 19px;
  background: #ffffff;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  ${({ iserror }) => {
    if (iserror === 'true') {
      return `border: 1px solid red;
      outline-color:red; `;
    } else {
      return `border: 1px solid rgba(0, 0, 0, 0.2);`;
    }
  }}
`;
export const StyledFormNewArt__P = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  span {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const StyledFormNewArt__BarImg = styled.div`
  width: 500px;
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
`;
export const StyledFormNewArt__Img = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 2;
  }
`;
export const StyledFormNewArt__ImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
`;
export const StyledFormNewArt__InputPrice = styled.input<TrueFalse>`
  padding: 13px 19px;
  background: #ffffff;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::-webkit-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &:-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ iserror }) => {
    if (iserror === 'true') {
      return `border: 1px solid red;
      outline-color:red;`;
    } else {
      return `border: 1px solid rgba(0, 0, 0, 0.2);`;
    }
  }}
`;
export const StyledFormNewArt__InputPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #ffffff;
  &::after {
    content: '\A0 \20BD';
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }
`;
export const StyledFormNewArt__BtnPub = styled.button`
  margin-top: 10px;
  width: 141px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
`;
export const StyledFormImageFileInput = styled.input`
  display: none;
`;
