import { Stack, useTheme } from "@mui/material";
import React from "react";

interface InstallmentWrapperProps {
  index: number;
  selectedInstallment: number;
  installmentLength: number;
  children: React.ReactNode;
}
export function InstallmentWrapper({
  index,
  selectedInstallment,
  installmentLength,
  children,
}: InstallmentWrapperProps) {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        position: "relative",
        alignItems: "start",
        gap: "0.7rem",
        zIndex: 1,
        border: 2,
        borderColor: theme.palette.text.disabled,
        backgroundColor: theme.palette.common.white,
        width: "100%",
        px: "2rem",
        pt: "2rem",
        pb: "2.3rem",
        height: "100%",
        mb: "-2px",
        ...(selectedInstallment === index + 1 && {
          backgroundColor: theme.palette.background.paper,
          borderColor: theme.palette.primary.main,
          zIndex: 2,
        }),
        ...(index === 0 && {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }),
        ...(index === installmentLength - 1 && {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          mb: 0,
        }),
      }}
    >
      {children}
    </Stack>
  );
}
