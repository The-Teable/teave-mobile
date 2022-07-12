import styled from "styled-components";
import { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";

interface props {
  title: string;
  choices: string[];
  multiChoicable: boolean;
  handleChoice: (choice: string[]) => void;
}

const QuestionCard = ({
  title,
  choices,
  multiChoicable,
  handleChoice
}: props) => {
  const isInitailRendering = useRef(true);
  const [selectedChoiceList, setSelectedChoiceList] = useState<string[]>([]);
  const onClickChoice = (selectedChoice: string, wasSelected: boolean) => {
    if (wasSelected) {
      setSelectedChoiceList(() =>
        selectedChoiceList.filter(e => e !== selectedChoice)
      );
    } else if (multiChoicable) {
      setSelectedChoiceList(() => selectedChoiceList.concat(selectedChoice));
    } else {
      setSelectedChoiceList(() => [selectedChoice]);
    }
  };

  useEffect(() => {
    if (isInitailRendering.current) isInitailRendering.current = false;
    else handleChoice(selectedChoiceList);
  }, [selectedChoiceList]);

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
  user-select: none;
  width: 13rem;
  height: 13rem;
  line-height: 13rem;
  text-align: center;
  margin: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? "#aaaaaa" : "#dddddd")};
`;

export default QuestionCard;
