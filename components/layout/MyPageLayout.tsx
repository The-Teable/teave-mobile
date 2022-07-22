import Link from "next/link";
import styled from "styled-components";
import Margin from "../common/Margin";

const MyPageLayout = ({ title, backlink, handleSubmit, children }: any) => {
  return (
    <>
      <Margin size={4} />
      <S.Container>
        <S.Header>
          <Link href={backlink} passHref>
            <S.GoBackButton />
          </Link>
          <S.Title>{title}</S.Title>
        </S.Header>
        <Margin size={2} />
        <form onSubmit={handleSubmit}></form>
        {children}
      </S.Container>
    </>
  );
};

export default MyPageLayout;

const S: any = {};

S.Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 2rem;
  margin: 0 auto;
  font-size: 1.2rem;
`;
S.Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
`;

S.GoBackButton = styled.button`
  position: absolute;
  left: 2rem;
  border: 0px;
  background: url("/image/icon_go_back.svg") no-repeat center/contain;
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Title = styled.h1`
  margin: 0 auto;
  line-height: 2.5rem;
  font-size: 1.4rem;
`;
