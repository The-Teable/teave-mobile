import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import useQuestionProvider from "../../hooks/useQustionProvider";

interface QuestionProviderProps {
  questions: {
    title: string;
    choices: string[];
    multiChoicable: boolean;
  }[];
  providerWidth?: number;
  handleSubmit: () => void;
}

const QuestionProvider = ({
  questions,
  providerWidth = 400,
  handleSubmit
}: QuestionProviderProps) => {
  const {
    questionIndex,
    disablePrev,
    disableNext,
    onClickPrev,
    onClickNext,
    handleChoice
  } = useQuestionProvider({ questions });

  return (
    <S.Container providerWidth={providerWidth}>
      <S.Wrapper transitionX={questionIndex * providerWidth}>
        {questions.map(({ title, choices, multiChoicable }, i) => (
          <S.QuestionCardWrapper key={i}>
            <S.QuestionCounter>
              {questionIndex + 1} / {questions.length}
            </S.QuestionCounter>
            <QuestionCard
              title={title}
              choices={choices}
              multiChoicable={multiChoicable}
              handleChoice={handleChoice}
            />
          </S.QuestionCardWrapper>
        ))}
        <button onClick={handleSubmit}>결과 보기</button>
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
  width: ${({ providerWidth }: { providerWidth: number }) => providerWidth}px;
  margin: 0 auto;
  overflow: hidden;
`;

S.Wrapper = styled.div<{ transitionX: number }>`
  display: flex;
  align-items: center;
  width: 400px;
  transform: translate(
    ${({ transitionX }: { transitionX: number }) => -transitionX}px
  );
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
