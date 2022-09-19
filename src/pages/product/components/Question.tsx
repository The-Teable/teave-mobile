import styled from "styled-components";
import Button from "../../../components/common/Button";
import { QuestionProps } from "../../../services/model/articleSchema";
import Margin from "../../../components/common/Margin";

const Question = ({ questions }: { questions: QuestionProps[] }) => {
  return (
    <>
      <WriteReviewButton reverse>문의하기</WriteReviewButton>
      <Margin size={2} />
      {questions.map(({ id, title, author, create_date, isCompleted }) => (
        <Item key={id}>
          <Margin size={2} />
          <div>{title}</div>
          <Margin size={1.5} />
          <AuthorWrapper>
            {isCompleted ? "답변 완료" : "답변 대기"} | {author} |{" "}
            {new Date(create_date).toTimeString()}
          </AuthorWrapper>
          <Margin size={2} />
        </Item>
      ))}
    </>
  );
};

export default Question;

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
