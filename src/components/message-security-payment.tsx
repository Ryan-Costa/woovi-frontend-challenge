import { Box, Typography, useTheme } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import WooviFooterLogo from "../assets/woovi-footer-logo.svg";

export function MessageSecurityPayment() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        mt: 5,
      }}
    >
      <GppGoodOutlinedIcon
        sx={{
          color: theme.palette.info.main,
          fontSize: 22,
        }}
      />
      <Typography
        color={theme.palette.info.main}
        variant="h4"
        sx={{ fontWeight: 500 }}
      >
        Pagamento 100% seguro via:
      </Typography>
      <Box>
        <img src={WooviFooterLogo} alt="WooviFooterLogo" />
      </Box>
    </Box>
  );
}
