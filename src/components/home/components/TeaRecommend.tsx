import styled from "styled-components";
import Image from "next/image";
import { color } from "../../../styles/palette";
import Slider from "../../common/Slider";
import useElementCurWidth from "../../../hooks/useElementCurWidth";
import Margin from "../../common/Margin";
import { TeaRecommendProps } from "../../../types/mainPageProps";

type Props = {
  items: TeaRecommendProps;
};

const TeaRecommend = ({ items }: Props) => {
  const [width, $container] = useElementCurWidth();
  return (
    <StyledContainer ref={$container}>
      <StyledTitle>추천티를 둘러보세요.</StyledTitle>
      <Margin size={3} />
      <Slider itemWidth={width}>
        {items.map(({ url, brand, name, features, describe }, i) => (
          <StyledWrapper key={i}>
            <StyledTeaImg
              src={url}
              alt={name}
              width={80}
              height={80}
              quality={100}
            />
            <Margin row size={2} />
            <StyledContentWrapper>
              <StyledTeaTitle>{`[${brand}] ${name}`}</StyledTeaTitle>
              <Margin size={1} />
              {features.split(",").map((feature, i) => (
                <StyledFeature key={i}>{feature}</StyledFeature>
              ))}
              <Margin size={1} />
              <StyledDescribe>{describe}</StyledDescribe>
            </StyledContentWrapper>
          </StyledWrapper>
        ))}
      </Slider>
    </StyledContainer>
  );
};

export default TeaRecommend;

const StyledTitle = styled.h1`
  font-size: 2rem;
`;
const StyledContainer = styled.div``;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  background-color: ${color.lightGray};
`;

const StyledContentWrapper = styled.div`
  width: 55%;
`;

const StyledTeaImg = styled(Image)`
  object-fit: contain;
`;

const StyledTeaTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
const StyledFeature = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: ${color.teaveGreen};
  color: #ffffff;
  border-radius: 2rem;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.8rem;
`;

const StyledDescribe = styled.p`
  color: ${color.gray500};
  font-size: 1.1rem;
  line-height: 1.5rem;
  width: 90%;
`;
