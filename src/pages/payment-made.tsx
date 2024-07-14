import { Box, Stack, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { StorageService } from "../helper/local-storage";
import { formatCurrency } from "../helper/format-currency";
import { CalcCetFee } from "../helper/calc-cet-fee";
import { useContext } from "react";
import { AmountContext } from "../context/amount-provider";

export function PaymentMade() {
  const theme = useTheme();
  const { cetFee } = useContext(AmountContext);

  const selectedAmount = StorageService.getItem("selectedAmount");
  const selectedInstallment = StorageService.getItem("selectedInstallment");
  const newTotalDebits = StorageService.getItem("newTotalDebits");

  const newInstallmentCardPayment = StorageService.getItem(
    "newInstallmentCardPayment"
  );

  return (
    <Stack sx={{ height: "80vh", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "26.5rem",
          backgroundColor: theme.palette.common.white,
          padding: "1.25rem",
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: "10rem", color: theme.palette.primary.main }}
        />
        <Typography
          variant="h1"
          sx={{ color: theme.palette.text.primary, textAlign: "center" }}
        >
          {selectedInstallment === 1
            ? `Pagamento de ${formatCurrency(
                Number(newTotalDebits)
              )} realizado no pix`
            : `Pagamento realizado em ${`${newInstallmentCardPayment} x de`} ${formatCurrency(
                CalcCetFee(
                  Number(newTotalDebits) - Number(selectedAmount),
                  cetFee
                ) / Number(newInstallmentCardPayment)
              )} no crédito `}
        </Typography>
      </Box>
    </Stack>
  );
}
