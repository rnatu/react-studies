import { useContext, useEffect, useRef } from "react";
import { FormContext } from "../contexts/FormContext";

interface InputProps {
  name: string;
}

export function Input({ name }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField } = useContext(FormContext);

  useEffect(() => {
    if (inputRef.current) {
      registerField(name, inputRef.current);
    }
  }, []);

  return <input type={name} ref={inputRef} />;
}
