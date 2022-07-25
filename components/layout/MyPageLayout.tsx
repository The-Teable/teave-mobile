import Link from "next/link";
import styled from "styled-components";
import Margin from "../common/Margin";
import CenteredContainer from "./CenteredContainer";
import { ReactNode, FormEvent } from "react";

const MypageLayout = ({
  title,
  backlink = null,
  handleSubmit = null,
  children
}: {
  title: string;
  backlink?: string | null;
  handleSubmit?: ((e: FormEvent<HTMLFormElement>) => void) | null;
  children?: ReactNode;
}) => {
  return (
    <>
      <S.Container>
        <S.Header>
          {backlink ? (
            <Link href={backlink} passHref>
              <S.GoBackButton />
            </Link>
          ) : null}
          <S.Title>{title}</S.Title>
        </S.Header>
        <Margin size={2} />

        {handleSubmit ? (
          <form onSubmit={handleSubmit}>{children}</form>
        ) : (
          children
        )}
      </S.Container>
    </>
  );
};

export default MypageLayout;

const S: any = {};

S.Container = styled(CenteredContainer)`
  position: relative;
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
