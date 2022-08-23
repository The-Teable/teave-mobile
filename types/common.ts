import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";

export type inputProps = {
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  ref: MutableRefObject<HTMLInputElement | undefined>;
};
