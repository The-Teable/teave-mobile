import styled from "styled-components";
import { useState, Dispatch, SetStateAction } from "react";

interface answerProps {
  questionNumber: number;
  choice: string[];
  multiChoicable: null | boolean;
}

interface props {
  title: string;
  choices: string[];
  multiChoicable: boolean;
  setAnswer: Dispatch<SetStateAction<answerProps>>;
}

const QuestionCard = ({ title, choices, multiChoicable, setAnswer }: props) => {
  const [selectedChoiceList, setSelectedChoiceList] = useState<string[]>([]);
  const onClickChoice = (
    questionNumber: number,
    clickedChoice: string,
    wasSelected: boolean
  ) => {
    if (!multiChoicable) {
      setAnswer({
        questionNumber,
        choice: [clickedChoice],
        multiChoicable: false
      });
      setSelectedChoiceList([clickedChoice]);
    } else if (wasSelected) {
      setSelectedChoiceList(
        selectedChoiceList.filter(e => e !== clickedChoice)
      );
    } else {
      console.log("hi");
      setSelectedChoiceList(selectedChoiceList.concat(clickedChoice));
    }
  };

  const checkSelected = (choiceList, selectedChoice) =>
    choiceList.some(choice => choice === selectedChoice);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ChoicesContainer>
        {choices.map((curChoice, i) => (
          <S.Choice
            key={i}
            onClick={() =>
              onClickChoice(
                i,
                curChoice,
                checkSelected(selectedChoiceList, curChoice)
              )
            }
            isSelected={checkSelected(selectedChoiceList, curChoice)}
          >
            {curChoice}
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
