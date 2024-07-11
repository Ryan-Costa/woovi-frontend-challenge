import { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Box, Radio, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Tag } from "../components/tag";
import { ConfirmationModal } from "../components/confirmation-modal";
import { formatCurrency } from "../helper/format-currency";
import { Header } from "../components/header";
import { InstallmentWrapper } from "../components/installment-wrapper";
import { AmountContext } from "../context/amount-provider";

export default function PaymentMethod() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const {
    selectedAmount,
    updateAmount,
    selectedInstallment,
    updateInstallment,
  } = useContext(AmountContext);

  useEffect(() => {
    if (isConfirmationModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isConfirmationModalOpen]);

  const handleRadioChange = (
    numInstallments: number,
    selectedAmount: number
  ) => {
    updateInstallment(numInstallments);
    updateAmount(selectedAmount);
    openConfirmationModal();
  };

  const theme = useTheme();
  const totalAmount = 30500;

  const calculateInstallment = (total: number, numInstallments: number) => {
    const monthlyInterestRate = 0.0032786;
    const totalWithInterest =
      total * (1 + monthlyInterestRate * numInstallments);
    const installmentAmount = totalWithInterest / numInstallments;
    return installmentAmount.toFixed(2);
  };

  const installments = Array.from({ length: 6 }, (_, index) => {
    const numInstallments = index + 2;
    const installmentAmount = calculateInstallment(
      totalAmount,
      numInstallments
    );

    return {
      amount: parseFloat(installmentAmount),
      numInstallments,
    };
  });

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  return (
    <Stack
      sx={{
        flex: 1,
      }}
    >
      <Header title="João, como você quer pagar?" />

      <Stack
        sx={{
          gap: "0.7rem",
          position: "relative",
          border: 2,
          borderRadius: 2,
          borderColor: theme.palette.text.disabled,
          backgroundColor: theme.palette.common.white,
          width: "100%",
          px: "2rem",
          pt: "2rem",
          pb: "2.3rem",
          mb: "3.4rem",
          ...(selectedInstallment === 1 && {
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
          }),
        }}
      >
        <Box
          sx={{
            position: "absolute",
            px: "1.8rem",
            py: "0.3rem",
            display: "inline-block",
            transform: "translateY(-3.5rem)",
            borderRadius: 10,
            backgroundColor: theme.palette.text.disabled,
          }}
        >
          <Typography variant="h2" color="text.primary">
            Pix
          </Typography>
        </Box>

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
                1x
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
            checked={selectedInstallment === 1}
            onChange={() => handleRadioChange(1, totalAmount)}
            checkedIcon={
              <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
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

        <Tag textBold="🤑 R$ 300,00" text="de volta no seu Pix na hora" />
      </Stack>

      <Stack
        sx={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        {installments.map((installment, index) => (
          <InstallmentWrapper
            key={index}
            index={index}
            selectedInstallment={selectedInstallment}
            installmentLength={installments.length}
          >
            {index === 0 && (
              <Box
                sx={{
                  position: "absolute",
                  px: "1.8rem",
                  py: "0.3rem",
                  display: "inline-block",
                  transform: "translateY(-3.5rem)",
                  borderRadius: 10,
                  backgroundColor: theme.palette.text.disabled,
                }}
              >
                <Typography variant="h2" color="text.primary">
                  Pix Parcelado
                </Typography>
              </Box>
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
                      installment.numInstallments * installment.amount
                    )}
                  </Typography>
                </Box>
              </Box>

              <Radio
                checked={selectedInstallment === installment.numInstallments}
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

            {index === 2 && (
              <Tag
                textBold="-3% de juros:"
                text="Melhor opção de parcelamento"
              />
            )}
          </InstallmentWrapper>
        ))}
      </Stack>

      {isConfirmationModalOpen && (
        <ConfirmationModal
          selectedInstallment={selectedInstallment}
          selectedAmount={selectedAmount}
          setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        />
      )}
    </Stack>
  );
}
