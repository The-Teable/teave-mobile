import styled from "styled-components";
import CenteredContainer from "../layout/CenteredContainer";
import { color } from "../../styles/palette";
import { useRouter } from "next/router";
import Image from "next/image";

const TitleHeader = ({ title }: { title: string }) => {
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <>
      <S.Header>
        <S.GoBackButton>
          <Image
            onClick={handleGoBack}
            src="/image/icon_go_back.svg"
            layout="fill"
          />
        </S.GoBackButton>

        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Padding />
    </>
  );
};

export default TitleHeader;

const S: any = {};

S.Header = styled(CenteredContainer)`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
`;

S.GoBackButton = styled.div`
  position: absolute;
  left: 2rem;
  border: 0px;
  background: url() no-repeat center/contain;
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Title = styled.h1`
  margin: 0 auto;
  line-height: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

S.Padding = styled.div`
  height: 5rem;
`;
