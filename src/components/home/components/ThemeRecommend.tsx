import styled from "styled-components";
import Slider from "../../common/Slider";
import TeaItem from "../../common/TeaItem";

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
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledItemsContainer itemWidth={150}>
        {items.map(({ id, url, brand, name, price }) => (
          <StyledItemWrapper key={id}>
            <TeaItem
              id={id}
              url={url}
              brand={brand}
              name={name}
              price={price}
            />
          </StyledItemWrapper>
        ))}
      </StyledItemsContainer>
    </StyledContainer>
  );
};

export default ThemeRecommend;

const StyledContainer = styled.section``;

const StyledTitle = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

const StyledItemsContainer = styled(Slider)`
  padding: 1.5rem 0;
`;

const StyledItemWrapper = styled.div`
  margin-left: 1rem;
  &:nth-child(1) {
    margin-left: 0;
  }
`;
