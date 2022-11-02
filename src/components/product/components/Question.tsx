import styled from "styled-components";
import Button from "../../common/Button";
import { QuestionProps } from "../../../services/model/articleSchema";
import Margin from "../../common/Margin";

const Question = ({ questions }: { questions: QuestionProps[] }) => {
  return (
    <>
      <StyledWriteReviewButton reverse>문의하기</StyledWriteReviewButton>
      <Margin size={2} />
      {questions.map(({ id, title, author, create_date, isCompleted }) => (
        <StyledItem key={id}>
          <Margin size={2} />
          <div>{title}</div>
          <Margin size={1.5} />
          <StyledAuthorWrapper>
            {isCompleted ? "답변 완료" : "답변 대기"} | {author} |{" "}
            {new Date(create_date).toTimeString()}
          </StyledAuthorWrapper>
          <Margin size={2} />
        </StyledItem>
      ))}
    </>
  );
};

export default Question;

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
