import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

let isInitialized = false;

export const init = () => {
    if (isInitialized) {
        return;
    }

    i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            debug: true,
            fallbackLng: "en",
            resources: {},
            supportedLngs: ["en", "uk", "ru"]
        });

    isInitialized = true;
};

export const addTranslations = (
    lng: string,
    ns: string,
    resources: unknown,
    deep?: boolean | undefined,
    overwrite?: boolean | undefined
) => {
    init();
    i18next.addResourceBundle(lng, ns, resources, deep, overwrite);
};
