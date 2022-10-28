import styled from "styled-components";
import CenteredContainer from "../common/CenteredContainer";
import { color } from "../../styles/palette";
import { useRouter } from "next/router";
import Image from "next/image";

type Props = {
  title: string;
  hasHomeCartButton?: boolean;
};

const TitleHeader = (props: Props) => {
  const { title, hasHomeCartButton } = props;

  const router = useRouter();

  const handleGoBack = () => router.back();

  const handleGoHome = () => router.push("/home");

  const handleGoCart = () => router.push("/cart");

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
        {!hasHomeCartButton ? null : (
          <>
            <S.GoHomeButton>
              <Image
                onClick={handleGoHome}
                src="/image/icon_home.svg"
                layout="fill"
              />
            </S.GoHomeButton>
            <S.GoCartButton>
              <Image
                onClick={handleGoCart}
                src="/image/icon_cart.svg"
                layout="fill"
              />
            </S.GoCartButton>
          </>
        )}
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

S.Button = styled.div`
  position: absolute;
  border: 0px;
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

S.GoBackButton = styled(S.Button)`
  left: 2rem;
`;

S.GoHomeButton = styled(S.Button)`
  right: 6rem;
`;

S.GoCartButton = styled(S.Button)`
  right: 2rem;
`;

S.Padding = styled.div`
  height: 5rem;
`;
