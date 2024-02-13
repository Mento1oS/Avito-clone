import styled from 'styled-components';
export const StyledReview = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  margin: 15px 0;
`;
export const StyledReview__Item = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
export const StyledReview__Left = styled.div`
  margin-right: 12px;
`;
export const StyledReview__Img = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const StyledReview__Right = styled.div`
  display: block;
`;
export const StyledReview__Name = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  span {
    margin-left: 10px;
    color: #5f5f5f;
  }
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
export const StyledReview__Title = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
export const StyledReview__Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
