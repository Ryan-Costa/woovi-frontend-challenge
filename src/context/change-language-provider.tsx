import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

interface ChangeLanguageType {
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
  handleChangeLanguage: () => void;
}

const ChangeLanguageContext = createContext<ChangeLanguageType>(
  {} as ChangeLanguageType
);

const ChangeLanguageProvider = ({ children }: { children: ReactNode }) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  function handleChangeLanguage() {
    changeLanguage(currentLanguage === "pt" ? "en" : "pt");
    setCurrentLanguage(currentLanguage === "pt" ? "en" : "pt");
  }

  return (
    <ChangeLanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        handleChangeLanguage,
      }}
    >
      {children}
    </ChangeLanguageContext.Provider>
  );
};

export { ChangeLanguageContext, ChangeLanguageProvider };
