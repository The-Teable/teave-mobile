import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Margin from "../../components/common/Margin";
import TitleHeader from "../../components/common/TitleHeader";
import CenteredContainer from "../../components/layout/CenteredContainer";

const VERIFYWAY = {
  EMAIL: "EMAIL",
  PHONE: "PHONE"
};

const FindPage = () => {
  const router = useRouter();
  const { target } = router.query;
  const [choiceVerifyWay, setChoiceVerifyWay] = useState(VERIFYWAY.EMAIL);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (target === "id") {
      // find id api
    } else if (target === "pw") {
      // find pw api
    } else {
      throw Error(`wrong query string in find page : ${target}`);
    }
  };

  const onChangeVerifyWay = (e: ChangeEvent<HTMLInputElement>) => {
    setChoiceVerifyWay(e.target.value);
  };
  return (
    <>
      <TitleHeader title={target === "id" ? "아이디 찾기" : "비밀번호 찾기"} />
      <S.Form onSubmit={handleSubmit}>
        <Margin size={2} />
        <S.Fieldset onChange={onChangeVerifyWay}>
          <S.Legend>인증 방법</S.Legend>
          <Margin size={1} />
          <input
            name="way"
            id="wayEmail"
            value={VERIFYWAY.EMAIL}
            type="radio"
          />
          <label htmlFor="wayEmail">이메일로 인증하기</label>
          <input
            name="way"
            id="wayPhone"
            value={VERIFYWAY.PHONE}
            type="radio"
          />
          <label htmlFor="wayPhone">휴대폰번호로 인증하기</label>
        </S.Fieldset>
        <Margin size={3} />
        {target === "pw" ? (
          <>
            <S.Label htmlFor="userId">아이디</S.Label>
            <S.InputText id="userId" />
          </>
        ) : null}
        <S.Label htmlFor="name">이름</S.Label>
        <S.InputText id="name" />
        {choiceVerifyWay === VERIFYWAY.EMAIL ? (
          <>
            <S.Label htmlFor="email">이메일</S.Label>
            <S.InputText id="email" />
          </>
        ) : choiceVerifyWay === VERIFYWAY.PHONE ? (
          <>
            <S.Label htmlFor="phone">휴대폰 번호</S.Label>
            <S.InputText id="phone" type="tel" />
          </>
        ) : null}
        <Margin size={2} />
        <S.Button type={"submit"}>제출하기</S.Button>
      </S.Form>
    </>
  );
};

export default FindPage;

const S: any = {};

S.Form = styled(CenteredContainer).attrs({ as: "form" })`
  font-size: 1.2rem;
`;

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
