import { Box, Radio, Typography, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import wooviLogo from "../assets/woovi.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { Tag } from "../components/tag";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import WooviFooterLogo from "../assets/woovi-footer-logo.svg";

export default function PaymentMethod() {
  const [selectedInstallment, setSelectedInstallment] = useState<number>(0);

  const handleRadioChange = (
    numInstallments: number,
    amountSelected: number
  ) => {
    setSelectedInstallment(numInstallments);
    console.log(selectedInstallment, amountSelected);
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

  return (
    <Stack
      sx={{
        alignItems: "center",
        flex: 1,
      }}
    >
      <img
        src={wooviLogo}
        style={{ width: "12.35rem", height: "3.7rem", flexShrink: 0 }}
        alt="Woovi Logo"
      />
      <Typography
        variant="h1"
        color="text.primary"
        sx={{
          mt: 5,
          mb: 4,
          textAlign: "center",
          lineHeight: "normal",
        }}
      >
        João, como você quer pagar?
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          position: "relative",
          border: 2,
          borderColor:
            selectedInstallment === 1
              ? theme.palette.text.disabled
              : theme.palette.primary.light,
          borderRadius: 2,
          backgroundColor:
            selectedInstallment === 1
              ? theme.palette.background.paper
              : theme.palette.common.white,
          width: "100%",
          px: "2rem",
          pt: "2rem",
          pb: "2.3rem",
          mb: "3.4rem",
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
            backgroundColor: theme.palette.primary.light,
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
                {totalAmount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
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
                color="text.disabled"
                sx={{
                  fontWeight: 600,
                }}
              >
                Ganhe
              </Typography>
              <Typography
                variant="h3"
                color="text.disabled"
                sx={{
                  fontWeight: 800,
                }}
              >
                3%
              </Typography>
              <Typography
                variant="h3"
                color="text.disabled"
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
              <CheckCircleIcon sx={{ color: theme.palette.text.disabled }} />
            }
            sx={{
              "& .MuiSvgIcon-root": {
                color: theme.palette.text.disabled,
                fontSize: 28,
              },
              padding: 0,
            }}
          />
        </Box>

        <Tag textBold="🤑 R$ 300,00" text="de volta no seu Pix na hora" />
      </Box>
      <Stack
        sx={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        {installments.map((installment, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "0.7rem",
              zIndex:
                selectedInstallment === installment.numInstallments ? 10 : 1,
              borderTopLeftRadius: index === 0 ? 8 : 0,
              borderTopRightRadius: index === 0 ? 8 : 0,
              borderBottomLeftRadius: index === installments.length - 1 ? 8 : 0,
              borderBottomRightRadius:
                index === installments.length - 1 ? 8 : 0,
              border: 2,
              borderColor:
                selectedInstallment === installment.numInstallments
                  ? theme.palette.text.disabled
                  : theme.palette.primary.light,
              backgroundColor:
                selectedInstallment === installment.numInstallments
                  ? theme.palette.background.paper
                  : theme.palette.common.white,
              width: "100%",
              px: "2rem",
              pt: "2rem",
              pb: "2.3rem",
              height: "100%",
              mb: index === installments.length - 1 ? 0 : "-2px",
            }}
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
                  backgroundColor: theme.palette.primary.light,
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
                    {installment.amount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Typography variant="h3" color="text.secondary">
                    {`Total: ${(
                      installment.numInstallments * installment.amount
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}`}
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
                    color: theme.palette.text.disabled,
                  },
                  padding: 0,
                }}
              />
            </Box>
            {index === 2 && (
              <>
                <Tag
                  textBold="-3% de juros:"
                  text="Melhor opção de parcelamento"
                />
              </>
            )}
          </Box>
        ))}
      </Stack>
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
            color: theme.palette.text.disabled,
            fontSize: 22,
          }}
        />
        <Typography
          color={theme.palette.text.disabled}
          variant="h4"
          sx={{ lineHeight: "0.8", fontWeight: 600 }}
        >
          Pagamento 100% seguro via:
        </Typography>
        <img src={WooviFooterLogo} alt="WooviFooterLogo" />
      </Box>
    </Stack>
  );
}
