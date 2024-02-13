import styled from 'styled-components';
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
export const StyledCard__Title = styled.h3`
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
export const StyledCard__Date = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;
export const StyledCard__Place = styled(StyledCard__Date)`
  margin-bottom: 4px;
`;
