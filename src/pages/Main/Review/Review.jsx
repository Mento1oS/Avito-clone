import {
  StyledReview,
  StyledReview__Img,
  StyledReview__Item,
  StyledReview__Left,
  StyledReview__Name,
  StyledReview__Right,
  StyledReview__Text,
  StyledReview__Title,
} from './styles';
export default function Review(props) {
  return (
    <StyledReview>
      <StyledReview__Item>
        <StyledReview__Left>
          <StyledReview__Img>
            <img src="" alt="" />
          </StyledReview__Img>
        </StyledReview__Left>
        <StyledReview__Right>
          <StyledReview__Name>
            {props.name} <span>{props.created_on}</span>
          </StyledReview__Name>
          <StyledReview__Title>Комментарий</StyledReview__Title>
          <StyledReview__Text>{props.text}</StyledReview__Text>
        </StyledReview__Right>
      </StyledReview__Item>
    </StyledReview>
  );
}
