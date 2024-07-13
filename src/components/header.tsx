import { Stack, Typography } from "@mui/material";
import WooviLogo from "../assets/woovi.svg";

interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  return (
    <Stack
      sx={{
        alignItems: "center",
      }}
    >
      <img
        src={WooviLogo}
        style={{ width: "8rem", height: "2.375rem", flexShrink: 0 }}
        alt="Woovi Logo"
      />
      <Typography
        variant="h1"
        color="text.primary"
        sx={{
          mt: 5,
          mb: 4,
          textAlign: "center",
          lineHeight: "normal",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
