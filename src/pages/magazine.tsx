import HomeLayout from "../components/layout/HomeLayout";
import styled from "styled-components";

const MagazinePage = () => {
  return (
    <HomeLayout>
      <S.Container>준비중입니다.</S.Container>
    </HomeLayout>
  );
};

export default MagazinePage;

const S: any = {};

S.Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 2rem;
`;
