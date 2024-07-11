import { Box, Button, Typography, useTheme } from "@mui/material";
import { formatCurrency } from "../helper/format-currency";
import { useNavigate } from "react-router-dom";

interface ConfirmationModalProps {
  selectedInstallment: number;
  selectedAmount: number;
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ConfirmationModal({
  selectedInstallment,
  selectedAmount,
  setIsConfirmationModalOpen,
}: ConfirmationModalProps) {
  const theme = useTheme();
  const navigate = useNavigate();

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
            {formatCurrency(selectedAmount)}?
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
            onClick={() => navigate("/pix")}
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
