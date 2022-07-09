import styled from "styled-components";

interface props {
  title: string;
  choices: string[];
  nextQuestion: () => void;
}

const QuestionCard = ({ title, choices, nextQuestion }: props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ChoicesContainer>
        {choices.map((choice, i) => (
          <S.Choice key={i} onClick={nextQuestion}>
            {choice}
          </S.Choice>
        ))}
      </S.ChoicesContainer>
    </S.Container>
  );
};

const S: any = {};

S.Container = styled.div<{ width: number }>``;

S.Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 3rem 0;
`;

S.ChoicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

S.Choice = styled.div`
  width: 12rem;
  height: 12rem;
  line-height: 12rem;
  text-align: center;
  margin: 1rem;
  background-color: #dddddd;
`;

export default QuestionCard;
