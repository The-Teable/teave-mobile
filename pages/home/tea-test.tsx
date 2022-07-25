import HomeLayout from "../../components/layout/HomeLayout";
import styled from "styled-components";
import Button from "../../components/common/Button";
import { HeaderIndex } from "../../components/layout/Header";
import Margin from "../../components/common/Margin";
import { useState } from "react";
import QuestionProvider from "../../components/tea-test/QuestionProvider";
import questions from "../api/teaTestQuestions.json";

const NAVIGATE = {
  WELCOME: "welcome",
  QUESTION: "question",
  RESULT: "result"
};

const TeaTestPage = () => {
  const [navigate, setNavigate] = useState(NAVIGATE.WELCOME);
  const handleSubmit = () => {
    setNavigate(NAVIGATE.RESULT);
  };
  return (
    <HomeLayout headerIndex={HeaderIndex.TEST}>
      {navigate === NAVIGATE.WELCOME ? (
        <S.Container>
          <S.Text>
            내 취향에 꼭 맞는 티와 함께
            <br />
            여유로운 하루를 보내고 싶지 않으신가요?
          </S.Text>
          <Margin size={2} />
          <S.SubText>
            간단한 테스트를 통해
            <br />
            여러분의 취향에 맞는 티를 찾아드릴게요!
          </S.SubText>
          <Margin size={5} />
          <S.Button onClick={() => setNavigate(NAVIGATE.QUESTION)}>
            티 테스트 시작
          </S.Button>
        </S.Container>
      ) : navigate === NAVIGATE.QUESTION ? (
        <QuestionProvider questions={questions} handleSubmit={handleSubmit} />
      ) : navigate === NAVIGATE.RESULT ? (
        <div>result</div>
      ) : (
        <div>wrong route</div>
      )}
    </HomeLayout>
  );
};

const S: any = {};

S.Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

S.Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

S.SubText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #424242;
`;

S.Button = styled(Button)`
  width: 25rem;
`;

export default TeaTestPage;
