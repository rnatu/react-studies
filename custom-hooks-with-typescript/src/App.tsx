import { useEffect } from "react";
import { ToggleButton } from "./components/ToggleButton";
import { useNumber } from "./hooks/01-useNumber";
import { useIsMounted } from "./hooks/02-useIsMounted";
import { useToggle } from "./hooks/03-useToggle";

function App() {
  const [count, setCount] = useNumber(1);
  const isMounted = useIsMounted();
  const [isActive, toggleIsActive] = useToggle(false);

  console.log("toggle isActive " + isActive);

  useEffect(() => {
    if (isMounted) {
      console.log("component montado");
    }
  }, [isMounted]);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => setCount((oldState) => oldState + 1)}
      >
        count is {count}
      </button>

      <br />
      <br />

      <ToggleButton toggleIsActive={toggleIsActive} />
    </div>
  );
}

export default App;
