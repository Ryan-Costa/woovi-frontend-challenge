import { Box, Typography } from "@mui/material";

interface TagProps {
  text: string;
  textBold: string;
}

export function Tag({ text, textBold }: TagProps) {
  return (
    <Box
      sx={{
        width: "100%",
        pl: "0.5rem",
        py: 0.7,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        src="https://iili.io/dBYpQM7.png"
        alt="tag"
        style={{
          height: "32px",
          position: "absolute",
          zIndex: 0,
          flex: 1,
          width: "100%",
          left: 0,
        }}
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
            width: "15rem",
            mr: "1.875rem",
            textAlign: "left",
            fontWeight: 400,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            zIndex: 1,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
