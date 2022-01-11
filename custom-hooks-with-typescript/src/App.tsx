import { useEffect, useState } from "react";
import { ToggleButton } from "./components/ToggleButton";
import { useNumber } from "./hooks/01-useNumber";
import { useIsMounted } from "./hooks/02-useIsMounted";
import { useToggle } from "./hooks/03-useToggle";
import { useDebouncedValue } from "./hooks/04-useDebouncedValue";
import { usePreviousValue } from "./hooks/05-usePreviousValue";
import { useRecordState } from "./hooks/06-useRecordState";
import { useAsyncEffect } from "./hooks/07-useAsyncEffect";
import { useEventListener } from "./hooks/08-useEventListener";

type Payload = {
  name: string;
  age?: number;
  state: string;
};

function App() {
  // 01 - useNumber
  const [count, setCount] = useNumber(1);

  // 02 - useIsMounted
  const isMounted = useIsMounted();

  // 03 - useToggle
  const [isActive, toggleIsActive] = useToggle(false);
  console.log("toggle isActive " + isActive);

  // 04 - useDebouncedValue
  const [search, setSearch] = useState("");
  const debouncedValue = useDebouncedValue(search, 600);

  // 05 - usePreviousValue
  const previousValue = usePreviousValue(21);

  // 06 useRecordState
  const [payload, setPayload] = useRecordState<Payload>({
    name: "",
    age: undefined,
    state: "",
  });
  console.log(payload);

  // 07 - useAsyncEffect
  useAsyncEffect(
    async () => {
      const codersClub = await new Promise((res) => res("codersClub"));

      console.log(codersClub);
    },
    () => {
      console.log("Desmontado");
    },
    []
  );

  // 08 - useEventListener
  useEventListener(
    "keydown",
    (e) => {
      if (e.key === "Enter") {
        console.log("Enter was pressed");
      }
    },
    {
      target: window,
    }
  );

  useEffect(() => {
    if (isMounted) {
      console.log("useEffect do app.tsx component montado");
    }
  }, [isMounted]);

  return (
    <div className="App">
      {/* useNumber */}
      <button
        type="button"
        onClick={() => setCount((oldState) => oldState + 1)}
      >
        count is {count}
      </button>
      <br />
      <br />
      {/* useToggle */}
      <ToggleButton toggleIsActive={toggleIsActive} />
      <br />
      <br />
      {/* useDebouncedValue */}
      <span>Search </span>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />{" "}
      <button>Buscar</button>
      <br />
      <div>
        {debouncedValue.map((item) => (
          <p key={item.id}>
            <a href="/">{item.name}</a>
          </p>
        ))}
      </div>
      <br />
      <br />
      {/* usePreviousValue */}
      <p>
        PreviousValue is <strong>{previousValue}</strong>
      </p>
      {/* useRecordState */}
      <button
        type="button"
        onClick={() => setPayload({ name: "levir", age: 22 })}
      >
        setPayload
      </button>
      <button
        type="button"
        onClick={() =>
          setPayload((prevState) => ({
            ...prevState,
            name: "Renato",
            age: 30,
            state: prevState.name === "Levir" ? "Manaus" : "São Paulo",
          }))
        }
      >
        setPayload 2
      </button>
    </div>
  );
}

export default App;
