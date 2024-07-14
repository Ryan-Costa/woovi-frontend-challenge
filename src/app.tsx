import { useState, useContext, ChangeEvent } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AmountContext } from "./context/amount-provider";

function formatCurrency(value: string) {
  const numberString = value.replace(/\D/g, "");
  const number = parseFloat(numberString) / 100;

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const { setTotalAmount } = useContext(AmountContext);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatCurrency(value);
    setInputValue(formattedValue);
  };

  const handleClick = () => {
    const numberValue = parseFloat(inputValue.replace(/\D/g, "")) / 100;
    setTotalAmount(numberValue);
    navigate("/select-payment");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        id="amount-to-pay"
        label="Amount"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      <IconButton onClick={handleClick} color="primary">
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default App;
