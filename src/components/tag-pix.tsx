import { Box, Typography, useTheme } from "@mui/material";

export function TagPix({ text }: { text: string }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        px: "1.8rem",
        py: "0.3rem",
        display: "inline-block",
        transform: "translateY(-3.5rem)",
        borderRadius: 10,
        backgroundColor: theme.palette.text.disabled,
      }}
    >
      <Typography variant="h2" color="text.primary">
        {text}
      </Typography>
    </Box>
  );
}
