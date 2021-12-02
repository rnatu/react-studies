import { useReducer } from "react";

export const useToggle = (initialValue: boolean) =>
  useReducer((prevState: boolean) => !prevState, initialValue);

// export const useToggle = (initialValue: boolean) => {
//   const [state, setState] = useState(initialValue);

//   function toggleActive() {
//     setState(!state);
//   }

//   // const toggleActive = useCallback(() => {
//   //  return setState(!state);
//   // }, [state])

//   return [state, toggleActive] as const;
// };
