import { useTranslation } from "react-i18next";
import { Globe, Menu, X } from "lucide-react";
import LanguageSelect from "./Select/LanguageSelect";
import { useEffect, useState } from "react";
import { getDir, setDir, setLang } from "../utils/LanguageUtils";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setLang(i18n.language.split("-")[0]);
    setDir(getDir(i18n.language.split("-")[0]));
  }, [i18n.language]);

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
    <header className="sticky top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-400 hover:text-purple-400 transition-colors cursor-pointer">
          &lt;{t("name").split(" ")[0]}/&gt;
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={`/#${link.id}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {t(`nav.${link.id}`)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Globe className="w-4 h-4 text-purple-400" />
          {!isMobileMenuOpen && (
            <LanguageSelect
              onChangeLanguage={changeLanguage}
              currentLanguage={i18n.language.split("-")[0]}
            />
          )}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-900 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={`/#${link.id}`}
              className="hover:text-cyan-400 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              {t(`nav.${link.id}`)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
