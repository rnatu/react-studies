import { useEffect, useRef, useState } from "react";
import { RendersCount } from "./components/RendersCount";


function App() {
  const [rendersCount, setRendersCount] = useState(0)



  const meuInput = useRef<HTMLInputElement>(null);
  const [state, setState] = useState(0);
  const refValue = useRef(0);

  //manipulando o input
  useEffect(() => {
    meuInput.current?.focus();
  }, []);

  return (
    <div className="App">
      <RendersCount />
      <p>Input</p>
      <input type="text" ref={meuInput} />

      <p>State value: {String(state)}</p>

      <button onClick={() => setState((oldState) => (oldState += 1))}>
        Update state to render
      </button>

      <p>Ref value: {refValue.current}</p>
      <button onClick={() => (refValue.current += 1)}>Update ref value</button>
    </div>
  );
}

export default App;
