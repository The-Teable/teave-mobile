import Link from "next/link";
import styled from "styled-components";
import CenteredContainer from "../layout/CenteredContainer";
import { color } from "../../styles/palette";

const TitleHeader = ({
  title,
  backlink = null
}: {
  title: string;
  backlink?: string | null;
}) => {
  return (
    <>
      <S.Header>
        {backlink ? (
          <Link href={backlink} passHref>
            <S.GoBackButton />
          </Link>
        ) : null}
        <S.Title>{title}</S.Title>
      </S.Header>
    </>
  );
};

export default TitleHeader;

const S: any = {};

S.Header = styled(CenteredContainer)`
  position: relative;
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
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
