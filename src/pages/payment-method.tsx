import Stack from "@mui/material/Stack";

import { Header } from "../components/header";
import { SelectInstallments } from "../components/select-installments";

export default function PaymentMethod() {
  return (
    <Stack
      sx={{
        flex: 1,
        maxWidth: "26.5rem",
        width: "100%",
      }}
    >
      <Header title="João, como você quer pagar?" />

      <SelectInstallments />
    </Stack>
  );
}
