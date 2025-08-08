import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const [t] = useTranslation("common");
  const getGridItemColor = (index: number): string => {
    if (index % 3 === 0) return "bg-cyan-400/20";
    if (index % 3 === 1) return "bg-purple-400/20";
    return "bg-blue-400/20";
  };
  const scrollToSection = (sectionId: Section): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12  gap-4 transform rotate-20 scale-100">
          {Array.from({ length: 144 }).map((_, i: number) => (
            <div
              key={i}
              className={`aspect-square animate-pulse ${getGridItemColor(i)}`}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-cyan-400 mb-2">
            {t("welcom_message")}
          </div>
          <h1 className="text-4xl [:lang(ar)]:min-h-18 md:text-6xl font-bold mb-4 text-gray-100 overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 animate-pulse">
            {t("name")}
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-400 mb-6">
            {t("tagline")}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/devlaheda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors focus:outline-none focus:text-purple-400 focus:scale-110 transform duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lahcen-edaif/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors focus:outline-none focus:text-purple-400 focus:scale-110 transform duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mail@mail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors focus:outline-none focus:text-purple-400 focus:scale-110 transform duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => {
            scrollToSection("about");
          }}
          className="animate-bounce hover:text-cyan-400 focus:outline-none focus:text-purple-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};
export default Hero;
