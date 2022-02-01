import { createContext } from "react";

type FormContext = {
  registerField: (name: string, ref: HTMLInputElement) => void;
};

export const FormContext = createContext({} as FormContext);
