import styled from "styled-components";
import { ReactNode } from "react";
import { color } from "../../styles/palette";

interface ModalProps {
  title: string;
  onCancel: () => void;
  children: ReactNode;
}

const Modal = ({ title, onCancel, children }: ModalProps) => {
  return (
    <>
      <StyledOverlay onClick={onCancel}></StyledOverlay>
      <StyledContainer>
        <StyledHeader>
          <StyledTitle>{title}</StyledTitle>
          <StyledExitButton onClick={onCancel} />
        </StyledHeader>
        {children}
      </StyledContainer>
    </>
  );
};

export default Modal;

const S: any = {};

const StyledOverlay = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
`;

const StyledContainer = styled.div`
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const StyledHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1 solid ${color.gray800};
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
`;

const StyledExitButton = styled.button`
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
