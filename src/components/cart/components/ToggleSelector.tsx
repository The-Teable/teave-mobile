import { useState } from "react";
import styled, { css } from "styled-components";
import useCartQuery from "../../../services/hooks/useCartQuery";

const ToggleSelector = ({
  id,
  labelName,
  isChecked = false,
  isAll = false,
}: {
  id: string;
  labelName?: string;
  isChecked?: boolean;
  isAll?: boolean;
}) => {
  const { selectProduct } = useCartQuery();
  const [toggle, setToggle] = useState(isChecked);
  const handdleToggle = () => {
    setToggle(!toggle);
    if (isAll) {
      /**
       * TODO: 전체선택시 어떤 API 날릴지 협의
       */
    } else selectProduct({ teaId: parseInt(id), isSelected: isChecked });
  };
  return (
    <>
      <S.OptionContainer>
        <S.Checkbox
          type="checkbox"
          id={id}
          checked={toggle}
          onChange={handdleToggle}
        />
        <S.CustomCheckbox htmlFor={id} labelName={labelName}>
          {labelName}
        </S.CustomCheckbox>
      </S.OptionContainer>
    </>
  );
};

export default ToggleSelector;

const S: any = {};

S.OptionContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 1.5rem;
`;

S.Checkbox = styled.input`
  display: none;
  &:checked + label {
    background: url("/image/icon_toggle_true.svg") no-repeat left/2rem 2rem;
  }
`;

S.CustomCheckbox = styled.label<{ labelName?: string }>`
  user-select: none;
  cursor: pointer;
  height: 2rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-weight: 500;
  background: url("/image/icon_toggle_false.svg") no-repeat left/2rem 2rem;
  ${({ labelName }) => {
    return labelName
      ? css`
          padding-left: 3rem;
          width: ${labelName.length * 1.2}rem;
        `
      : css`
          width: 2rem;
        `;
  }}
`;
