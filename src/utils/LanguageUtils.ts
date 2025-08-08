interface LocaleWithTextInfo extends Intl.Locale {
  textInfo: { direction: "ltr" | "rtl" };
}
const supportedRtlLangueges = ["ar", "he"];
export const isRTL = (lang: string) => {
  try {
    const locale = new Intl.Locale(lang) as LocaleWithTextInfo;
    return locale.textInfo.direction === "rtl";
  } catch {
    return supportedRtlLangueges.includes(lang);
  }
};
export const getDir = (lang: string): "ltr" | "rtl" => {
  try {
    const locale = new Intl.Locale(lang) as LocaleWithTextInfo;
    // I had compatibity issues with this only chromium based browsers support it for now
    return locale.textInfo.direction === "rtl" ? "rtl" : "ltr";
  } catch {
    // I added this beacause fireFox does not support locale.textInfo for now
    return supportedRtlLangueges.includes(lang) ? "rtl" : "ltr";
  }
};
export const setDir = (dir: string): void => {
  document.documentElement.dir = dir;
};
export const setLang = (lang: string): void => {
  document.documentElement.lang = lang;
};
