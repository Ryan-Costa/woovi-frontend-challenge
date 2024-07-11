import React, { createContext, useEffect, useState } from "react";

interface AmountContextType {
  selectedAmount: number;
  updateAmount: (newAmountSelected: number) => void;
  selectedInstallment: number;
  updateInstallment: (newInstallmentSelected: number) => void;
}

const AmountContext = createContext<AmountContextType>({} as AmountContextType);

const AmountProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedInstallment, setSelectedInstallment] = useState(() => {
    const saved = localStorage.getItem("selectedInstallment");
    return saved ? JSON.parse(saved) : 0;
  });

  const [selectedAmount, setSelectedAmount] = useState(() => {
    const saved = localStorage.getItem("selectedAmount");
    return saved ? JSON.parse(saved) : 0;
  });

  const updateAmount = (newAmountSelected: number) => {
    setSelectedAmount(newAmountSelected);
  };

  const updateInstallment = (newInstallmentSelected: number) => {
    setSelectedInstallment(newInstallmentSelected);
  };

  useEffect(() => {
    localStorage.setItem("selectedAmount", JSON.stringify(selectedAmount));
    localStorage.setItem(
      "selectedInstallment",
      JSON.stringify(selectedInstallment)
    );

    console.log("valor: ", selectedAmount, "parcela: ", selectedInstallment);
  }, [selectedAmount, selectedInstallment]);

  return (
    <AmountContext.Provider
      value={{
        selectedAmount,
        updateAmount,
        selectedInstallment,
        updateInstallment,
      }}
    >
      {children}
    </AmountContext.Provider>
  );
};

export { AmountContext, AmountProvider };
