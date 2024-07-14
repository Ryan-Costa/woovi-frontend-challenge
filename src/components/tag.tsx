import { Box, Typography } from "@mui/material";

interface TagProps {
  text: string;
  textBold: string;
}

export function Tag({ text, textBold }: TagProps) {
  return (
    <Box
      sx={{
        pl: "1rem",
        py: 0.7,
        display: "flex",
        width: "100%",
        flex: 1,
        gap: "0.4rem",
        backgroundImage: "url('./src/assets/tag.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h3"
        color="common.white"
        sx={{
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {textBold}
      </Typography>
      <Typography
        variant="h3"
        color="common.white"
        sx={{
          fontWeight: 400,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
