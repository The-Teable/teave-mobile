import styled from "styled-components";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import { useState, useRef, useEffect } from "react";

interface props {
  questions: {
    title: string;
    choices: string[];
    multiChoicable: boolean;
  }[];
  providerWidth?: number;
}

interface answerProps {
  questionNumber: number;
  choice: string[];
  multiChoicable: null | boolean;
}

const QuestionProvider = ({ questions = [], providerWidth = 400 }: props) => {
  const isInitialMount = useRef(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [transitionX, setTransitionX] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [answerList, setAnswerList] = useState<string[][]>([]);
  const [answer, setAnswer] = useState<answerProps>({
    questionNumber: -1,
    choice: [],
    multiChoicable: null
  });

  const checkGoNext = (
    answerList: string[][],
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
  }, [questionNumber]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const newAnswerList = answerList.slice();
      newAnswerList.splice(questionNumber, 1, answer.choice);
      setAnswerList(newAnswerList);
    }
  }, [answer]);

  useEffect(() => {
    if (answer.multiChoicable === false) nextQuestion();
    else
      setDisableNext(
        !checkGoNext(answerList, questionNumber, questions.length - 1)
      );
  }, [answerList]);

  return (
    <S.Container providerWidth={providerWidth}>
      <S.Wrapper transitionX={transitionX}>
        {questions.map(({ title, choices, multiChoicable }, i) => (
          <S.QuestionCardWrapper key={i}>
            <S.QuestionCounter>
              {questionNumber + 1} / {questions.length}
            </S.QuestionCounter>
            <QuestionCard
              title={title}
              choices={choices}
              setAnswer={setAnswer}
              multiChoicable={multiChoicable}
            />
          </S.QuestionCardWrapper>
        ))}

        <Link href={"/tea-test/result"}>
          <button>결과 보기</button>
        </Link>
      </S.Wrapper>
      <S.PrevButton onClick={onClickPrev} disabled={disablePrev} />
      <S.NextButton onClick={onClickNext} disabled={disableNext} />
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
  transition-delay: 0.1s;
`;

S.QuestionCardWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

S.QuestionCounter = styled.div`
  text-align: center;
`;

S.TeaTestButton = styled.button`
  position: absolute;
  top: 48%;
  width: 30px;
  height: 80px;
`;

S.PrevButton = styled(S.TeaTestButton)`
  left: 0;
`;

S.NextButton = styled(S.TeaTestButton)`
  right: 0;
`;

export default QuestionProvider;
