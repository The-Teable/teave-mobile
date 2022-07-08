import styled from "styled-components";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import Button from "../common/Button";
import CenteredBox from "../common/CenteredBox";
import { useState } from "react";

interface props {
  questions: {
    title: string;
    choices: string[];
  }[];
}

const QuestionProvider = ({ questions }: props) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <S.Container>
      {questions.map(({ title, choices }, i) => (
        <QuestionCard key={i} title={title} choices={choices} />
      ))}
      <Link href={"/tea-test/result"}>
        <S.Button>결과 보기</S.Button>
      </Link>
    </S.Container>
  );
};

const S: any = {};

S.Container = styled(CenteredBox)``;

S.Button = styled(Button)``;

export default QuestionProvider;
