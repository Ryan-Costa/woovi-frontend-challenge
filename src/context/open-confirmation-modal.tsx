import React, { createContext, useState } from "react";

interface OpenConfirmationModalType {
  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenConfirmationModalContext = createContext<OpenConfirmationModalType>(
  {} as OpenConfirmationModalType
);

const OpenConfirmationModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  return (
    <OpenConfirmationModalContext.Provider
      value={{
        isConfirmationModalOpen,
        setIsConfirmationModalOpen,
      }}
    >
      {children}
    </OpenConfirmationModalContext.Provider>
  );
};

export { OpenConfirmationModalContext, OpenConfirmationModalProvider };
