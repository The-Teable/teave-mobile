import TitleHeader from "../../components/common/TitleHeader";
import styled from "styled-components";
import CenteredContainer from "../../components/layout/CenteredContainer";
import { useRouter } from "next/router";
import HeaderScroll from "../../components/layout/HeaderScroll";
import { useRef } from "react";
import Image from "next/image";
import Margin from "../../components/common/Margin";
import Button from "../../components/common/Button";

const ProductPage = () => {
  const router = useRouter();
  const id = router.query["id"];
  const $infoRef = useRef<HTMLDivElement>(null);
  const $reviewRef = useRef<HTMLDivElement>(null);
  const $questionRef = useRef<HTMLDivElement>(null);

  const headerNavLinks = [
    {
      title: "상품정보",
      href: `#info`,
      ref: $infoRef
    },
    {
      title: "리뷰",
      href: `#review`,
      ref: $reviewRef
    },
    {
      title: "문의",
      href: `#question`,
      ref: $questionRef
    }
  ];

  const dummy = {
    tea_image_urls: ["/image/dummy_product1.png"],
    brand_logo_url: "/image/dummy_tea_logo.png",
    brand_name: "티퍼블릭",
    tea_name: "카라멜 티메리카노",
    price: 15000,
    delivery_info: "3만원 이상 구매시 무료배송",
    tea_detail: "/image/dummy_product_detail.svg"
  };

  return (
    <>
      <TitleHeader title="상품정보" hasHomeCartButton />
      <HeaderScroll headerNavLinks={headerNavLinks} />
      <Margin size={3} />
      <S.Container>
        <img
          src={dummy.tea_image_urls[0]}
          id="info"
          ref={$infoRef}
          width={"100%"}
        />
        <S.BrandWrapper>
          <img src={dummy.brand_logo_url} width="40" />
          <Margin row size={2} />
          <div>{dummy.brand_name}</div>
        </S.BrandWrapper>
        <Margin size={2} />
        <div>
          [{dummy.brand_name}] {dummy.tea_name}
        </div>
        <Margin size={2} />
        <S.Price>{dummy.price.toLocaleString()}원</S.Price>
        <Margin size={2} />
        <S.DeliveryInfoWrapper>
          <S.DeliveryInfoTitle>배송정보</S.DeliveryInfoTitle>
          {dummy.delivery_info}
        </S.DeliveryInfoWrapper>

        <img src={dummy.tea_detail} width="100%" alt="제품상세이미지" />

        <div id="review" ref={$reviewRef} style={{ height: 1000 }}>
          review
        </div>
        <div id="question" ref={$questionRef} style={{ height: 1000 }}>
          question
        </div>
      </S.Container>
      <Margin size={5} />
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
