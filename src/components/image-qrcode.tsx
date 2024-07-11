import { Stack, useTheme } from "@mui/material";

export function ImageQRCode() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        border: 2,
        borderColor: theme.palette.primary.main,
        borderRadius: ".8rem",
        padding: ".5rem",
        width: "36rem",
        height: "36rem",
      }}
    >
      <img src="/src/assets/qrcode.png" alt="qrcode" />
    </Stack>
  );
}
