import { useEffect, useState } from "react";

type ResponseType = {
  name: string;
  id: number;
}[];

export function useDebouncedValue(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState<ResponseType>([]);

  useEffect(() => {
    if (value === "") {
      setDebouncedValue([]);
      return;
    }

    const handler = setTimeout(async () => {
      const data = await fetch(`http://localhost:3333/foods`);
      const response: ResponseType = await data.json();

      const results = response.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setDebouncedValue(results);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
