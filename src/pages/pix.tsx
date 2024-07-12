import Stack from "@mui/material/Stack";
import { Header } from "../components/header";
import { useContext } from "react";
import { AmountContext } from "../context/amount-provider";
import { formatCurrency } from "../helper/format-currency";
import { ButtonCopyPixKey } from "../components/button-copy-pix-key";
import { ImageQRCode } from "../components/image-qrcode";
import { Box, Divider, Radio, Typography, useTheme } from "@mui/material";
import { TimelineConnector } from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Pix() {
  const theme = useTheme();
  const { selectedAmount, selectedInstallment } = useContext(AmountContext);

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
        <Typography variant="h3" color={theme.palette.info.main}>
          Prazo de pagamento
        </Typography>
        <Typography variant="h3" color={theme.palette.text.primary}>
          15/12/2021 - 08:17
        </Typography>
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
      ></Box>
      <Divider sx={{ my: "2rem", width: "100%" }} />
    </Stack>
  );
}
