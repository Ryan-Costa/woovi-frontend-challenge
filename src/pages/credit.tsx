import { Divider, Stack } from "@mui/material";
import { Header } from "../components/header";
import { useContext } from "react";
import { AmountContext } from "../context/amount-provider";
import { PaymentTermTime } from "../components/payment-term-time";
import { TimeLinePayment } from "../components/timeline-payment";
import { TotalAmount } from "../components/total-amount";
import { HowItWorks } from "../components/how-it-works";
import { IdentifierMessage } from "../components/identifier-message";
import { CreditCardPaymentForm } from "../components/credit-card-payment-form";

export default function Credit() {
  const { selectedInstallment } = useContext(AmountContext);
  return (
    <Stack
      sx={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Header
        title={`João, pague o restante em ${
          selectedInstallment - 1
        }x ou mais no cartão`}
      />
      <CreditCardPaymentForm />

      <PaymentTermTime />

      <TimeLinePayment />

      <Divider sx={{ my: "1.25rem", width: "100%" }} />

      <TotalAmount />

      <Divider sx={{ my: "1.25rem", width: "100%" }} />

      <HowItWorks />

      <Divider sx={{ my: "1.25rem", width: "100%" }} />

      <IdentifierMessage />
    </Stack>
  );
}
