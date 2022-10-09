import TitleHeader from "../components/common/TitleHeader";
import styled from "styled-components";
import CenteredContainer from "../components/layout/CenteredContainer";
import { useRouter } from "next/router";
import HeaderScroll from "../components/layout/HeaderScroll";
import { useRef } from "react";
import Margin from "../components/common/Margin";
import Button from "../components/common/Button";
import Review from "../components/product/Review";
import Question from "../components/product/Question";
import { teaProductDetailInfo } from "../services/static/dummy.json";

const ProductPage = () => {
  const router = useRouter();
  const id = router.query["id"];
  const $infoRef = useRef<HTMLDivElement>(null);
  const $reviewRef = useRef<HTMLDivElement>(null);
  const $questionRef = useRef<HTMLDivElement>(null);

  const headerNavLinks = [
    {
      title: "상품정보",
      ref: $infoRef,
    },
    {
      title: "리뷰",
      ref: $reviewRef,
    },
    {
      title: "문의",
      ref: $questionRef,
    },
  ];

  return (
    <>
      <TitleHeader title="상품정보" hasHomeCartButton />
      <HeaderScroll headerNavLinks={headerNavLinks} />
      <Margin size={3} />
      <S.Container>
        <div id="info" ref={$infoRef} />
        <img src={teaProductDetailInfo.tea_image_urls[0]} width={"100%"} />
        <S.BrandWrapper>
          <img src={teaProductDetailInfo.brand_logo_url} width="40" />
          <Margin row size={2} />
          <div>{teaProductDetailInfo.brand_name}</div>
        </S.BrandWrapper>
        <Margin size={2} />
        <div>
          [{teaProductDetailInfo.brand_name}] {teaProductDetailInfo.tea_name}
        </div>
        <Margin size={2} />
        <S.Price>{teaProductDetailInfo.price.toLocaleString()}원</S.Price>
        <Margin size={2} />
        <S.DeliveryInfoWrapper>
          <S.DeliveryInfoTitle>배송정보</S.DeliveryInfoTitle>
          {teaProductDetailInfo.delivery_info}
        </S.DeliveryInfoWrapper>

        <img
          src={teaProductDetailInfo.tea_detail}
          width="100%"
          alt="제품상세이미지"
        />
        <Margin size={5} />
        <div id="review" ref={$reviewRef} />
        <Margin size={2} />
        <Review reviews={teaProductDetailInfo.reviews} />
        <Margin size={5} />
        <div id="question" ref={$questionRef} />
        <Margin size={2} />
        <Question questions={teaProductDetailInfo.questions} />
      </S.Container>
      <Margin size={7.5} />
      <S.Footer>
        <img src="/image/icon_favorite_red_lined.png" width={25} height={25} />

        <S.Button>구매하기</S.Button>
      </S.Footer>
    </>
  );
};

export default ProductPage;

const S: any = {};

S.Container = styled(CenteredContainer)`
  font-size: 1.4rem;
`;

S.BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-width: 1px 0;
  padding: 1rem;
`;

S.Price = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

S.DeliveryInfoWrapper = styled.div`
  padding: 2rem 0;
  border: 1px solid #e7e7e7;
  border-width: 1px 0;
  font-size: 1.2rem;
`;

S.DeliveryInfoTitle = styled.span`
  color: #808080;
  padding-right: 2rem;
`;

S.Footer = styled(CenteredContainer)`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: content-box;
  height: 7.5rem;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 0.1rem solid #e6e6e6;
  background-color: #ffffff;
`;

S.Button = styled(Button)`
  font-size: 1.5rem;
  height: 4rem;
  margin-left: 2rem;
`;
