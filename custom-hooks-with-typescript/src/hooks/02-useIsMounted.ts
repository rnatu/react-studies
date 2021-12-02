import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('useEffect do hook useIsMounted')

    return () => {
      console.log('componente desmontado')
      setIsMounted(false);
    };
  }, []);

  return isMounted;
};
