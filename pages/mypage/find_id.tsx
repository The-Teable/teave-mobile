import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Margin from "../../components/common/Margin";
import MyPageLayout from "../../components/layout/MyPageLayout";

enum verifyWay {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}

const FindIdPage = () => {
  const [choiceVerifyWay, setChoiceVerifyWay] = useState(verifyWay.EMAIL);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // find id api
  };

  const onChangeVerifyWay = (e: any) => {
    setChoiceVerifyWay(e.target.value);
  };
  return (
    <>
      <MyPageLayout
        title={"아이디 찾기"}
        backlink="/mypage/login"
        handleSubmit={handleSubmit}
      >
        <S.Fieldset onChange={onChangeVerifyWay}>
          <S.Legend>인증 방법</S.Legend>
          <Margin size={1} />
          <input
            name="way"
            id="wayEmail"
            value={verifyWay.EMAIL}
            type="radio"
          />
          <label htmlFor="wayEmail">이메일로 인증하기</label>
          <input
            name="way"
            id="wayPhone"
            value={verifyWay.PHONE}
            type="radio"
          />
          <label htmlFor="wayPhone">휴대폰번호로 인증하기</label>
        </S.Fieldset>
        <Margin size={3} />
        <S.Label htmlFor="name">이름</S.Label>
        <S.InputText id="name" />
        {choiceVerifyWay === verifyWay.EMAIL ? (
          <>
            <S.Label htmlFor="email">이메일</S.Label>
            <S.InputText id="email" />
          </>
        ) : choiceVerifyWay === verifyWay.PHONE ? (
          <>
            <S.Label htmlFor="phone">휴대폰 번호</S.Label>
            <S.InputText id="phone" type="tel" />
          </>
        ) : null}
        <Margin size={2} />
        <S.Button type={"submit"}>아이디 찾기</S.Button>
      </MyPageLayout>
    </>
  );
};

export default FindIdPage;

const S: any = {};

S.Fieldset = styled.fieldset``;

S.Legend = styled.legend`
  font-size: 1.3rem;
`;

S.Label = styled.label`
  display: inline-block;
  margin: 0 0 1rem;
`;

S.InputText = styled(InputText)`
  margin: 0 0 2rem;
`;

S.Button = styled(Button)``;
