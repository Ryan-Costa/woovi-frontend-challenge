import {
  Box,
  FormControl,
  TextField,
  IconButton,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { AmountContext } from "../context/amount-provider";
import { useNavigate } from "react-router-dom";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const inputAmountSchema = z.object({
  amount: z.string().min(1, "Digite um número").max(13),
});

type InputAmountPropsSchama = z.infer<typeof inputAmountSchema>;

export function InputSelectAmount() {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const { setTotalAmount } = useContext(AmountContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputAmountPropsSchama>({
    resolver: zodResolver(inputAmountSchema),
  });

  function formatCurrency(value: string) {
    const numberString = value.replace(/\D/g, "");
    if (numberString === "") return "";
    const number = parseFloat(numberString) / 100;

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const formattedValue = formatCurrency(value);
    setInputValue(formattedValue);
  }

  function handleClick(data: InputAmountPropsSchama) {
    if (
      !data.amount ||
      parseFloat(String(data.amount).replace(/\D/g, "")) === 0
    ) {
      return;
    }

    const numberValue = parseFloat(inputValue.replace(/\D/g, "")) / 100;
    setTotalAmount(numberValue);
    navigate("/select-payment");
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <FormControl
        component="form"
        onSubmit={handleSubmit(handleClick)}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
        }}
      >
        <TextField
          {...register("amount")}
          label="Digite o valor"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          error={!!errors.amount}
          helperText={errors.amount?.message}
          inputProps={{ maxLength: 13 }}
        />
        <IconButton
          type="submit"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            borderRadius: "8px",
            height: "3.5rem",
            width: "4rem",
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
            },
          }}
        >
          <NavigationOutlinedIcon sx={{ rotate: "90deg" }} />
        </IconButton>
      </FormControl>
    </Box>
  );
}
