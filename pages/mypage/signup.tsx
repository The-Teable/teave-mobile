import { useState } from "react";
import CenteredContainer from "../../components/layout/CenteredContainer";
import styled, { css } from "styled-components";
import InputText from "../../components/common/InputText";
import Button from "../../components/common/Button";
import Margin from "../../components/common/Margin";
import TitleHeader from "../../components/common/TitleHeader";
import useAuthQuery from "../../services/hooks/useAuthQurey";

const baseURL = process.env.NEXT_PUBLIC_LS_URL;

const SignupPage = () => {
  const [userId, setUserId] = useState("");
  const [isValidUserId, setIsValidUserId] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(true);
  const [userName, setUserName] = useState("");
  const [tel, setTel] = useState("");
  const [birth, setBirth] = useState<any>(null);
  const [gender, setGender] = useState("");
  const { signup } = useAuthQuery();
  const [duplicateIdCheck, setDuplicateIdCheck] = useState(true);

  const markRequired = <span style={{ color: "red" }}>*</span>;

  const onChangeUserId = (e: any) => {
    setUserId(e.target.value);
    setDuplicateIdCheck(false);
    setIsValidUserId(checkValidUserId(e.target.value));
  };

  const checkValidUserId = (userId: string) => {
    // 6자 이상의 영문 혹은 영문과 숫자를 조합
    return (
      /[A-Za-z]{6,}/.test(userId) ||
      (/[A-Za-z]+/.test(userId) && /[A-Za-z0-9]{6,}/.test(userId))
    );
  };

  const handleDuplicateIdCheck = async (e: any) => {
    e.preventDefault();
    if (!isValidUserId) {
      alert("올바른 아이디를 입력해주세요.");
      return;
    }
    const response = await fetch(`${baseURL}/signup/check/?user_id=${userId}`);
    const { is_duplicate: isDuplicate } = await response.json();
    setDuplicateIdCheck(!isDuplicate);
    isDuplicate
      ? alert("중복된 아이디입니다. 다른 아이디를 입력해주세요.")
      : alert("중복 확인 완료");
  };

  const checkValidPassword = (password: string) => {
    /* x 10자 이상 입력 
      영어/숫자/특수문자(공백을 제외한 다음의 특수문자 '"!@#$%^&*()-_+=~`)만 허용하며 2개 이상 조합
      동일한 숫자 3개 이상 연속 사용 불가
    */
    const specialSymbol = new RegExp(/['"!@#$%^&*()-_+=~]/);
    const alphabet = new RegExp(/[a-zA-Z]/);
    const digit = new RegExp(/[0-9]/);
    return (
      password.length >= 10 &&
      !/(\d)\1{2}/.test(password) &&
      ((specialSymbol.test(password) && alphabet.test(password)) ||
        (specialSymbol.test(password) && digit.test(password)) ||
        (alphabet.test(password) && digit.test(password)))
    );
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
    setIsValidPassword(checkValidPassword(e.target.value));
  };

  const onChagnePasswordCheck = (e: any) => {
    setPasswordCheck(e.target.value);
    setIsValidPasswordCheck(password === e.target.value);
  };

  const onChangeUserName = (e: any) => {
    setUserName(e.target.value);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!duplicateIdCheck || !isValidPassword || !isValidPasswordCheck) {
      alert("올바르지 않은 정보가 있습니다. 다시 확인해주세요.");
      return;
    }
    await signup({
      user_id: userId,
      password,
      name: userName,
      tel,
      birth,
      gender,
    });
  };

  return (
    <>
      <TitleHeader title={"회원가입"} backlink={"/mypage/login/"} />
      <S.Form onSubmit={handleSubmit}>
        <Margin size={2} />
        <S.Label htmlFor="userId">아이디{markRequired}</S.Label>
        <S.InputContainer>
          <S.InputCheckable
            placeholder={"아이디"}
            id={"userId"}
            onChange={onChangeUserId}
            invalid={!isValidUserId || !duplicateIdCheck}
            required
          />
          <Margin size={1} row />
          <S.CheckButton
            onClick={handleDuplicateIdCheck}
            reverse={!duplicateIdCheck}
          >
            중복확인
          </S.CheckButton>
        </S.InputContainer>
        {isValidUserId ? null : (
          <S.InvaildText>
            x 6자 이상의 영문 혹은 영문과 숫자를 조합
          </S.InvaildText>
        )}
        {duplicateIdCheck ? null : (
          <S.InvaildText>x 아이디 중복 확인</S.InvaildText>
        )}
        <S.Label htmlFor="password">비밀번호{markRequired}</S.Label>
        <S.InputText
          id={"password"}
          placeholder={"비밀번호를 입력해주세요"}
          type={"password"}
          onChange={onChangePassword}
          invalid={!isValidPassword}
          required
        />
        {isValidPassword ? null : (
          <>
            <S.InvaildText>x 10자 이상 입력</S.InvaildText>
            <S.InvaildText>
              x 영어/숫자/특수문자(공백 제외)만 허용하며 2개 이상 조합
            </S.InvaildText>
            <S.InvaildText>x 동일한 숫자 3개 이상 연속 사용 불가</S.InvaildText>
          </>
        )}
        <S.Label htmlFor="passwordCheck">비밀번호 확인{markRequired}</S.Label>
        <S.InputText
          id={"passwordCheck"}
          placeholder={"비밀번호를 입력해주세요"}
          type={"password"}
          value={passwordCheck}
          onChange={onChagnePasswordCheck}
          invalid={!isValidPasswordCheck}
          required
        />
        {isValidPasswordCheck ? null : (
          <S.InvaildText>x 동일한 비밀번호를 입력해주세요</S.InvaildText>
        )}
        <S.Label htmlFor="userName">이름{markRequired}</S.Label>
        <S.InputText
          id={"userName"}
          placeholder={"이름을 입력해주세요"}
          onChange={onChangeUserName}
          required
        />
        <S.Label htmlFor="tel">휴대폰{markRequired}</S.Label>
        <S.InputContainer>
          <S.InputCheckable
            placeholder={"숫자만 입력해주세요"}
            id={"tel"}
            onChange={onChangePhone}
            required
          />
          <Margin size={1} row />
          <S.CheckButton
            onClick={(e: any) => {
              e.preventDefault();
            }}
          >
            본인인증
          </S.CheckButton>
        </S.InputContainer>

        <S.Label htmlFor="birthday">생년월일</S.Label>
        <S.InputText
          id={"birthday"}
          placeholder={"YYYY / MM / DD"}
          type="date"
          onChange={onChangeBirth}
        />
        <Margin size={2} />
        <fieldset onChange={onChangeGender}>
          <legend>성별</legend>
          <S.GenderRadioContainer>
            <input name="gender" value={0} id="male" type="radio" />
            <S.GenderRadioOption htmlFor="male">남</S.GenderRadioOption>
          </S.GenderRadioContainer>
          <S.GenderRadioContainer>
            <input name="gender" value={1} id="female" type="radio" />
            <S.GenderRadioOption htmlFor="female">여</S.GenderRadioOption>
          </S.GenderRadioContainer>
          <S.GenderRadioContainer>
            <input name="gender" value="noselect" id="noselect" type="radio" />
            <S.GenderRadioOption htmlFor="noselect">
              선택안함
            </S.GenderRadioOption>
          </S.GenderRadioContainer>
        </fieldset>
        <Margin size={2} />
        <S.Button type={"submit"}>제출하기</S.Button>
      </S.Form>
    </>
  );
};

export default SignupPage;

const S: any = {};

S.Form = styled(CenteredContainer).attrs({ as: "form" })`
  font-size: 1.2rem;
`;

S.InputContainer = styled.div`
  display: flex;
`;

S.InvaildText = styled.p`
  color: red;
  margin: 1rem 0;
`;

S.Label = styled.label`
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

S.InputText = styled(InputText)<{ invalid: boolean }>`
  ${({ invalid }: { invalid: boolean }) =>
    !invalid
      ? null
      : css`
          border: 1px red solid;
        `}
`;

S.Button = styled(Button)``;

S.InputCheckable = styled(S.InputText)`
  flex: 3;
`;

S.CheckButton = styled(S.Button)`
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
