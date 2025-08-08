interface LocaleWithTextInfo extends Intl.Locale {
  textInfo?: { direction: "ltr" | "rtl" };
}

export const isRTL = (lang: string) => {
  try {
    const locale = new Intl.Locale(lang) as LocaleWithTextInfo;
    return locale.textInfo?.direction === "rtl";
  } catch {
    return false;
  }
};
export const getDir = (lang?: string): "ltr" | "rtl" => {
  try {
    const locale = new Intl.Locale(lang ?? "en") as LocaleWithTextInfo;
    return locale.textInfo?.direction === "rtl" ? "rtl" : "ltr";
  } catch {
    return "ltr";
  }
};
export const setDir = (dir: string): void => {
  document.documentElement.dir = dir;
};
export const setLang = (lang: string): void => {
  document.documentElement.lang = lang;
};
