"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { THEME_STORAGE } from "../constants/local-storage";

type ThemeType = "light" | "dark";
type ContextType = {
    theme: ThemeType;
    target: ThemeType | "system";
    setTheme: (value: ThemeType | "system") => void;
}

const Context = createContext<ContextType>({
    theme: "dark",
    target: "system",
    setTheme: () => null,
});

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<ThemeType>("dark");
    const [target, setTarget] = useState<ThemeType | "system">("system");

    const setThemeSystem = () => {
        const root = document.querySelector("html") as HTMLElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        if (root) {
            if (mediaQuery.matches) {
                root.classList.remove("light");
                root.classList.add("dark");
                setTheme("dark");
            }
            else {
                root.classList.remove("dark");
                root.classList.add("light");
                setTheme("light");
            }
            setTarget("system");
        }
    }

    const handleTheme = (value: ThemeType | "system") => {
        const root = document.querySelector("html") as HTMLElement;

        if (root) {
            if (value === "dark") {
                root.classList.remove("light");
                root.classList.add("dark");
                localStorage.setItem(THEME_STORAGE, value);
                setTheme("dark");
                setTarget("dark");
            }
            else if (value === "light") {
                root.classList.remove("dark");
                root.classList.add("light");
                localStorage.setItem(THEME_STORAGE, value);
                setTheme("light");
                setTarget("light");
            }
            else {
                localStorage.removeItem(THEME_STORAGE);
                setTarget("system");
                setThemeSystem();
            }
        }
    }

    useEffect(() => {
        const root = document.querySelector("html") as HTMLElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const getThemeSaved = () => {
            const themeSaved = localStorage.getItem(THEME_STORAGE);

            if (themeSaved && root) {
                if (themeSaved === "dark") {
                    root.classList.remove("light");
                    root.classList.add("dark");
                    setTheme("dark");
                    setTarget("dark");
                }
                else {
                    root.classList.remove("dark");
                    root.classList.add("light");
                    setTheme("light");
                    setTarget("light");
                }
            }
            else {
                setThemeSystem();
            }
        }

        const onMediaQueryChange = () => {
            if (target === "system") {
                setThemeSystem();
            }
        }

        getThemeSaved();
        mediaQuery.addEventListener("change", onMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", onMediaQueryChange);
    }, []);

    return (
        <Context.Provider
            value={{
                theme,
                target,
                setTheme: handleTheme,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useTheme = () => useContext(Context);