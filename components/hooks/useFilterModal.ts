import { useState } from "react";
import {
  FilterModalProps,
  HandleSelectFilterItemProps,
} from "../../types/filter";

const useFilterModal = (props: FilterModalProps) => {
  const { onCancel, selectedFilters, setSelectedFilters } = props;
  const [caffeine, setCaffeine] = useState(
    selectedFilters.filter(({ filterName }) => filterName === "caffeine")
  );

  const [teaType, setTeaType] = useState(
    selectedFilters.filter(({ filterName }) => filterName === "teaType")
  );

  const handleSelectItem = (props: HandleSelectFilterItemProps) => {
    const { itemName, filter, setFilter, filterName, isUnique } = props;

    if (itemName === "전체") {
      setFilter([]);
    } else if (isUnique) {
      setFilter([{ filterName, value: itemName }]);
    } else {
      setFilter(
        filter.some(({ value }) => itemName === value)
          ? filter.filter(({ value }) => itemName !== value)
          : filter.concat({ filterName, value: itemName })
      );
    }
  };

  const handleReset = () => {
    setCaffeine([]);
    setTeaType([]);
  };

  const handleFilterSubmit = () => {
    setSelectedFilters([...caffeine, ...teaType]);
    onCancel();
  };

  return {
    caffeine,
    setCaffeine,
    teaType,
    setTeaType,
    handleSelectItem,
    handleReset,
    handleFilterSubmit,
  };
};

export default useFilterModal;
