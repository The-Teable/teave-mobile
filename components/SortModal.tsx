import Modal from "./common/Modal";
import styled, { css } from "styled-components";
import { color } from "../styles/palette";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export const SORT_CRITERIA = {
  RECENT: "최신순",
  SAIL: "판매순",
  LOW_PRICE: "낮은 가격순",
  HIGH_PRICE: "높은 가격순",
  REVIEW: "후기순",
};
export type SORT_TYPE = typeof SORT_CRITERIA[keyof typeof SORT_CRITERIA];

interface SortModalProps {
  title: string;
  onCancel: () => void;
  sortCriteria: string;
  setSortCriteria: Dispatch<SetStateAction<SORT_TYPE>>;
}

const SortModal = ({
  title,
  onCancel,
  sortCriteria,
  setSortCriteria,
}: SortModalProps) => {
  const handleSelectItem = (item: SORT_TYPE) => {
    setSortCriteria(item);
    onCancel();
  };

  return (
    <Modal title={title} onCancel={onCancel}>
      <S.Container>
        {Object.values(SORT_CRITERIA).map((e, i) => (
          <S.Item
            key={i}
            onClick={() => handleSelectItem(e)}
            selected={e === sortCriteria}
          >
            {e}{" "}
            {e === sortCriteria ? (
              <Image
                src="/image/icon_check.svg"
                width={10}
                height={10}
                alt={"check icon"}
              />
            ) : null}
          </S.Item>
        ))}
      </S.Container>
    </Modal>
  );
};

export default SortModal;

const S: any = {};

S.Container = styled.div`
  width: 36rem;
`;

S.Item = styled.div<{ selected: boolean }>`
  font-size: 1.4rem;
  padding: 1.5rem 2rem;
  border-bottom: solid 1px ${color.gray300};
  ${({ selected }: { selected: boolean }) =>
    !selected
      ? css`
          color: ${color.gray400};
        `
      : null}
  &:hover {
    cursor: pointer;
  }
`;
