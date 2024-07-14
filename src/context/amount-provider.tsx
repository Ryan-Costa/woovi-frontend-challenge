import React, { createContext, useState } from "react";
import { StorageService } from "../helper/local-storage";

interface AmountContextType {
  totalAmount: number;
  selectedAmount: number;
  totalDebits: number;
  updateAmount: (newAmountSelected: number) => void;
  selectedInstallment: number;
  updateInstallment: (newInstallmentSelected: number) => void;
  addNewPaymentAmount: (
    type: string,
    amount: number,
    installment: number
  ) => void;
  updateTotalDebit: (newTotal: number) => void;
  paymentInfo: PaymentInfoProps;
  installments: {
    numInstallments: number;
    amount: number;
  }[];
  interestRate: number;
  cetFee: number;
}

interface PaymentInfoProps {
  totalDebit: number;
  paymentMethods: { type: string; amount: number; installment: number }[];
}

const AmountContext = createContext<AmountContextType>({} as AmountContextType);

const AmountProvider = ({ children }: { children: React.ReactNode }) => {
  const { setItem, getItem } = StorageService;

  const totalAmount = 20000;
  const installmentsQty = 7;
  const interestRate = 0.03;
  const cetFee = 0.005;

  function calculateInstallmentRate(
    totalAmount: number,
    installments: number
  ): number {
    const totalWithInterest = totalAmount * (1 + interestRate * installments);
    const installmentAmount = totalWithInterest / installments;
    return Number(installmentAmount.toFixed(2));
  }

  const installments = Array.from({ length: installmentsQty }, (_, index) => {
    const numInstallments = index + 1;
    const installmentAmount = calculateInstallmentRate(
      totalAmount,
      numInstallments
    );

    return { numInstallments, amount: installmentAmount };
  });

  const [selectedInstallment, setSelectedInstallment] = useState(() => {
    const saved = getItem("selectedInstallment");
    return Number(saved);
  });

  const [selectedAmount, setSelectedAmount] = useState(() => {
    const saved = localStorage.getItem("selectedAmount");
    return Number(saved);
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoProps>({
    totalDebit: totalAmount,
    paymentMethods: [],
  });

  const [totalDebits] = useState<number>(() => {
    const savedNewDebit = getItem("newTotalDebits");
    return Number(savedNewDebit);
  });

  function updateAmount(newAmountSelected: number) {
    setItem("selectedAmount", selectedAmount);
    setSelectedAmount(newAmountSelected);
  }

  function updateInstallment(newInstallmentSelected: number) {
    setItem("selectedInstallment", selectedInstallment);
    setSelectedInstallment(newInstallmentSelected);
  }

  function updateTotalDebit(newTotalDebit: number) {
    setItem("newTotalDebit", newTotalDebit);
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      totalDebit: newTotalDebit,
    }));
  }

  function addNewPaymentAmount(
    type: string,
    amount: number,
    installment: number
  ) {
    const newPaymentMethod = {
      type,
      amount,
      installment,
    };

    const updatedPaymentMethods = [
      ...paymentInfo.paymentMethods,
      newPaymentMethod,
    ];

    const restAmount = selectedAmount - amount;

    if (restAmount > 0) {
      const cardPaymentMethod = {
        type: "credit",
        amount: restAmount,
        installment: selectedInstallment - 1,
      };
      updatedPaymentMethods.push(cardPaymentMethod);
    }

    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      paymentMethods: updatedPaymentMethods,
    }));
  }

  console.log(paymentInfo);

  return (
    <AmountContext.Provider
      value={{
        selectedAmount,
        updateAmount,
        totalDebits,
        selectedInstallment,
        updateInstallment,
        totalAmount,
        addNewPaymentAmount,
        updateTotalDebit,
        paymentInfo,
        installments,
        interestRate,
        cetFee,
      }}
    >
      {children}
    </AmountContext.Provider>
  );
};

export { AmountContext, AmountProvider };
