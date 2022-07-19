import HomeLayout from "../../components/layout/HomeLayout";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Link from "next/link";
import { HeaderIndex } from "../../components/layout/Header";
import Margin from "../../components/common/Margin";

const TestPage = () => {
  return (
    <HomeLayout headerIndex={HeaderIndex.TEST}>
      <S.Container>
        <S.Text>
          내 취향에 꼭 맞는 티와 함께
          <br />
          여유로운 하루를 보내고 싶지 않으신가요?
        </S.Text>
        <Margin size={2} />
        <S.SubText>
          간단한 테스트를 통해
          <br />
          여러분의 취향에 맞는 티를 찾아드릴게요!
        </S.SubText>
        <Margin size={5} />
        <Link href="/tea-test/question" passHref>
          <S.Button>티 테스트 시작</S.Button>
        </Link>
      </S.Container>
    </HomeLayout>
  );
};

const S: any = {};

S.Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

S.Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

S.SubText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #424242;
`;

S.Button = styled(Button)`
  width: 25rem;
`;

export default TestPage;
