import {
  Box,
  FormControl,
  TextField,
  IconButton,
  useTheme,
} from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AmountContext } from "../context/amount-provider";
import { useNavigate } from "react-router-dom";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";

export function InputSelectAmount() {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { setTotalAmount } = useContext(AmountContext);
  const navigate = useNavigate();

  function formatCurrency(value: string) {
    const numberString = value.replace(/\D/g, "");
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
    setError(false);
  }

  function handleClick(event: FormEvent) {
    event.preventDefault();

    if (!inputValue || parseFloat(inputValue.replace(/\D/g, "")) === 0) {
      setError(true);
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
        onSubmit={handleClick}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
        }}
      >
        <TextField
          id="amount-to-pay"
          label="Digite o valor"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          error={error}
          helperText={error ? "Por favor, insira um valor válido." : ""}
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
