import styled from "styled-components";
import Button from "./Button";
import { ReactNode } from "react";
import { color } from "../../styles/palette";

interface ModalProps {
  title: string;
  onCancel?: () => void;
  children: ReactNode;
}

const Modal = ({ title, onCancel, children }: ModalProps) => {
  return (
    <>
      <S.Overlay onClick={onCancel}></S.Overlay>
      <S.Container>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.ExitButton onClick={onCancel} />
        </S.Header>
        {children}
      </S.Container>
    </>
  );
};

export default Modal;

const S: any = {};

S.Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;

S.Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

S.Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1 solid ${color.gray800};
  padding: 2rem;
`;

S.Title = styled.h1`
  font-size: 1.5rem;
`;

S.ExitButton = styled.button`
  position: absolute;
  right: 4rem;
  background: url("/image/icon_exit.svg") no-repeat center/contain;
  width: 1.2rem;
  height: 1.2rem;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
`;

S.Button = styled(Button)`
  height: 3rem;
  width: 6rem;
  border-radius: 0.4rem;
`;

S.CancelButton = styled(S.Button)``;

S.OkButton = styled(S.Button)``;
