import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import useQuestionProvider from "../hooks/useQustionProvider";

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
  handleSubmit,
}: QuestionProviderProps) => {
  const {
    questionIndex,
    disablePrev,
    disableNext,
    onClickPrev,
    onClickNext,
    handleChoice,
  } = useQuestionProvider({ questions });

  return (
    <StyledContainer providerWidth={providerWidth}>
      <StyledWrapper transitionX={questionIndex * providerWidth}>
        {questions.map(({ title, choices, multiChoicable }, i) => (
          <StyledQuestionCardWrapper key={i}>
            <StyledQuestionCounter>
              {questionIndex + 1} / {questions.length}
            </StyledQuestionCounter>
            <QuestionCard
              title={title}
              choices={choices}
              multiChoicable={multiChoicable}
              handleChoice={handleChoice}
            />
          </StyledQuestionCardWrapper>
        ))}
        <button onClick={handleSubmit}>결과 보기</button>
      </StyledWrapper>
      <StyledPrevButton onClick={onClickPrev} disabled={disablePrev} />
      <StyledNextButton onClick={onClickNext} disabled={disableNext} />
    </StyledContainer>
  );
};

const S: any = {};

const StyledContainer = styled.div<{ providerWidth: number }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: ${({ providerWidth }: { providerWidth: number }) => providerWidth}px;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledWrapper = styled.div<{ transitionX: number }>`
  display: flex;
  align-items: center;
  width: 400px;
  transform: translate(
    ${({ transitionX }: { transitionX: number }) => -transitionX}px
  );
  transition: transform 0.5s;
  transition-delay: 0.1s;
`;

const StyledQuestionCardWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

const StyledQuestionCounter = styled.div`
  text-align: center;
`;

const StyledTeaTestButton = styled.button`
  position: absolute;
  top: 48%;
  width: 30px;
  height: 80px;
`;

const StyledPrevButton = styled(StyledTeaTestButton)`
  left: 0;
`;

const StyledNextButton = styled(StyledTeaTestButton)`
  right: 0;
`;

export default QuestionProvider;
