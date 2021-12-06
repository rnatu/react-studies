import { useEffect, useState } from "react";
import { ToggleButton } from "./components/ToggleButton";
import { useNumber } from "./hooks/01-useNumber";
import { useIsMounted } from "./hooks/02-useIsMounted";
import { useToggle } from "./hooks/03-useToggle";
import { useDebouncedValue } from "./hooks/04-useDebouncedValue";
import { usePreviousValue } from "./hooks/05-usePreviousValue";

function App() {
  const [count, setCount] = useNumber(1);
  const isMounted = useIsMounted();
  const [isActive, toggleIsActive] = useToggle(false);
  console.log("toggle isActive " + isActive);
  const [search, setSearch] = useState("");
  const debouncedValue = useDebouncedValue(search, 600);
  const previousValue = usePreviousValue('Renato Xavier');

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
    </div>
  );
}

export default App;
