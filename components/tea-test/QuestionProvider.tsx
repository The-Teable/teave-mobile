import styled from "styled-components";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import { useState, useRef, useEffect } from "react";

interface props {
  questions: {
    title: string;
    choices: string[];
  }[];
}

const QuestionProvider = ({ questions }: props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [transitionX, setTransitionX] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const nextQuestion = () => {
    setTransitionX(transitionX + 1225);
  };
  const prevQuestion = () => {
    setTransitionX(transitionX - 1225);
  };
  const onClickPrev = () => prevQuestion();
  const onClickNext = () => nextQuestion();
  console.log(transitionX);
  return (
    <S.Container>
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

S.Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 60vh;

  overflow: hidden;
`;

S.Wrapper = styled.div<{ transitionX: number }>`
  display: flex;
  transform: translate(${({ transitionX }) => -transitionX}px);
  transition: transform 0.5s;
`;

S.QuestionCardWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
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
