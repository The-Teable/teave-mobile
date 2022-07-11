import Layout from "../../components/layout/Layout";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Link from "next/link";

const TestPage = () => {
  return (
    <Layout headerIndex={2}>
      <S.Container>
        <S.Text>내 취향에 꼭 맞는 어쩌구저쩌구</S.Text>
        <Link href="/tea-test/question" passHref>
          <S.Button>티 테스트 시작</S.Button>
        </Link>
      </S.Container>
    </Layout>
  );
};

const S: any = {};

S.Container = styled.section``;

// temp style
S.Text = styled.p`
  font-size: 20px;
  margin-top: 50px;
`;

S.Button = styled(Button)``;

export default TestPage;
