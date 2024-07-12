import Stack from "@mui/material/Stack";
import { Header } from "../components/header";
import { useContext, useEffect } from "react";
import { AmountContext } from "../context/amount-provider";
import { formatCurrency } from "../helper/format-currency";
import { ButtonCopyPixKey } from "../components/button-copy-pix-key";
import { ImageQRCode } from "../components/image-qrcode";

import { Divider } from "@mui/material";

import { PaymentTermTime } from "../components/payment-term-time";
import { TimeLinePayment } from "../components/timeline-payment";
import { TotalAmount } from "../components/total-amount";
import { HowItWorks } from "../components/how-it-works";
import { IdentifierMessage } from "../components/identifier-message";

export default function Pix() {
  const { selectedAmount } = useContext(AmountContext);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

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

      <PaymentTermTime />

      <TimeLinePayment />

      <Divider sx={{ my: "2rem", width: "100%" }} />

      <TotalAmount />

      <Divider sx={{ my: "2rem", width: "100%" }} />

      <HowItWorks />

      <Divider sx={{ my: "2rem", width: "100%" }} />

      <IdentifierMessage />
    </Stack>
  );
}
