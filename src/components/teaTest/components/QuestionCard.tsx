import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

interface QuestionCardProps {
  title: string;
  choices: string[];
  multiChoicable: boolean;
  handleChoice: (choice: string[]) => void;
}

const QuestionCard = ({
  title,
  choices,
  multiChoicable,
  handleChoice,
}: QuestionCardProps) => {
  const isInitailRendering = useRef(true);
  const [selectedChoiceList, setSelectedChoiceList] = useState<string[]>([]);
  const onClickChoice = (selectedChoice: string, wasSelected: boolean) => {
    if (wasSelected) {
      setSelectedChoiceList(() =>
        selectedChoiceList.filter((e) => e !== selectedChoice)
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

  const checkSelected = (selectedChoice: string) =>
    selectedChoiceList.some((choice) => choice === selectedChoice);

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledChoicesContainer>
        {choices.map((curChoice, i) => (
          <StyledChoice
            key={i}
            onClick={() => onClickChoice(curChoice, checkSelected(curChoice))}
            isSelected={checkSelected(curChoice)}
          >
            {curChoice}
          </StyledChoice>
        ))}
      </StyledChoicesContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const StyledTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 1rem 0;
`;

const StyledChoicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledChoice = styled.div<{ isSelected: boolean }>`
  user-select: none;
  width: 13rem;
  height: 13rem;
  line-height: 13rem;
  text-align: center;
  margin: 0.5rem;
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "#aaaaaa" : "#dddddd"};
`;

export default QuestionCard;
