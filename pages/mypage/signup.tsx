import { useContext, useEffect, useRef, useState } from "react";
import CenteredContainer from "../../components/layout/CenteredContainer";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";
import InputText from "../../components/common/InputText";
import Button from "../../components/common/Button";
import Margin from "../../components/common/Margin";
import DaumPostcode from "react-daum-postcode";
import Link from "next/link";
import Modal from "../../components/common/Modal";

const baseURL = process.env.NEXT_PUBLIC_LS_URL;

const SignupPage = () => {
  const [userId, setUserId] = useState("");
  // const [isValidUserId, setIsValidUserId] = useState(false);
  const [password, setPassword] = useState("");
  // const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState<any>(null);
  const [gender, setGender] = useState("");
  const { registerUser } = useContext(AuthContext);
  const [duplicateIdCheck, setDuplicateIdCheck] = useState(false);
  const [openPostcode, setOpenPostcode] = useState(false);

  const markRequired = <span style={{ color: "red" }}>*</span>;

  const onChangeUserId = (e: any) => {
    setUserId(e.target.value);
    setDuplicateIdCheck(false);
  };

  const handleDuplicateIdCheck = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/signup/check?user_id=${userId}`);
    const { is_duplicate: isDuplicate } = await response.json();
    setDuplicateIdCheck(!isDuplicate);
    isDuplicate
      ? alert("중복된 아이디입니다. 다른 아이디를 입력해주세요.")
      : alert("중복 확인 완료");
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
    setPasswordCheck("");
  };

  const onChagnePasswordCheck = (e: any) => {
    setPasswordCheck(e.target.value);
    setIsValidPasswordCheck(password === e.target.value);
  };

  const onChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setTel(e.target.value);
  };
  const onChangeBirth = (e: any) => {
    setBirth(e.target.value);
  };

  const onChangeGender = (e: any) => {
    setGender(e.target.value);
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

    // id, pw 유효성 검사 체크 필요

    await registerUser({
      user_id: userId,
      password,
      name: userName,
      email,
      tel,
      address,
      birth,
      gender,
    });
  };

  return (
    <>
      <Margin size={4} />
      <S.Container>
        <S.Header>
          <Link href={"/mypage/login"} passHref>
            <S.GoBackButton />
          </Link>
          <S.Title>회원가입</S.Title>
        </S.Header>
        <Margin size={2} />
        <form onSubmit={handleSubmit}>
          <S.Label htmlFor="userId">아이디{markRequired}</S.Label>
          <S.IdContainer>
            <S.InputId
              placeholder={"아이디"}
              id={"userId"}
              onChange={onChangeUserId}
              required
            />
            <Margin size={1} row />
            <S.ButtonIdCheck
              onClick={handleDuplicateIdCheck}
              reverse={!duplicateIdCheck}
            >
              중복확인
            </S.ButtonIdCheck>
          </S.IdContainer>
          <S.Label htmlFor="password">비밀번호{markRequired}</S.Label>
          <S.InputText
            id={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            type={"password"}
            onChange={onChangePassword}
            required
          />
          <S.Label htmlFor="passwordCheck">비밀번호 확인{markRequired}</S.Label>
          <S.InputText
            id={"passwordCheck"}
            placeholder={"비밀번호를 입력해주세요"}
            type={"password"}
            value={passwordCheck}
            onChange={onChagnePasswordCheck}
            required
          />
          {}
          <S.Label htmlFor="userName">이름{markRequired}</S.Label>
          <S.InputText
            id={"userName"}
            placeholder={"이름을 입력해주세요"}
            onChange={onChangeUserName}
            required
          />
          <S.Label htmlFor="email">이메일{markRequired}</S.Label>
          <S.InputText
            id={"email"}
            placeholder={"이메일을 입력해주세요"}
            onChange={onChangeEmail}
            required
          />
          <S.Label htmlFor="tel">휴대폰{markRequired}</S.Label>
          <S.InputText
            id={"tel"}
            placeholder={"숫자만 입력해주세요"}
            type={"tel"}
            onChange={onChangePhone}
          />
          <S.Label htmlFor="address">주소{markRequired}</S.Label>
          <S.InputText
            id={"address"}
            placeholder={"도로명, 지번, 건물명 검색"}
            onClick={handleSearchAddress}
            value={address}
          />
          {openPostcode && (
            <Modal title={"주소 검색"} onCancel={() => setOpenPostcode(false)}>
              <DaumPostcode
                onComplete={handleSelectAddress}
                autoClose={false}
                defaultQuery={"논현로 66길"}
              />
            </Modal>
          )}
          <S.Label htmlFor="birthday">생년월일</S.Label>
          <S.InputText
            id={"birthday"}
            placeholder={"YYYY / MM / DD"}
            type="date"
            onChange={onChangeBirth}
          />
          <fieldset onChange={onChangeGender}>
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
    </>
  );
};

export default SignupPage;

const S: any = {};

S.CenteredContainer = styled(CenteredContainer)``;

S.Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 2rem;
  margin: 0 auto;
  font-size: 1.2rem;
`;
S.Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
`;

S.GoBackButton = styled.button`
  position: absolute;
  left: 2rem;
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
