import { Stack, useTheme } from "@mui/material";

export function ImageQRCode() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        border: 2,
        borderColor: theme.palette.primary.main,
        borderRadius: ".5rem",
        padding: ".375rem",
        width: "22.5rem",
        height: "22.5rem",
      }}
    >
      <img src="/src/assets/qrcode.png" alt="qrcode" />
    </Stack>
  );
}
