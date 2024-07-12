import { useEffect, useState } from "react";
import { formatEndTime } from "../helper/format-end-time";
import { formatTime } from "../helper/format-time";
import { calculateEndTime } from "../helper/calculate-end-time";
import { LinearProgress, Stack, Typography, useTheme } from "@mui/material";
import { calculateProgress } from "../helper/calculate-progress";

export function PaymentTermTime() {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora = 3600 segundos
  const [endTime] = useState(calculateEndTime());

  useEffect(() => {
    document.body.style.overflow = "auto";

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 10);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, []);

  return (
    <Stack sx={{ mt: "2rem", textAlign: "center" }}>
      <Typography
        variant="h3"
        color={theme.palette.info.main}
        sx={{ fontWeight: 400 }}
      >
        Prazo de pagamento
      </Typography>
      <Typography variant="h3" color={theme.palette.text.primary}>
        {formatEndTime(endTime)} - {formatTime(timeLeft)}
      </Typography>
      <LinearProgress
        sx={{ transform: "rotateX(180deg)" }}
        variant="determinate"
        value={calculateProgress(timeLeft)}
      />
    </Stack>
  );
}
