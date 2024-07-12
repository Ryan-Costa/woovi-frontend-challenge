import { Stack, useTheme } from "@mui/material";

interface FirstInstallmentWrapperProps {
  selectedInstallment: number;
  installment: { numInstallments: number; amount: number };
  children: React.ReactNode;
}
export function FirstInstallmentWrapper({
  selectedInstallment,
  installment,
  children,
}: FirstInstallmentWrapperProps) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        gap: "0.7rem",
        position: "relative",
        border: 2,
        borderRadius: 2,
        borderColor: theme.palette.text.disabled,
        backgroundColor: theme.palette.common.white,
        width: "100%",
        p: "2rem 2rem 2.3rem 2rem",
        mb: "3.4rem",
        ...(selectedInstallment === installment.numInstallments && {
          borderColor: theme.palette.primary.main,
          backgroundColor: theme.palette.background.paper,
        }),
      }}
    >
      {children}
    </Stack>
  );
}
