import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../../common/Button";
import InputText from "../../common/InputText";
import Margin from "../../common/Margin";
import TitleHeader from "../../common/TitleHeader";
import CenteredContainer from "../../common/CenteredContainer";

const VERIFYWAY = {
  EMAIL: "EMAIL",
  PHONE: "PHONE",
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
      <StyledForm onSubmit={(e: any) => handleSubmit(e)}>
        <Margin size={2} />
        <StyledFieldset onChange={(e: any) => onChangeVerifyWay(e)}>
          <StyledLegend>인증 방법</StyledLegend>
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
        </StyledFieldset>
        <Margin size={3} />
        {target === "pw" ? (
          <>
            <StyledLabel htmlFor="userId">아이디</StyledLabel>
            <StyledInputText id="userId" />
          </>
        ) : null}
        <StyledLabel htmlFor="name">이름</StyledLabel>
        <StyledInputText id="name" />
        {choiceVerifyWay === VERIFYWAY.EMAIL ? (
          <>
            <StyledLabel htmlFor="email">이메일</StyledLabel>
            <StyledInputText id="email" />
          </>
        ) : choiceVerifyWay === VERIFYWAY.PHONE ? (
          <>
            <StyledLabel htmlFor="phone">휴대폰 번호</StyledLabel>
            <StyledInputText id="phone" type="tel" />
          </>
        ) : null}
        <Margin size={2} />
        <StyledButton type={"submit"}>제출하기</StyledButton>
      </StyledForm>
    </>
  );
};

export default FindPage;

const StyledForm = styled(CenteredContainer).attrs({ as: "form" })`
  font-size: 1.2rem;
`;

const StyledFieldset = styled.fieldset``;

const StyledLegend = styled.legend`
  font-size: 1.3rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin: 0 0 1rem;
`;

const StyledInputText = styled(InputText)`
  margin: 0 0 2rem;
`;

const StyledButton = styled(Button)``;
