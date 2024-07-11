import { Box, Button, Typography, useTheme } from "@mui/material";
import { formatCurrency } from "../helper/format-currency";

interface ConfirmationModalProps {
  selectedInstallment: number;
  amountSelected: number;
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ConfirmationModal({
  selectedInstallment,
  amountSelected,
  setIsConfirmationModalOpen,
}: ConfirmationModalProps) {
  const theme = useTheme();

  function closeModal() {
    setIsConfirmationModalOpen(false);
  }

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundopacity: "0.6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "modal",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.common.white,
          padding: "2rem",
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 0.6,
          }}
        >
          <Typography variant="h2" color="text.primary">
            Deseja parcelar em
          </Typography>

          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            {selectedInstallment}x
          </Typography>

          <Typography variant="h2" color="text.primary">
            de
          </Typography>

          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            {formatCurrency(amountSelected)}?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
              fontSize: "1.4rem",
            }}
            onClick={closeModal}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white,
              fontSize: "1.4rem",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
            }}
          >
            Confirmar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
