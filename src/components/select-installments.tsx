import { Box, Radio, Stack, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { AmountContext } from "../context/amount-provider";
import { formatCurrency } from "../helper/format-currency";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { InstallmentWrapper } from "./installment-wrapper";
import { Tag } from "./tag";
import { TagPix } from "./tag-pix";
import { FirstInstallmentWrapper } from "./first-installment-wrapper";
import { ConfirmationModal } from "./confirmation-modal";

export function SelectInstallments() {
  const theme = useTheme();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);

  const {
    totalAmount,
    installments,
    updateInstallment,
    updateAmount,
    selectedInstallment,
    interestRate,
  } = useContext(AmountContext);

  function handleRadioChange(numInstallments: number, selectedAmount: number) {
    updateInstallment(numInstallments);
    updateAmount(selectedAmount);

    openConfirmationModal();
  }

  function openConfirmationModal() {
    setIsConfirmationModalOpen(true);
  }

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          maxWidth: "26.5rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {installments.map((installment, index) => (
          <Stack key={index}>
            {installment.numInstallments === 1 ? (
              <FirstInstallmentWrapper
                installment={installment}
                selectedInstallment={selectedInstallment}
              >
                <TagPix text="Pix" />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Typography variant="h1" color="text.primary">
                        {installment.numInstallments}x
                      </Typography>
                      <Typography
                        variant="h1"
                        color="text.primary"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {formatCurrency(totalAmount)}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="h3"
                        color="primary.main"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        Ganhe
                      </Typography>
                      <Typography
                        variant="h3"
                        color="primary.main"
                        sx={{
                          fontWeight: 800,
                        }}
                      >
                        3%
                      </Typography>
                      <Typography
                        variant="h3"
                        color="primary.main"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        de Cashback
                      </Typography>
                    </Box>
                  </Box>

                  <Radio
                    checked={
                      selectedInstallment === installment.numInstallments
                    }
                    onChange={() =>
                      handleRadioChange(
                        installment.numInstallments,
                        totalAmount
                      )
                    }
                    checkedIcon={
                      <CheckCircleIcon
                        sx={{ color: theme.palette.primary.main }}
                      />
                    }
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: theme.palette.primary.main,
                        fontSize: 28,
                      },
                      padding: 0,
                    }}
                  />
                </Box>

                <Tag
                  textBold={`🤑 ${formatCurrency(totalAmount * interestRate)}`}
                  text="de volta no seu Pix na hora"
                />
              </FirstInstallmentWrapper>
            ) : (
              <InstallmentWrapper
                index={index}
                selectedInstallment={selectedInstallment}
                installmentLength={installments.length}
              >
                {installment.numInstallments === 2 && (
                  <TagPix text="Pix Parcelado" />
                )}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    width: "100%",
                    flex: 1,
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Typography variant="h1" color="text.primary">
                        {installment.numInstallments}x
                      </Typography>

                      <Typography
                        variant="h1"
                        color="text.primary"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {formatCurrency(installment.amount)}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Typography variant="h3" color="text.secondary">
                        Total:{" "}
                        {formatCurrency(
                          installment.amount * installment.numInstallments
                        )}
                      </Typography>
                    </Box>
                  </Box>

                  <Radio
                    checked={
                      selectedInstallment === installment.numInstallments
                    }
                    onChange={() =>
                      handleRadioChange(
                        installment.numInstallments,
                        installment.amount
                      )
                    }
                    checkedIcon={<CheckCircleIcon />}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                        color: theme.palette.primary.main,
                      },
                      padding: 0,
                    }}
                  />
                </Box>

                {installment.numInstallments === 4 && (
                  <Tag
                    textBold="-3% de juros:"
                    text="Melhor opção de parcelamento"
                  />
                )}
              </InstallmentWrapper>
            )}
          </Stack>
        ))}
      </Stack>

      {isConfirmationModalOpen && (
        <ConfirmationModal
          setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        />
      )}
    </>
  );
}
