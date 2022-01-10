import { useReducer } from "react";

type AnyObject = Record<string, unknown>;

type StateAction<S> =
  | Partial<Record<keyof S, S[keyof S]>>
  | import("react").ReducerWithoutAction<S>;

export const useRecordState = <T extends AnyObject>(initialState: T) => {
  return useReducer((prevState: T, action: StateAction<T>) => {
    if (typeof action === "function") {
      console.log('oi')
      return {
        ...prevState,
        ...action(prevState),
      };
    }

    const hasUpdate = Object.entries(action).some(
      ([key, value]) => prevState[key] !== value
    );

    return hasUpdate ? { ...prevState, ...action } : prevState;
  }, initialState);
};

// setState nas Classes é feito para objetos
// setState nos hooks é otimizado para primitivos

//* hooks -> Retorna um estado novo
// state -> { name: 'Luke', age: 27 }
// setState ({ name: 'Levir' })
//% state -> { name: 'Levir' }
// Solução...
// setState(prevState => (...prevState, { name: 'Levir'}))
//% state -> { name: 'Levir', age: 27 }

//* classes -> Faz um merge com a informação
// state -> { name: 'Luke', age: 27 }
// setState ({ name: 'Levir' })
//% state -> { name: 'Levir', age: 27 }
