import { useEffect, useRef, useState } from "react";
import { RendersCount } from "./components/RendersCount";

function App() {
  const meuInput = useRef<HTMLInputElement>(null);
  const [state, setState] = useState(0);
  const refValue = useRef(0);
  const buttonAlertRef = useRef<HTMLButtonElement>(null);

  //manipulando o input usando o efeito focus quando o componente é carregado
  useEffect(() => {
    meuInput.current?.focus();
  }, []);

  return (
    <div className="App">
      <RendersCount />
      <p>State value: {String(state)}</p>

      <button onClick={() => setState((oldState) => (oldState += 1))}>
        Update state to render
      </button>

      <p>Ref value: {refValue.current}</p>
      <button
        onClick={() => {
          refValue.current += 1;
          console.log(refValue.current);
        }}
      >
        Update ref value
      </button> <span><em>console.log for more</em></span>
      

      <p>Input</p>
      <input type="text" ref={meuInput} />
      <button
        onClick={() => {
          console.log(`Input value: ${meuInput.current?.value}`);
        }}
      >
        Submit to console.log using useRef
      </button>

      <br />

      <p>Triggering another button using useRef</p>
      <button onClick={() => alert("Este é um alerta")} ref={buttonAlertRef}>
        Alert
      </button>
      <button
        onClick={() => {
          buttonAlertRef.current?.click();
        }}
      >
        Trigger to alert button
      </button>
    </div>
  );
}

export default App;
