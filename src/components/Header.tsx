import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

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
  const changeLanguage = (lng: string) => {
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
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-800 border border-cyan-500/40 rounded px-2 py-1 text-sm focus:outline-none focus:border-purple-400 text-gray-300 cursor-pointer"
          >
            <option value="en">&#x1F1EC;&#x1F1E7;</option>
            <option value="fr">&#x1F1EB;&#x1F1F7;</option>
            <option value="es"> &#x1F1EA;&#x1F1F8;</option>
            <option value="ar">&#x1F1F8;&#x1F1E6;</option>
            <option value="he">✡︎</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
