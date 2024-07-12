import { Box, Typography } from "@mui/material";
import { formatCurrency } from "../helper/format-currency";
import { useContext } from "react";
import { AmountContext } from "../context/amount-provider";

export function TotalAmount() {
  const { selectedAmount, selectedInstallment } = useContext(AmountContext);
  return (
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
  );
}
