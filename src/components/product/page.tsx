import TitleHeader from "../common/TitleHeader";
import styled from "styled-components";
import CenteredContainer from "../common/CenteredContainer";
import { useRouter } from "next/router";
import HeaderScroll from "./components/HeaderScroll";
import { useRef } from "react";
import Margin from "../common/Margin";
import Button from "../common/Button";
import Review from "./components/Review";
import Question from "./components/Question";
import dummy from "../../services/static/dummy.json";
import Image from "next/future/image";

/**
 * TODO: headerNavLinks를 전역 상태관리로 layout 나누기
 */
const ProductPage = () => {
  const { teaProductDetailInfo } = dummy;
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
        <Image
          src={teaProductDetailInfo.tea_image_urls[0]}
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
          alt="제품 미리보기"
        />
        <S.BrandWrapper>
          <Image
            src={teaProductDetailInfo.brand_logo_url}
            width={40}
            height={40}
            alt="브랜드 로고"
          />
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

        <Image
          src={teaProductDetailInfo.tea_detail}
          alt="제품 상세 설명"
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
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
        <Image
          src="/image/icon_favorite_red_lined.png"
          width={25}
          height={25}
          alt="찜하기 아이콘"
        />

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

S.Ppap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
