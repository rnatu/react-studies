import { EffectCallback, DependencyList, useEffect, useRef, useLayoutEffect } from "react";

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

  const dependencyList = willDestroy ? deps : (destructor as DependencyList); //!

  const handler = useRef(effect);
  useLayoutEffect(() => {
    handler.current = effect;
  })

  useEffect(() => {
    handler.current();

    return () => {
      if (willDestroy) {
        destructor();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencyList]);
};
