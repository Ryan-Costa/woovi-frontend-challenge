import { Stack } from "@mui/material";
import { MessageSecurityPayment } from "./message-security-payment";
import { Outlet } from "react-router-dom";

export function Container() {
  return (
    <Stack
      sx={{
        py: 4.5,
        px: 2,
      }}
    >
      <Outlet />
      <MessageSecurityPayment />
    </Stack>
  );
}
