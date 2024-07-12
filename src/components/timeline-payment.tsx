import { TimelineConnector } from "@mui/lab";
import { Box, Radio, Stack, Typography, useTheme } from "@mui/material";
import { formatCurrency } from "../helper/format-currency";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useContext } from "react";
import { AmountContext } from "../context/amount-provider";

export function TimeLinePayment() {
  const theme = useTheme();
  const { selectedAmount, selectedInstallment } = useContext(AmountContext);
  return (
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
            {Array.from({ length: selectedInstallment - 1 }).map((_, index) => (
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
            ))}
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
  );
}
