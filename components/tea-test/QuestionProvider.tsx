import styled from "styled-components";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import { useState, useRef, useEffect } from "react";

interface props {
  questions: {
    title: string;
    choices: string[];
  }[];
  providerWidth?: number;
}

const QuestionProvider = ({ questions = [], providerWidth = 400 }: props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [transitionX, setTransitionX] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [answerList, setAnswerList] = useState([]);
  const checkGoNext = (
    answerList: string[],
    curQuestionNumber: number,
    endQustionNumber: number
  ) =>
    answerList.length > curQuestionNumber &&
    endQustionNumber > curQuestionNumber;
  const checkGoPrev = (curQuestionNumber: number) => curQuestionNumber > 0;
  const nextQuestion = () => {
    setTransitionX(transitionX + providerWidth);
    setQuestionNumber(questionNumber + 1);
  };
  const prevQuestion = () => {
    setTransitionX(transitionX - providerWidth);
    setQuestionNumber(questionNumber - 1);
  };
  const onClickPrev = () => prevQuestion();
  const onClickNext = () => nextQuestion();

  useEffect(() => {
    setDisableNext(
      !checkGoNext(answerList, questionNumber, questions.length - 1)
    );
    setDisablePrev(!checkGoPrev(questionNumber));
  }, []);
  return (
    <S.Container providerWidth={providerWidth}>
      <S.Wrapper transitionX={transitionX}>
        {questions.map(({ title, choices }, i) => (
          <S.QuestionCardWrapper>
            <QuestionCard
              key={i}
              title={title}
              choices={choices}
              nextQuestion={nextQuestion}
            />
          </S.QuestionCardWrapper>
        ))}

        <Link href={"/tea-test/result"}>
          <button>결과 보기</button>
        </Link>
      </S.Wrapper>
      <S.QuestionNav>
        <S.PrevButton onClick={onClickPrev} disable={disablePrev} />
        <S.QuestionCounter>
          {questionNumber} / {questions.length}
        </S.QuestionCounter>
        <S.NextButton onClick={onClickNext} disable={disableNext} />
      </S.QuestionNav>
    </S.Container>
  );
};

const S: any = {};

S.Container = styled.div<{ providerWidth: number }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: ${({ providerWidth }) => providerWidth}px;
  margin: 0 auto;
  overflow: hidden;
`;

S.Wrapper = styled.div<{ transitionX: number }>`
  display: flex;
  align-items: center;
  width: 400px;
  transform: translate(${({ transitionX }) => -transitionX}px);
  transition: transform 0.5s;
`;

S.QuestionCardWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

S.QuestionNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  width: 100px;
  height: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

S.PrevButton = styled.button`
  width: 30px;
  height: 30px;
`;

S.QuestionCounter = styled.div`
  flex-shrink: 0;
  padding: 0 10px;
`;

S.NextButton = styled.button`
  width: 30px;
  height: 30px;
`;

export default QuestionProvider;
