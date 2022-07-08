import styled from "styled-components";

interface props {
  title: string;
  choices: string[];
}

const QuestionCard = ({ title, choices }: props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ChoicesContainer>
        {choices.map((choice, i) => (
          <S.Choice key={i}>{choice}</S.Choice>
        ))}
      </S.ChoicesContainer>
    </S.Container>
  );
};

const S: any = {};

S.Container = styled.div<{ width: number }>`
  height: 100%;
  width: 100%;
`;

S.Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 3rem 0;
`;

S.ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

S.Choice = styled.div`
  width: 15rem;
  height: 15rem;
  line-height: 15rem;
  text-align: center;
  margin: 1rem;
  background-color: #dddddd;
`;

export default QuestionCard;
