import styled from "styled-components";

const InputText = styled.input`
  border: 1px solid #b3b3b3;
  border-radius: 3rem;
  &:focus {
    border: 1px solid #000000;
  }
  box-sizing: border-box;
  height: 3.5rem;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
`;

export default InputText;
