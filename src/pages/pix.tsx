import Stack from "@mui/material/Stack";
import { Header } from "../components/header";
import { useContext, useEffect, useState } from "react";
import { AmountContext } from "../context/amount-provider";
import { formatCurrency } from "../helper/format-currency";
import { ButtonCopyPixKey } from "../components/button-copy-pix-key";
import { ImageQRCode } from "../components/image-qrcode";
import { LinearProgress } from "@mui/material";

import {
  Box,
  Collapse,
  Divider,
  ListItemIcon,
  Radio,
  Typography,
  useTheme,
} from "@mui/material";
import { TimelineConnector } from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ChevronLeftRounded, CircleRounded } from "@mui/icons-material";
import { formatTime } from "../helper/format-time";
import { calculateProgress } from "../helper/calculate-progress";
import { calculateEndTime } from "../helper/calculate-end-time";
import { formatEndTime } from "../helper/format-end-time";

export default function Pix() {
  const theme = useTheme();
  const [expandedSessionHowWorkds, setExpandedSessionHowWorkds] =
    useState(false);
  const { selectedAmount, selectedInstallment } = useContext(AmountContext);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora = 3600 segundos
  const [endTime] = useState(calculateEndTime());

  useEffect(() => {
    document.body.style.overflow = "auto";

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 10);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, []);

  function expandHowWorkds() {
    setExpandedSessionHowWorkds((prevState) => !prevState);
  }

  return (
    <Stack
      sx={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Header
        title={`João, pague a entrada de ${formatCurrency(
          selectedAmount
        )} pelo Pix`}
      />

      <ImageQRCode />

      <ButtonCopyPixKey />

      <Stack sx={{ mt: "2rem", textAlign: "center" }}>
        <Typography
          variant="h3"
          color={theme.palette.info.main}
          sx={{ fontWeight: 400 }}
        >
          Prazo de pagamento
        </Typography>
        <Typography variant="h3" color={theme.palette.text.primary}>
          {formatEndTime(endTime)} - {formatTime(timeLeft)}
        </Typography>
        <LinearProgress
          sx={{ transform: "rotateX(180deg)" }}
          variant="determinate"
          value={calculateProgress(timeLeft)}
        />
      </Stack>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          mt: "2rem",
        }}
      >
        <Stack sx={{ alignItems: "flex-start" }}>
          <Box sx={{ display: "flex" }}>
            <Stack sx={{ alignItems: "center" }}>
              <Radio
                disabled
                checkedIcon={
                  <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                }
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: theme.palette.primary.main,
                    fontSize: 20,
                  },
                  padding: 0,
                }}
              />
              {Array.from({ length: selectedInstallment - 1 }).map(
                (_, index) => (
                  <Stack sx={{ alignItems: "center" }} key={index}>
                    <TimelineConnector
                      sx={{
                        height: "4rem",
                        mt: "-.2rem",
                        backgroundColor: theme.palette.primary.light,
                      }}
                    />
                    <Radio
                      disabled
                      checkedIcon={
                        <CheckCircleIcon
                          sx={{ color: theme.palette.primary.main }}
                        />
                      }
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: theme.palette.primary.main,
                          fontSize: 20,
                          mt: "-.2rem",
                          fill: theme.palette.primary.light,
                        },
                        padding: 0,
                      }}
                    />
                  </Stack>
                )
              )}
            </Stack>
            <Stack sx={{ ml: "1rem", justifyContent: "space-between" }}>
              {Array.from({ length: selectedInstallment }).map((_, index) => (
                <Typography
                  variant="h3"
                  color={theme.palette.text.primary}
                  key={index}
                >
                  {index + 1}ª {index > 0 ? null : "entrada"} no{" "}
                  {index > 0 ? "Cartão" : "Pix"}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Stack sx={{ justifyContent: "space-between" }}>
          {Array.from({ length: selectedInstallment }).map((_, index) => (
            <Typography
              key={index}
              variant="h3"
              color={theme.palette.text.primary}
              sx={{ lineHeight: 1 }}
            >
              {formatCurrency(
                (selectedInstallment * selectedAmount) / selectedInstallment
              )}
            </Typography>
          ))}
        </Stack>
      </Box>
      <Divider sx={{ my: "2rem", width: "100%" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">CET: 0,5%</Typography>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          {formatCurrency(selectedInstallment * selectedAmount)}
        </Typography>
      </Box>
      <Divider sx={{ my: "2rem", width: "100%" }} />
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

      <Divider sx={{ my: "2rem", width: "100%" }} />

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
    </Stack>
  );
}
