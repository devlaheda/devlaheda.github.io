import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import LanguageSelect from "./Select/LanguageSelect";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  interface linkInfo {
    id: string;
  }
  const navLinks: linkInfo[] = [
    {
      id: "home",
    },
    {
      id: "about",
    },
    {
      id: "skills",
    },
    {
      id: "projects",
    },
    {
      id: "contact",
    },
  ];
  const changeLanguage = (lng?: string) => {
    i18n.changeLanguage(lng).catch((err: unknown) => {
      console.log(err);
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-400 hover:text-purple-400 transition-colors cursor-pointer">
          &lt;{t("name").split(" ")[0]}/&gt;
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {t(`nav.${link.id}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Globe className="w-4 h-4 text-purple-400" />
          <LanguageSelect
            onChangeLanguage={changeLanguage}
            currentLanguage={i18n.language.split("-")[0]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
