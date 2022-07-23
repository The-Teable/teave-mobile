import Link from "next/link";
import { useContext } from "react";
import CenteredContainer from "../../components/layout/CenteredContainer";
import TabBar from "../../components/layout/TabBar";
import AuthContext from "../../context/AuthContext";

const MyPage = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <CenteredContainer>
        <h1>마이페이지</h1>
        {!user ? (
          <button onClick={logoutUser}>로그아웃</button>
        ) : (
          <Link href={"/mypage/login/?returnUrl=mypage"} passHref>
            <button>로그인</button>
          </Link>
        )}
      </CenteredContainer>
      <TabBar />
    </>
  );
};

export default MyPage;
