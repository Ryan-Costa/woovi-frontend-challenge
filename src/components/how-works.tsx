import { ChevronLeftRounded, CircleRounded } from "@mui/icons-material";
import {
  Box,
  Typography,
  Collapse,
  Stack,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export function HowWorks() {
  const theme = useTheme();
  const [expandedSessionHowWorkds, setExpandedSessionHowWorkds] =
    useState(false);

  function expandHowWorkds() {
    setExpandedSessionHowWorkds((prevState) => !prevState);
  }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Como funciona?</Typography>
        <ChevronLeftRounded
          sx={{
            fontSize: 28,
            rotate: expandedSessionHowWorkds ? "270deg" : "90deg",
          }}
          onClick={expandHowWorkds}
        />
      </Box>

      <Collapse in={expandedSessionHowWorkds}>
        {expandedSessionHowWorkds && (
          <Stack sx={{ mt: "2rem" }}>
            <Typography variant="h3" sx={{ mb: "1rem" }}>
              O pagamento com Pix usando o link do QR Code é simples:
            </Typography>
            <Stack sx={{ gap: 1, alignItems: "flex-start" }}>
              <Stack direction="row" alignItems="center" gap={1}>
                <ListItemIcon sx={{ minWidth: "auto" }}>
                  <CircleRounded
                    sx={{ fontSize: ".6rem", fill: theme.palette.common.black }}
                  />
                </ListItemIcon>
                <Typography variant="h4">
                  Copie o link do QR Code fornecido.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <ListItemIcon sx={{ minWidth: "auto" }}>
                  <CircleRounded
                    sx={{ fontSize: ".6rem", fill: theme.palette.common.black }}
                  />
                </ListItemIcon>
                <Typography variant="h4">
                  Abra o aplicativo do seu banco e vá para a seção Pix.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <ListItemIcon sx={{ minWidth: "auto" }}>
                  <CircleRounded
                    sx={{ fontSize: ".6rem", fill: theme.palette.common.black }}
                  />
                </ListItemIcon>
                <Typography variant="h4">
                  Cole o link na opção apropriada.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <ListItemIcon sx={{ minWidth: "auto" }}>
                  <CircleRounded
                    sx={{ fontSize: ".6rem", fill: theme.palette.common.black }}
                  />
                </ListItemIcon>
                <Typography variant="h4">
                  Confirme os detalhes e finalize o pagamento.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Collapse>
    </>
  );
}
