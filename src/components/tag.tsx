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
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        src="https://iili.io/dBYpQM7.png"
        alt="tag"
        style={{ position: "absolute", zIndex: 0, flex: 1 }}
      />
      <Box sx={{ display: "flex", width: "100%", gap: "0.4rem" }}>
        <Typography
          variant="h3"
          color="common.white"
          sx={{
            textAlign: "left",
            fontWeight: 600,
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {textBold}
        </Typography>
        <Typography
          variant="h3"
          color="common.white"
          sx={{
            textAlign: "left",
            fontWeight: 400,
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
