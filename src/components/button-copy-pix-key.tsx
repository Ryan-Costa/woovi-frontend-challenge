import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useNavigate } from "react-router-dom";

export function ButtonCopyPixKey() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  function handleCopyy() {
    const valueCopy = "Me contrata 💕";
    navigator.clipboard.writeText(valueCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    setTimeout(() => navigate("/credit"), 2500);
  }

  return (
    <Box sx={{ mt: "1.25rem" }}>
      <Button
        variant="contained"
        onClick={handleCopyy}
        sx={{
          backgroundColor: `${theme.palette.secondary.main} !important`,
          color: theme.palette.common.white,
          fontSize: "1rem",
          gap: "0.625rem",
          textTransform: "none",
          width: "18rem",
          display: "flex",
          justifyContent: "center",
          ...(copied && {
            backgroundColor: theme.palette.primary.main,
          }),
        }}
      >
        {copied ? (
          "Texto Copiado!"
        ) : (
          <>
            Clique para copiar o QR CODE
            <FileCopyIcon
              sx={{ color: theme.palette.common.white, fontSize: 20 }}
            />
          </>
        )}
      </Button>
    </Box>
  );
}
