import styled, { css } from "styled-components";
import Button from "./Button";
import Margin from "./Margin";
import { ReactNode } from "react";

interface ModalProps {
  visible?: boolean;
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  noFooter?: boolean;
  children: ReactNode;
}

const Modal = ({
  visible = true,
  title,
  onOk,
  onCancel,
  noFooter = false,
  children
}: ModalProps) => {
  return (
    <S.Overlay visible={visible}>
      <S.Container>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.ExitButton onClick={onCancel} />
        </S.Header>
        {children}
        <S.Footer noFooter={noFooter}>
          <S.CancelButton onClick={onCancel} reverse>
            취소
          </S.CancelButton>
          <Margin row size={0.5} />
          <S.OkButton onClick={onOk}>확인</S.OkButton>
        </S.Footer>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;

const S: any = {};

S.Overlay = styled.div<{ visible: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  ${({ visible }: { visible: boolean }) =>
    visible
      ? null
      : css`
          display: none;
        `}
`;

S.Container = styled.div`
  background-color: #ffffff;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1 solid #424242;
  padding: 2rem;
`;

S.Title = styled.h1`
  font-size: 1.2rem;
`;

S.ExitButton = styled.button`
  background: url("/image/icon_exit.svg") no-repeat center/contain;
  width: 1.2rem;
  height: 1.2rem;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
`;

S.Footer = styled.div<{ noFooter: boolean }>`
  display: flex;
  justify-content: end;
  align-items: center;
  border-top: 1 solid #424242;
  padding: 2rem;
  ${({ noFooter }: { noFooter: boolean }) =>
    noFooter
      ? css`
          display: none;
        `
      : null}
`;

S.Button = styled(Button)`
  height: 3rem;
  width: 6rem;
  border-radius: 0.4rem;
`;

S.CancelButton = styled(S.Button)``;

S.OkButton = styled(S.Button)``;
