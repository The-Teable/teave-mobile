import Link from "next/link";
import { useContext } from "react";
import TabBar from "../../components/layout/TabBar";
import AuthContext from "../../context/AuthContext";
import MyPageLayout from "../../components/layout/MypageLayout";

const MyPage = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <MyPageLayout title={"마이페이지"}>
        {user ? (
          <button onClick={logoutUser}>로그아웃</button>
        ) : (
          <Link href={"/mypage/login/?returnUrl=mypage"} passHref>
            <button>로그인</button>
          </Link>
        )}
      </MyPageLayout>

      <TabBar />
    </>
  );
};

export default MyPage;
