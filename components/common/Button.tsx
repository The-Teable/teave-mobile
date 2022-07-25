import styled, { css } from "styled-components";

const Button = styled.button<{ reverse: boolean }>`
  border: 0px;
  height: 3.5rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 3rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
  }
  ${({ reverse }: { reverse: boolean }) =>
    reverse
      ? css`
          background-color: #ffffff;
          border: 1px solid #104315;
          color: #104315;
        `
      : css`
          background-color: #104315;
          color: #ffffff;
        `}
`;

export default Button;
