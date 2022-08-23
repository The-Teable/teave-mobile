import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface Filter {
  filterName: string;
  value: string;
}

export type FilterModalProps = {
  title: string;
  onCancel: () => void;
  selectedFilters: Filter[];
  setSelectedFilters: Dispatch<SetStateAction<Filter[]>>;
};

export type HandleSelectFilterItemProps = {
  filterName: string;
  itemName: string;
  filter: Filter[];
  setFilter: Dispatch<SetStateAction<Filter[]>>;
  isUnique: boolean;
};
