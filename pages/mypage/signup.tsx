import { useContext, useEffect, useState } from "react";
import CenteredContainer from "../../components/layout/CenteredContainer";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";
import InputText from "../../components/common/InputText";
import Button from "../../components/common/Button";
import Margin from "../../components/common/Margin";
import DaumPostcode from "react-daum-postcode";
import Link from "next/link";

const SignupPage = () => {
  const [userid, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [address, setAddress] = useState("");
  const { registerUser } = useContext(AuthContext);
  const [duplicateIdCheck, setDuplicateIdCheck] = useState(false);
  const [openPostcode, setOpenPostcode] = useState(false);

  const handleDuplicateIdCheck = (e: any) => {
    // 아이디 중복확인 API 만들기
    e.preventDefault();

    alert("중복확인");
    setDuplicateIdCheck(true);
  };

  const handleSearchAddress = (e: any) => {
    e.preventDefault();
    setOpenPostcode(true);
  };

  const handleSelectAddress = ({ address }: any) => {
    setAddress(address);
    setOpenPostcode(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    registerUser(userid, password);
  };

  useEffect(() => {
    setDuplicateIdCheck(false);
  }, [userid]);
  return (
    <>
      <CenteredContainer>
        <Margin size={4} />
        <S.Container>
          <S.Header>
            <Link href={"/mypage/login"} passHref>
              <S.GoBackButton />
            </Link>
            <S.Title>회원가입</S.Title>
          </S.Header>
          <Margin size={1.5} />
          <form onSubmit={handleSubmit}>
            <S.Label htmlFor="userid">
              아이디<span style={{ color: "red" }}>*</span>
            </S.Label>
            <S.IdContainer>
              <S.InputId id={"userid"} placeholder={"아이디"} required />
              <Margin size={1} row />
              <S.ButtonIdCheck
                onClick={handleDuplicateIdCheck}
                reverse={!duplicateIdCheck}
              >
                중복확인
              </S.ButtonIdCheck>
            </S.IdContainer>
            <S.Label htmlFor="password">
              비밀번호<span style={{ color: "red" }}>*</span>
            </S.Label>
            <S.InputText
              id={"password"}
              placeholder={"비밀번호를 입력해주세요"}
              type={"password"}
              required
            />
            <S.Label htmlFor="passwordCheck">
              비밀번호 확인<span style={{ color: "red" }}>*</span>
            </S.Label>
            <S.InputText
              id={"passwordCheck"}
              placeholder={"비밀번호를 입력해주세요"}
              type={"password"}
              required
            />
            <S.Label htmlFor="username">이름</S.Label>
            <S.InputText id={"username"} placeholder={"이름을 입력해주세요"} />
            <S.Label htmlFor="email">이메일</S.Label>
            <S.InputText id={"email"} placeholder={"이메일을 입력해주세요"} />
            <S.Label htmlFor="phone">휴대폰</S.Label>
            <S.InputText
              id={"phone"}
              placeholder={"숫자만 입력해주세요"}
              type={"tel"}
            />
            <S.Label htmlFor="address">주소</S.Label>
            <S.InputText
              id={"address"}
              placeholder={"도로명, 지번, 건물명 검색"}
              onClick={handleSearchAddress}
              value={address}
            />
            {openPostcode ? (
              <DaumPostcode
                onComplete={handleSelectAddress}
                autoClose={false}
                defaultQuery={"논현로 66길"}
              />
            ) : null}
            <S.Label htmlFor="birthday">생년월일</S.Label>
            <S.InputText
              id={"birthday"}
              placeholder={"YYYY / MM / DD"}
              type="date"
            />
            <fieldset>
              <legend>성별</legend>
              <S.GenderRadioContainer>
                <input name="gender" value="male" id="male" type="radio" />
                <S.GenderRadioOption htmlFor="male">남</S.GenderRadioOption>
              </S.GenderRadioContainer>
              <S.GenderRadioContainer>
                <input name="gender" value="female" id="female" type="radio" />
                <S.GenderRadioOption htmlFor="female">여</S.GenderRadioOption>
              </S.GenderRadioContainer>
              <S.GenderRadioContainer>
                <input
                  name="gender"
                  value="noselect"
                  id="noselect"
                  type="radio"
                />
                <S.GenderRadioOption htmlFor="noselect">
                  선택안함
                </S.GenderRadioOption>
              </S.GenderRadioContainer>
            </fieldset>
            <Margin size={2} />
            <S.Button>제출하기</S.Button>
          </form>
        </S.Container>
      </CenteredContainer>
    </>
  );
};

export default SignupPage;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 2rem;
  margin: 0 auto;
  font-size: 1.2rem;
`;
S.Header = styled.div`
  display: flex;
  height: 2.5rem;
  padding: 0 0 1.5rem;
  border-bottom: 1px solid #eeeeee;
`;

S.GoBackButton = styled.button`
  border: 0px;
  background: url("/image/icon_go_back.svg") no-repeat center/contain;
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Title = styled.h1`
  margin: 0 auto;
  line-height: 2.5rem;
  font-size: 1.4rem;
`;

S.IdContainer = styled.div`
  display: flex;
`;

S.Label = styled.label`
  display: inline-block;
  margin: 0 0 1rem;
`;

S.InputText = styled(InputText)`
  margin: 0 0 2rem;
`;

S.Button = styled(Button)``;

S.InputId = styled(S.InputText)`
  flex: 3;
`;

S.ButtonIdCheck = styled(S.Button)`
  flex: 1;
`;

S.GenderRadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0;
`;

S.GenderRadioOption = styled(S.Label)`
  margin: 0;
`;
