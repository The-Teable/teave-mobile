import { rest } from "msw";
import { cartApiUrls } from "../src/services/api/cartApi";
import { mypageApiUrls } from "../src/services/api/myPageApi";
import { teaApiUrls } from "../src/services/api/teaApi";
import { wishApiUrls } from "../src/services/api/wishApi";
import { UserWishProduct } from "../src/services/model/wishSchema";

type UserWishProductRequsetBody = {
  body: {
    tea_id: number;
  };
};

export const handlers = [
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + wishApiUrls.WISH,
    (_req, res, ctx) => {
      return res(ctx.json<UserWishProduct>(dummy.wishProducts));
    }
  ),
  rest.post(
    process.env.NEXT_PUBLIC_LS_URL + wishApiUrls.WISH,
    (_req, res, ctx) => {
      // const { authToken } = req.cookies;
      return res(ctx.status(201));
    }
  ),
  rest.post(
    process.env.NEXT_PUBLIC_LS_URL + wishApiUrls.WISH_DELETE,
    (req: UserWishProductRequsetBody, res, ctx) => {
      const { tea_id } = req.body;
      dummy.wishProducts = dummy.wishProducts.filter(({ id }) => tea_id !== id);
      return res(ctx.status(204));
    }
  ),
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + teaApiUrls.THEME_PRODUCTS,
    (_req, res, ctx) => {
      return res(ctx.json(dummy.themeRecommends));
    }
  ),
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + teaApiUrls.RECOMMEND_PRODUCTS,
    (_req, res, ctx) => {
      return res(ctx.json(dummy.mainFilteringResults));
    }
  ),
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT,
    (_req, res, ctx) => {
      return res(ctx.json(dummy.cartProducts));
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT}:tea_id`,
    (req, res, ctx) => {
      // const { authToken } = req.cookies;
      return res(ctx.status(201));
    }
  ),
  rest.delete(
    `${process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT}:tea_id`,
    (req, res, ctx) => {
      const { tea_id } = req.params;
      dummy.cartProducts = dummy.cartProducts.filter(
        ({ id }) => tea_id !== id + ""
      );
      return res(ctx.status(204));
    }
  ),
  rest.patch(
    `${process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT}:tea_id`,
    (req: any, res, ctx) => {
      const { tea_id } = req.params;
      const { is_selected } = req.body;
      dummy.cartProducts = dummy.cartProducts.map((product) => {
        if (tea_id === product.id + "") product.is_selected = is_selected;
        return product;
      });
      return res(ctx.status(204));
    }
  ),
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + mypageApiUrls.MYPAGE_INFO,
    (_req, res, ctx) => {
      console.log("hi");
      return res(ctx.json(dummy.userInfo));
    }
  ),
];

const dummy = {
  promotionBanners: [
    { url: "/image/promotion1.png", href: "/" },
    { url: "/image/promotion2.png", href: "/" },
    { url: "/image/promotion3.png", href: "/" },
    { url: "/image/promotion1.png", href: "/" },
    { url: "/image/promotion2.png", href: "/" },
    { url: "/image/promotion3.png", href: "/" },
  ],
  themeRecommends: [
    {
      theme: "민초단을 위한",
      tea_info: [
        {
          id: 0,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈1",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 1,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈2",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 2,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈3",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
        {
          id: 3,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈4",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 4,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈5",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 5,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈6",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
        {
          id: 6,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈7",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 7,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈8",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 8,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈9",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
      ],
    },
    {
      theme: "민초단을 위한",
      tea_info: [
        {
          id: 0,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈1",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 1,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈2",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 2,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈3",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
        {
          id: 3,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈4",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 4,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈5",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 5,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈6",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
        {
          id: 6,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈7",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 7,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈8",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 8,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈9",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
      ],
    },
    {
      theme: "민초단을 위한",
      tea_info: [
        {
          id: 0,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈1",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 1,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈2",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 2,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈3",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
        {
          id: 3,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈4",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 4,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈5",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 5,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈6",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
        {
          id: 6,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈7",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods1.svg",
        },
        {
          id: 7,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈8",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods2.svg",
        },
        {
          id: 8,
          name: "카라멜 티메리카노",
          brand: "큐앤리브리즈9",
          type: "",
          flavor: "",
          caffeine: "",
          efficacies: "",
          price: 15000,
          image_url: "/image/goods3.svg",
        },
      ],
    },
  ],
  mainFilteringResults: [
    {
      id: 0,
      name: "비포선셋",
      brand: "알디프",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies:
        "블랜딩 티, 무카페인, 매운/민트, 시트러스, 안정/숙면, 다이어트/피부",
      price: 0,
      description:
        "빨간 루이보스에 각종 베리류를 듬뿍 블랜딩해 상큼하고 달콤한, 따뜻하고 편안한 오후같은 무카페인 티 빨간 루이보스에 각종 베리류를 듬뿍 블랜딩해",
      image_url: "/image/sample.svg",
    },
    {
      id: 1,
      name: "비포선셋",
      brand: "알디프",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "루이보스, 베리, 상큼",
      price: 0,
      description:
        "빨간 루이보스에 각종 베리류를 듬뿍 블랜딩해 상큼하고 달콤한, 따뜻하고 편안한 오후같은 무카페인 티",
      image_url: "/image/goods2.svg",
    },
    {
      id: 2,
      name: "비포선셋",
      brand: "알디프",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "루이보스, 베리, 상큼",
      price: 0,
      description:
        "빨간 루이보스에 각종 베리류를 듬뿍 블랜딩해 상큼하고 달콤한, 따뜻하고 편안한 오후같은 무카페인 티",
      image_url: "/image/goods3.svg",
    },
  ],
  shopFilterdTeas: [
    {
      id: 0,
      url: "/image/goods3.svg",
      brand: "알디프",
      name: "카라멜 티메리카노",
      price: 15000,
    },
    {
      id: 1,
      url: "/image/goods1.svg",
      brand: "알디프디프디프",
      name: "카라멜 티메리카노카노카노",
      price: 15000,
    },
    {
      id: 2,
      url: "/image/goods2.svg",
      brand: "알디프",
      name: "카라멜 티메리카노",
      price: 15000,
    },
    {
      id: 3,
      url: "/image/goods3.svg",
      brand: "알디프",
      name: "카라멜 티메리카노",
      price: 15000,
    },
    {
      id: 4,
      url: "/image/goods1.svg",
      brand: "알디프",
      name: "카라멜 티메리카노",
      price: 15000,
    },
    {
      id: 5,
      url: "/image/goods2.svg",
      brand: "알디프",
      name: "카라멜 티메리카노",
      price: 15000,
    },
  ],
  wishProducts: [
    {
      id: 0,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods1.svg",
    },
    {
      id: 1,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods2.svg",
    },
    {
      id: 2,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods3.svg",
    },
    {
      id: 3,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods1.svg",
    },
  ],
  cartProducts: [
    {
      id: 0,
      brand: "보향다원",
      name: "홍차아람",
      price: 25000,
      count: 1,
      image_url: "/image/goods1.svg",
      is_selected: true,
    },
    {
      id: 1,
      brand: "보향다원",
      name: "딸기 정원",
      price: 15000,
      count: 2,
      image_url: "/image/goods1.svg",
      is_selected: true,
    },
    {
      id: 2,
      brand: "투티거스 호랑이 다과점",
      name: "홍차아람",
      price: 15000,
      count: 1,
      image_url: "/image/goods1.svg",
      is_selected: false,
    },
  ],
  teaProductDetailInfo: {
    tea_image_urls: ["/image/dummy_product1.png"],
    brand_logo_url: "/image/dummy_tea_logo.png",
    brand_name: "티퍼블릭",
    tea_name: "카라멜 티메리카노",
    price: 15000,
    delivery_info: "3만원 이상 구매시 무료배송",
    tea_detail: "/image/dummy_product_detail.svg",
    reviews: [
      {
        id: "0",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "",
        content: "굿",
      },
      {
        id: "1",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "ppap",
        content: "굿",
      },
      {
        id: "2",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "",
        content: "굿",
      },
      {
        id: "3",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "",
        content: "굿",
      },
      {
        id: "4",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "",
        content: "굿",
      },
      {
        id: "5",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "",
        content: "굿",
      },
      {
        id: "6",
        title: "맛있어용",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        image_url: "",
        content: "굿",
      },
    ],
    questions: [
      {
        id: "0",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: false,
        content: "굿",
      },
      {
        id: "1",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: true,
        content: "굿",
      },
      {
        id: "2",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: false,
        content: "굿",
      },
      {
        id: "3",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: false,
        content: "굿",
      },
      {
        id: "4",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: false,
        content: "굿",
      },
      {
        id: "5",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: false,
        content: "굿",
      },
      {
        id: "6",
        title: "먹는방법",
        author: "teave123",
        create_date: "2019-07-04T13:33:03.969Z",
        isCompleted: false,
        content: "굿",
      },
    ],
  },
  userInfo: {
    name: "최수연",
    rank: "녹차",
    mileage: 500,
    couponCount: 2,
    orderCount: 41,
    deliveryCount: 2,
    reviewCount: 12,
  },
};
