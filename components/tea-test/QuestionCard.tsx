import styled from "styled-components";
import { useState } from "react";

interface props {
  title: string;
  choices: string[];
  setAnswer: ({}: { questionNumber: number; choice: string }) => void;
}

const QuestionCard = ({ title, choices, setAnswer }: props) => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const onClickChoice = (questionNumber: number, choice: string) => {
    setAnswer({ questionNumber, choice });
    setSelectedChoice(choice);
  };
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ChoicesContainer>
        {choices.map((choice, i) => (
          <S.Choice
            key={i}
            onClick={() => onClickChoice(i, choice)}
            isSelected={selectedChoice === choice}
          >
            {choice}
          </S.Choice>
        ))}
      </S.ChoicesContainer>
    </S.Container>
  );
};

const S: any = {};

S.Container = styled.div``;

S.Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 1rem 0;
`;

S.ChoicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

S.Choice = styled.div<{ isSelected: boolean }>`
  width: 13rem;
  height: 13rem;
  line-height: 13rem;
  text-align: center;
  margin: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? "#aaaaaa" : "#dddddd")};
`;

export default QuestionCard;
