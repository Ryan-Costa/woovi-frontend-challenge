import { Stack } from "@mui/material";
import { MessageSecurityPayment } from "./message-security-payment";

interface ContainerProps {
  children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <Stack
      sx={{
        py: 4.5,
        px: 2,
      }}
    >
      {children}
      <MessageSecurityPayment />
    </Stack>
  );
}
