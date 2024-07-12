import { Stack, Typography, useTheme } from "@mui/material";

export function IdentifierMessage() {
  const theme = useTheme();

  return (
    <Stack sx={{ mt: "2rem", mb: "4rem", alignItems: "center" }}>
      <Typography
        variant="h3"
        color={theme.palette.info.main}
        sx={{ fontWeight: 500 }}
      >
        Identificador
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800 }}
        color={theme.palette.text.primary}
      >
        2c1b951f356c4680b13ba1c9fc889c47
      </Typography>
    </Stack>
  );
}
