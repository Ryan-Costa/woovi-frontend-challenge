import { Stack } from "@mui/material";
import { Header } from "./components/header";

import { InputSelectAmount } from "./components/input-select-amount";

function App() {
  return (
    <Stack>
      <Header title={`João, quanto você deseja pagar?`} />

      <InputSelectAmount />
    </Stack>
  );
}

export default App;
