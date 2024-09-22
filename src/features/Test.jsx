import { useTranslation } from "react-i18next";
const Test = () => {
  const { t } = useTranslation();
  return <div className="p-3 text-2xl sm:text-5xl">{t("test")}</div>;
};

export default Test;
