import styled from "styled-components";
import Button from "../common/Button";
import Margin from "../common/Margin";
import { useState } from "react";
import QuestionProvider from "./components/QuestionProvider";
import questions from "../../services/static/teaTestQuestions.json";

const NAVIGATE = {
  WELCOME: "WELCOME",
  QUESTION: "QUESTION",
  RESULT: "RESULT",
};

const TeaTestPage = () => {
  const [navigate, setNavigate] = useState(NAVIGATE.WELCOME);
  const handleSubmit = () => {
    setNavigate(NAVIGATE.RESULT);
  };
  return (
    <>
      {navigate === NAVIGATE.WELCOME ? (
        <StyledContainer>
          <StyledText>
            내 취향에 꼭 맞는 티와 함께
            <br />
            여유로운 하루를 보내고 싶지 않으신가요?
          </StyledText>
          <Margin size={2} />
          <StyledSubText>
            간단한 테스트를 통해
            <br />
            여러분의 취향에 맞는 티를 찾아드릴게요!
          </StyledSubText>
          <Margin size={5} />
          <StyledButton onClick={() => setNavigate(NAVIGATE.QUESTION)}>
            티 테스트 시작
          </StyledButton>
        </StyledContainer>
      ) : navigate === NAVIGATE.QUESTION ? (
        <QuestionProvider questions={questions} handleSubmit={handleSubmit} />
      ) : navigate === NAVIGATE.RESULT ? (
        <div>result</div>
      ) : (
        <div>wrong route</div>
      )}
    </>
  );
};

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

const StyledSubText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #424242;
`;

const StyledButton = styled(Button)`
  width: 25rem;
`;

export default TeaTestPage;
