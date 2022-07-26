import styled from "styled-components";
import Image from "next/image";
import { color } from "../styles/palette";
import Slider from "./common/Slider";
import useElementCurWidth from "../hooks/useElementCurWidth";
import Margin from "./common/Margin";

interface TeaRecommendProps {
  items: {
    img: string;
    brand: string;
    name: string;
    feature: string;
    describe: string;
  }[];
}

const TeaRecommend = ({ items }: TeaRecommendProps) => {
  const [width, $container] = useElementCurWidth();
  return (
    <S.Container ref={$container}>
      <S.Title>추천티를 둘러보세요.</S.Title>
      <Margin size={3} />
      <Slider itemWidth={width}>
        {items.map(({ img, brand, name, feature, describe }, i) => (
          <S.Wrapper key={i}>
            <S.TeaImg
              src={img}
              alt={name}
              width={150}
              height={150}
              quality={100}
            />
            <Margin row size={2} />
            <S.ContentWrapper>
              <S.TeaTitle>{`[${brand}] ${name}`}</S.TeaTitle>
              <Margin size={1} />
              <S.Feature>{feature}</S.Feature>
              <Margin size={2} />
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
  width: 35%;
`;

S.TeaImg = styled(Image)`
  object-fit: contain;
`;

S.TeaTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
S.Feature = styled.div`
  color: ${color.teaveGreen};
`;

S.Describe = styled.p`
  color: ${color.gray500};
  line-height: 1.4rem;
`;
