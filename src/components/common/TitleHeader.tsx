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
      <StyledHeader>
        <StyledGoBackButton>
          <Image
            onClick={handleGoBack}
            src="/image/icon_go_back.svg"
            layout="fill"
            alt="go back"
          />
        </StyledGoBackButton>
        <StyledTitle>{title}</StyledTitle>
        {!hasHomeCartButton ? null : (
          <>
            <StyledGoHomeButton>
              <Image
                onClick={handleGoHome}
                src="/image/icon_home.svg"
                layout="fill"
                alt="go home"
              />
            </StyledGoHomeButton>
            <StyledGoCartButton>
              <Image
                onClick={handleGoCart}
                src="/image/icon_cart.svg"
                layout="fill"
                alt="go cart"
              />
            </StyledGoCartButton>
          </>
        )}
      </StyledHeader>
      <StyledPadding />
    </>
  );
};

export default TitleHeader;

const StyledHeader = styled(CenteredContainer)`
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

const StyledButton = styled.div`
  position: absolute;
  border: 0px;
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledTitle = styled.h1`
  margin: 0 auto;
  line-height: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const StyledGoBackButton = styled(StyledButton)`
  left: 2rem;
`;

const StyledGoHomeButton = styled(StyledButton)`
  right: 6rem;
`;

const StyledGoCartButton = styled(StyledButton)`
  right: 2rem;
`;

const StyledPadding = styled.div`
  height: 5rem;
`;
