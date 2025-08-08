import FR from "../assets/flags/FR.svg";
import ES from "../assets/flags/ES.svg";
import GB from "../assets/flags/GB.svg";
import SA from "../assets/flags/SA.svg";
import HE from "../assets/flags/HE.svg";
export interface LanguageOption {
  value: string;
  icon: string; // 'any' for image imports, string for emoji/symbols
  label: string;
}
export const SupportedLanguages: LanguageOption[] = [
  {
    value: "en",
    icon: GB,
    label: "English",
  },
  {
    value: "fr",
    icon: FR,
    label: "Français",
  },
  {
    value: "ar",
    icon: SA,
    label: "العربية",
  },
  {
    value: "es",
    icon: ES,
    label: "Español",
  },
  {
    value: "he",
    icon: HE,
    label: "עברית",
  },
];
