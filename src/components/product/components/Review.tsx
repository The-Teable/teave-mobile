import styled from "styled-components";
import Button from "../../common/Button";
import { ReviewProps } from "../../../services/model/articleSchema";
import Margin from "../../common/Margin";
import Image from "next/image";

const Review = ({ reviews }: { reviews: ReviewProps[] }) => {
  return (
    <>
      <StyledWriteReviewButton reverse>리뷰 쓰기</StyledWriteReviewButton>
      <Margin size={2} />
      {reviews.map(({ id, title, author, create_date, image_url }) => (
        <StyledItem key={id}>
          <Margin size={2} />
          <div>
            {title}{" "}
            {image_url && (
              <Image
                src="/image/icon_has_image.png"
                width={12}
                height={12}
                alt="사진 있음 아이콘"
              />
            )}
          </div>
          <Margin size={1.5} />
          <StyledAuthorWrapper>
            {author} | {new Date(create_date).toTimeString()}
          </StyledAuthorWrapper>
          <Margin size={2} />
        </StyledItem>
      ))}
    </>
  );
};

export default Review;

const StyledWriteReviewButton = styled(Button)``;

const StyledItem = styled.div`
  border-top: 1px solid #e6e6e6;
  &:last-child {
    border-bottom: 1px solid #e6e6e6;
  }
`;

const StyledAuthorWrapper = styled.div`
  font-size: 1rem;
  color: #808080;
`;
