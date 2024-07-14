import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useContext, useState } from "react";
import { AmountContext } from "../context/amount-provider";
import { formatCurrency } from "../helper/format-currency";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { CpfMask } from "../helper/cpf-mask";
import { DateMask } from "../helper/date-mask";
import { CardNumberMask } from "../helper/card-mask";

const creditCardPaymentSchema = z.object({
  fullName: z.string({
    required_error: "Nome completo é obrigatório",
  }),
  cpf: z.string({ required_error: "CPF é obrigatório" }),
  cardNumber: z
    .string({
      required_error: "Número do cartão é obrigatório",
    })
    .min(16, "Número do cartão inválido"),
  expirationDate: z.string({
    required_error: "Vencimento é obrigatório",
  }),
  cvv: z
    .string({
      required_error: "CVV é obrigatório",
    })
    .min(3, "CVV inválido")
    .max(4, "CVV inválido"),
  installment: z.number().nonnegative("Parcelas são obrigatórias"),
});

type FormCreditCardPaymentForm = z.infer<typeof creditCardPaymentSchema>;

export function CreditCardPaymentForm() {
  const theme = useTheme();
  const { selectedAmount, selectedInstallment, updateInstallment } =
    useContext(AmountContext);
  const [cpfMask, setCpfMask] = useState("");
  const [dateMask, setDateMask] = useState("");
  const [cardNumberMask, setCardNumberMask] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCreditCardPaymentForm>({
    resolver: zodResolver(creditCardPaymentSchema),
  });

  function onSubmit(data: FormCreditCardPaymentForm) {
    console.log(data);
  }

  function handleCpfChange(e: ChangeEvent<HTMLInputElement>) {
    setCpfMask(CpfMask(e.target.value));
  }

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    setDateMask(DateMask(e.target.value));
  }

  function handleCardNumberChange(e: ChangeEvent<HTMLInputElement>) {
    setCardNumberMask(CardNumberMask(e.target.value));
  }

  function handleInstallmentChange(event: SelectChangeEvent<number>) {
    updateInstallment(Number(event.target.value));
  }

  return (
    <FormControl
      sx={{ width: "100%", gap: "1.75rem", maxWidth: "26.5rem" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome completo"
            variant="outlined"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        )}
      />

      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="CPF"
            variant="outlined"
            onChange={handleCpfChange}
            value={cpfMask}
            inputProps={{ maxLength: 14 }}
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
          />
        )}
      />

      <Controller
        name="cardNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Número do cartão"
            variant="outlined"
            onChange={handleCardNumberChange}
            value={cardNumberMask}
            inputProps={{ maxLength: 19 }}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />
        )}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1.375rem",
        }}
      >
        <Controller
          name="expirationDate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Vencimento"
              variant="outlined"
              onChange={handleDateChange}
              value={dateMask}
              error={!!errors.expirationDate}
              helperText={errors.expirationDate?.message}
            />
          )}
        />

        <Controller
          name="cvv"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="CVV"
              variant="outlined"
              inputProps={{ maxLength: 3 }}
              error={!!errors.cvv}
              helperText={errors.cvv?.message}
            />
          )}
        />
      </Box>

      <FormControl>
        <InputLabel id="installment">Parcelas</InputLabel>
        <Controller
          name="installment"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              id="installment"
              label="Parcelas"
              error={!!errors.installment}
              onChange={(e) => console.log(e.target.value)}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <MenuItem key={index} value={index + 1}>
                  {index + 1}x de{" "}
                  {formatCurrency(
                    ((selectedInstallment * selectedAmount) / 1 -
                      (selectedInstallment * selectedAmount) /
                        selectedInstallment) /
                      (index + 1)
                  )}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
          fontSize: "0.875rem",
          borderRadius: "8px",
        }}
      >
        Pagar
      </Button>
    </FormControl>
  );
}
