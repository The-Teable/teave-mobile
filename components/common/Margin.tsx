import styled, { css } from "styled-components";

type MarginProps = {
  size?: number;
  row?: boolean;
};

const Margin = styled.div<MarginProps>`
  height: calc(${(props) => props.size} * 1rem);
  min-height: calc(${(props) => props.size} * 1rem);
  ${(props) =>
    props.row &&
    css`
      height: 0;
      min-height: 0;
      width: calc(${props.size} * 1rem);
    `}
`;

export default Margin;
