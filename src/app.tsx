import { Stack } from "@mui/material";
import { Header } from "./components/header";

import { InputSelectAmount } from "./components/input-select-amount";

function App() {
  return (
    <Stack>
      <Header
        title={{
          key: "header_root_page",
          options: {
            amount: null,
          },
        }}
      />

      <InputSelectAmount />
    </Stack>
  );
}

export default App;
