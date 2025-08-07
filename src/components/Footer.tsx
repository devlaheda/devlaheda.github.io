import type { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="py-8 border-t border-gray-700/50">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {t("name")}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
