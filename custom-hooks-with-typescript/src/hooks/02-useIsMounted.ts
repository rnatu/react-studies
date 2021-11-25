import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('useEffect do hook useIsMounted')

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
};
