import { useEffect } from "react";
import { useNumber } from "./hooks/01-useNumber";
import { useIsMounted } from "./hooks/02-useIsMounted";

function App() {
  const [count, setCount] = useNumber(1);
  const isMounted = useIsMounted();

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
    </div>
  );
}

export default App;
