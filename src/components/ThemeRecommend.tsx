import styled from "styled-components";
import Slider from "./common/Slider";
import TeaItem from "./TeaItem";

interface ThemeRecommendProps {
  title: string;
  items: {
    id: number;
    url: string;
    brand: string;
    name: string;
    price: number;
  }[];
}

const ThemeRecommend = ({ title, items }: ThemeRecommendProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ItemsContainer itemWidth={150}>
        {items.map(({ id, url, brand, name, price }) => (
          <S.ItemWrapper key={id}>
            <TeaItem
              id={id}
              url={url}
              brand={brand}
              name={name}
              price={price}
            />
          </S.ItemWrapper>
        ))}
      </S.ItemsContainer>
    </S.Container>
  );
};

export default ThemeRecommend;

const S: any = {};

S.Container = styled.section``;

S.Title = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

S.ItemsContainer = styled(Slider)`
  padding: 1.5rem 0;
`;

S.ItemWrapper = styled.div`
  margin-left: 1rem;
  &:nth-child(1) {
    margin-left: 0;
  }
`;
