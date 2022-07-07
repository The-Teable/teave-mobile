import Layout from "../components/layout/Layout";
import styled from "styled-components";
import CenteredBox from "../components/common/CenteredBox";
import Button from "../components/common/Button";
import { useState } from "react";

const Test = () => {
  const [section, setSection] = useState("greeting");

  return (
    <Layout>
      <S.Container>
        <S.Text>
          내 취향에 꼭 맞는 티와 함께
          <br />
          여유로운 하루를 보내는건 어떨까요?
          <br />
          <br />
          간단한 테스트로 취향에 맞는 티를 추천해드릴게요.
        </S.Text>
        <S.Button text={"나를 위한 티 찾으러 가기"} />
      </S.Container>
    </Layout>
  );
};

export default Test;

const S: any = {};

S.Container = styled(CenteredBox).attrs({ as: "section" })``;

// temp style
S.Text = styled.p`
  font-size: 20px;
  margin-top: 50px;
`;

S.Button = styled(Button)``;
