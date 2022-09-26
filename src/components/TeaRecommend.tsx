import styled from "styled-components";
import Image from "next/image";
import { color } from "../styles/palette";
import Slider from "./common/Slider";
import useElementCurWidth from "../hooks/useElementCurWidth";
import Margin from "./common/Margin";
import { TeaRecommendProps } from "../types/mainPageProps";

type Props = {
  items: TeaRecommendProps;
};

const TeaRecommend = ({ items }: Props) => {
  const [width, $container] = useElementCurWidth();
  return (
    <S.Container ref={$container}>
      <S.Title>추천티를 둘러보세요.</S.Title>
      <Margin size={3} />
      <Slider itemWidth={width}>
        {items.map(({ url, brand, name, features, describe }, i) => (
          <S.Wrapper key={i}>
            <S.TeaImg
              src={url}
              alt={name}
              width={80}
              height={80}
              quality={100}
            />
            <Margin row size={2} />
            <S.ContentWrapper>
              <S.TeaTitle>{`[${brand}] ${name}`}</S.TeaTitle>
              <Margin size={1} />
              {features.split(",").map((feature, i) => (
                <S.Feature key={i}>{feature}</S.Feature>
              ))}
              <Margin size={1} />
              <S.Describe>{describe}</S.Describe>
            </S.ContentWrapper>
          </S.Wrapper>
        ))}
      </Slider>
    </S.Container>
  );
};

export default TeaRecommend;

const S: any = {};
S.Title = styled.h1`
  font-size: 2rem;
`;
S.Container = styled.div``;

S.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  background-color: ${color.lightGray};
`;

S.ContentWrapper = styled.div`
  width: 55%;
`;

S.TeaImg = styled(Image)`
  object-fit: contain;
`;

S.TeaTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
S.Feature = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: ${color.teaveGreen};
  color: #ffffff;
  border-radius: 2rem;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.8rem;
`;

S.Describe = styled.p`
  color: ${color.gray500};
  font-size: 1.1rem;
  line-height: 1.5rem;
  width: 90%;
`;
