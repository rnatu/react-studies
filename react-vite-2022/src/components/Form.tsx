import { ReactNode, useState } from "react";
import { FormContext } from "../contexts/FormContext";

interface FormProps {
  children: ReactNode;
}

type Inputs = Array<{
  name: string;
  ref: HTMLInputElement;
}>;

export function Form({ children }: FormProps) {
  const [inputs, setInputs] = useState<Inputs>([]);

  function registerField(name: string, ref: HTMLInputElement) {
    setInputs([...inputs, { name, ref }]);
  }

  return (
    <FormContext.Provider value={{ registerField }}>
      <form>{children}</form>
    </FormContext.Provider>
  );
}
