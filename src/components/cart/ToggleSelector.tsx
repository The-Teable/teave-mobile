import styled, { css } from "styled-components";

const ToggleSelector = ({
  id,
  labelName,
  isChecked = false,
}: {
  id: string;
  labelName?: string;
  isChecked?: boolean;
}) => {
  return (
    <>
      <S.OptionContainer>
        <S.Checkbox type="checkbox" id={id} checked={isChecked} />
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
