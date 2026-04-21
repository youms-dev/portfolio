"use client";

import "@/app/lib/i18n";
import { ReactNode, useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { LANGUAGE_STORAGE } from "../constants/local-storage";

interface Props {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: Props) => {
    const { i18n } = useTranslation();
    const lngTab = ["en", "fr"];

    useEffect(() => {
        const lng = navigator.language.split("-").shift()?.toLowerCase() ?? "en";
        const lngSaved = localStorage.getItem(LANGUAGE_STORAGE);

        if (lngSaved && lngTab.includes(lngSaved)) {
            i18n.changeLanguage(lngSaved);
        }
        else {
            if (lngTab.includes(lng)) {
                i18n.changeLanguage(lng);
            }
            else {
                i18n.changeLanguage("en");
            }
        }
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}