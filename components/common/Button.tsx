import styled, { css } from "styled-components";
import { color } from "../../styles/palette";

const Button = styled.button<{ reverse?: boolean }>`
  border: 0px;
  height: 3.5rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 3rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
  }
  ${({ reverse }) =>
    reverse
      ? css`
          background-color: #ffffff;
          border: 1px solid ${color.teaveGreen};
          color: ${color.teaveGreen};
        `
      : css`
          background-color: ${color.teaveGreen};
          color: #ffffff;
        `}
`;

export default Button;
