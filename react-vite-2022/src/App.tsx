import "./styles/global.css";

import { AppRoutes } from "./routes";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

function App() {
  // return <AppRoutes />;
  return (
    <Form>
      <Input name="name" />
      <Input name="email" />
      <Input name="password" />

      <button>Enviar</button>
    </Form>
  );
}

export default App;
