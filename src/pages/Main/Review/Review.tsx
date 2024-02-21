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
export default function Review({
  text,
  created_on,
  name,
  src,
}: Readonly<{
  text: string;
  created_on: string;
  name: string | undefined;
  src: string;
}>) {
  return (
    <StyledReview>
      <StyledReview__Item>
        <StyledReview__Left>
          <StyledReview__Img>
            <img src={src} alt="" />
          </StyledReview__Img>
        </StyledReview__Left>
        <StyledReview__Right>
          <StyledReview__Name>
            {name} <span>{created_on}</span>
          </StyledReview__Name>
          <StyledReview__Title>Комментарий</StyledReview__Title>
          <StyledReview__Text>{text}</StyledReview__Text>
        </StyledReview__Right>
      </StyledReview__Item>
    </StyledReview>
  );
}
