import React, { useState } from "react";

export interface ICounterContext {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const DEFAULT_COUNTER: ICounterContext = {
  counter: 0,
  setCounter: () => {},
};

const CounterContext = React.createContext<ICounterContext>(DEFAULT_COUNTER);

export const CounterContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [counter, setCounter] = useState<number>(0);

  const values: ICounterContext = React.useMemo(
    () => ({
      counter,
      setCounter,
    }),
    [counter, setCounter]
  );

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export default CounterContext;
