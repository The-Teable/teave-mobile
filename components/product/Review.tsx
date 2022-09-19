import styled from "styled-components";
import Button from "../common/Button";
import { ReviewProps } from "../../services/model/articleSchema";
import Margin from "../common/Margin";

const Review = ({ reviews }: { reviews: ReviewProps[] }) => {
  return (
    <>
      <WriteReviewButton reverse>리뷰 쓰기</WriteReviewButton>
      <Margin size={2} />
      {reviews.map(({ id, title, author, create_date, image_url }) => (
        <Item key={id}>
          <Margin size={2} />
          <div>
            {title}{" "}
            {image_url && <img src="/image/icon_has_image.png" width="12" />}
          </div>
          <Margin size={1.5} />
          <AuthorWrapper>
            {author} | {new Date(create_date).toTimeString()}
          </AuthorWrapper>
          <Margin size={2} />
        </Item>
      ))}
    </>
  );
};

export default Review;

const WriteReviewButton = styled(Button)``;

const Item = styled.div`
  border-top: 1px solid #e6e6e6;
  &:last-child {
    border-bottom: 1px solid #e6e6e6;
  }
`;

const AuthorWrapper = styled.div`
  font-size: 1rem;
  color: #808080;
`;
