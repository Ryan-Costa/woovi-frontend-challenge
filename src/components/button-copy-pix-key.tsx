import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export function ButtonCopyPixKey() {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  function handleCopyy() {
    const valueCopy = `00020101021226880014br.gov.bcb.pix2566qrcodes-pix.gerencianet.com.br/v2/0849218f535f4b09937d5b4585c8326f52040000530398654040.015802BR5909Admin Pix6009Sao Paulo6229052577532fc489a14bac9440e99f86304E6BB`;
    navigator.clipboard.writeText(valueCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Box sx={{ mt: "2rem" }}>
      <Button
        variant="contained"
        onClick={handleCopyy}
        sx={{
          backgroundColor: `${theme.palette.secondary.main} !important`,
          color: theme.palette.common.white,
          fontSize: "1.6rem",
          gap: "1rem",
          textTransform: "none",
          width: "28.2rem",
          display: "flex",
          justifyContent: "center",
          // "&:hover": {
          //   backgroundColor: theme.palette.secondary.light,
          // },
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
