import { Monitor, Smartphone } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const [t] = useTranslation("common");
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">
          {t("about.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 border border-cyan-400/30 rounded hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">
                  {t("about.experience")}
                </div>
              </div>
              <div className="p-4 border border-cyan-400/30 rounded hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-400">
                  {t("about.projects")}
                </div>
              </div>
              <div className="p-4 border border-cyan-500/30 rounded hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-sm text-gray-400">
                  {t("about.clients")}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20 hover:border-purple-400/40 transition-all duration-500">
              <Monitor className="w-24 h-24 text-cyan-400/70" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center border border-purple-400/20">
              <Smartphone className="w-16 h-16 text-purple-400/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
