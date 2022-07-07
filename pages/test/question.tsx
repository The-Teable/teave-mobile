import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import CenteredBox from "../../components/common/CenteredBox";

const Question = () => {
  return (
    <Layout>
      <S.Container>
        <div>성별</div>
      </S.Container>
    </Layout>
  );
};

const S: any = {};

S.Container = styled(CenteredBox).attrs({ as: "section" })``;

export default Question;
