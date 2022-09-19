import { useState, ChangeEvent, useRef } from "react";

const useInput = (initailValue?: string) => {
  const [value, setValue] = useState(initailValue);
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === undefined) return;
    setValue(e.target.value);
  };

  const reset = () => setValue("");

  return { value, setValue, onChange, reset, ref };
};

export default useInput;
