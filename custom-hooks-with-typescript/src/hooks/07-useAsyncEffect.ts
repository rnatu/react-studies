import { cleanup } from "@testing-library/react";
import { EffectCallback, DependencyList, useEffect } from "react";

type Destructor = ReturnType<EffectCallback>;

type UseAsyncEffectHook = {
  //function(() => {}, () => {}, [])
  (
    effect: () => Promise<void>,
    destructor?: Destructor,
    deps?: DependencyList
  ): void;
  //function(() => {}, [])
  (effect: () => Promise<void>, deps?: DependencyList): void;
};

export const useAsyncEffect: UseAsyncEffectHook = (
  effect: () => Promise<void>,
  destructor?: Destructor | DependencyList,
  deps?: DependencyList
) => {
  const willDestroy = typeof destructor === "function";

  const dependencyList = willDestroy ? deps : (destructor as DependencyList) //!

  useEffect(() => {
    effect()

    return () => {
      if(willDestroy) {
        destructor();
      }
    }
  }, dependencyList)

};
