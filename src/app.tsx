import { useState, useContext, ChangeEvent, FormEvent } from "react";
import {
  TextField,
  IconButton,
  Stack,
  useTheme,
  FormControl,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AmountContext } from "./context/amount-provider";
import { Header } from "./components/header";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";

function formatCurrency(value: string) {
  const numberString = value.replace(/\D/g, "");
  const number = parseFloat(numberString) / 100;

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function App() {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { setTotalAmount } = useContext(AmountContext);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatCurrency(value);
    setInputValue(formattedValue);
    setError(false);
  };

  const handleClick = (event: FormEvent) => {
    event.preventDefault();

    if (!inputValue || parseFloat(inputValue.replace(/\D/g, "")) === 0) {
      setError(true);
      return;
    }

    const numberValue = parseFloat(inputValue.replace(/\D/g, "")) / 100;
    setTotalAmount(numberValue);
    navigate("/select-payment");
  };

  return (
    <Stack>
      <Header title={`João, quanto você deseja pagar?`} />
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
            label="Amount"
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
    </Stack>
  );
}

export default App;
