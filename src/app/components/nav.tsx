"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { FaCheck, FaCodeBranch, FaGear, FaGlobe, FaHouseUser, FaMoon, FaPhone, FaSun } from "react-icons/fa6";
import { LANGUAGE_STORAGE } from "../constants/local-storage";
import { useTheme } from "../hooks/use-theme";
import { Box } from "./box";
import { Component } from "./component";

interface Props {
    name: string;
    href?: string;
    activeName?: string;
    Icon: IconType;
}

const NavLink = ({ name, href, activeName, Icon }: Props) => {
    const pathname = usePathname();

    return (
        <Link
            href={href ? href : `/${name}`}
            className={clsx(
                "group",
                "transition-default relative flex items-center gap-3 lg:text-lg max-md:text-lg active:[transform:_scale(.9)_!important] before:transition-default before:absolute before:-left-[15%] before:-top-[2px] before:h-[105%] before:rounded-xl dark:before:bg-white/15 before:bg-black/15 max-md:before:bg-white/15 after:transition-default after:absolute after:left-0 after:-bottom-1 after:h-[2px] dark:after:bg-white/80 after:bg-black/80 max-md:after:bg-white/70",
                pathname === (activeName ? activeName : `/${name}`) ? "lg:hover:scale-95 before:w-[130%] after:w-full lg:hover:before:w-0 lg:hover:after:w-0" : "before:w-0 after:w-0 lg:hover:before:w-[130%] lg:hover:after:w-full",
            )}
        >
            <Icon className={clsx(
                "transition-default text-xl",
                pathname === (activeName ? activeName : `/${name}`) ? "max-md:text-white/70 dark:lg:group-hover:text-white lg:group-hover:text-black" : "max-md:text-white/70",
            )} />
            <Component
                component="span"
                className={clsx(
                    "transition-default",
                    pathname === (activeName ? activeName : `/${name}`) ? "max-md:text-white/70 font-bold dark:lg:group-hover:text-white lg:group-hover:text-black lg:group-hover:font-semibold" : "max-md:text-white/70",
                )}>
                {name}
            </Component>
        </Link>
    );
};

export const Nav = () => {
    const [progressWidth, setProgressWidth] = useState<string>("0%");
    const { theme, setTheme } = useTheme();
    const [themeIcon, setThemeIcon] = useState<{ value: IconType }>({
        value: FaGear,
    });
    const [navShadow, setNavShadow] = useState<boolean>(false);
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const { t, i18n } = useTranslation();
    const lngTab = ["en", "fr"];
    const [lngTarget, setLngTarget] = useState<string | null>(null);

    useEffect(() => {
        const rootView = document.documentElement;
        const handleProgress = () => {
            const value = Math.ceil((rootView.scrollTop / (rootView.scrollHeight - rootView.clientHeight)) * 100) + "%";

            setProgressWidth(value);
        }

        handleProgress();
        window.addEventListener("scroll", handleProgress);

        return () => window.removeEventListener("scroll", handleProgress);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            setThemeIcon({
                value: FaMoon,
            });
        }
        else {
            setThemeIcon({
                value: FaSun,
            });
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setNavShadow(true);
            }
            else {
                setNavShadow(false);
            }
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const changeLanguage = (value: string | undefined = undefined) => {
        if (value) {
            i18n.changeLanguage(value);
            localStorage.setItem(LANGUAGE_STORAGE, value);
            setLngTarget(value);
        }
        else {
            const lng = navigator.language.split("-").shift()?.toLowerCase() ?? "en";

            if (lngTab.includes(lng)) i18n.changeLanguage(lng);
            else i18n.changeLanguage("en");
            localStorage.removeItem(LANGUAGE_STORAGE);
            setLngTarget(null);
        }
    }

    useEffect(() => {
        const lng = localStorage.getItem(LANGUAGE_STORAGE);

        if (lng && lngTab.includes(lng)) {
            i18n.changeLanguage(lng);
            setLngTarget(lng);
        }
        else {
            setLngTarget(null);
        }
    }, [i18n]);

    return (
        <nav
            className={clsx(
                "transition-default fixed left-0 top-0 w-full h-18 flex items-center dark:bg-black bg-white z-50 lg:px-5 min-[500px]:px-3 border-b dark:border-b-white/50 border-b-black/20",
                navShadow && "shadow-lg dark:shadow-white/15 shadow-black/20",
            )}
        >
            <span
                className="transition-default absolute left-0 bottom-0 h-[5px] bg-linear-to-r dark:from-black from-white/80 dark:to-white/80 to-black/80 rounded-r-4xl"
                style={{
                    width: progressWidth,
                }}
            />

            <div className="transition-default w-max h-full flex items-center shrink-0 max-md:gap-3">
                <Link
                    href="/"
                    className="transition-default relative size-15 max-md:hidden rounded-full"
                >
                    <Image
                        src={"/img/logo.webp"}
                        alt="Logo"
                        fill
                        priority
                        sizes="(max-width: 800px) 50vw, 100vw"
                        className="transition-default rounded-full"
                    />
                </Link>

                <Link
                    href="/"
                    className="transition-default relative bottom-2 md:text-2xl min-[500px]:text-xl text-base font-extrabold text-transparent bg-clip-text bg-linear-to-br dark:from-white from-black/80 dark:via-white/10 dark:via-50% via-black/30 via-60% dark:to-white dark:to-100% to-black/80 to-80% max-[500px]:translate-y-2 font-[papyrus_!important] dark:lg:hover:text-white/80 lg:hover:text-black/80 before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-2/3 before:h-[2px] dark:before:bg-linear-to-br before:bg-linear-to-r dark:before:from-white/80 before:from-black/80 dark:before:via-black/30 before:via-black/10 dark:before:to-white/80 before:to-black/80 dark:lg:hover:before:bg-white/80 lg:hover:before:bg-black/80 after:transition-default after:absolute after:left-0 after:-bottom-3 after:w-1/3 after:h-[2px] dark:after:bg-linear-to-br after:bg-linear-to-r dark:after:from-white/80 after:from-black/80 dark:after:via-black/30 after:via-black/20 dark:after:to-white/80 after:to-black/80 dark:lg:hover:after:bg-white/80 lg:hover:after:bg-black/80"
                >
                    Youms&rsquo;s portfolio
                </Link>
            </div>

            <div className={clsx(
                "group/menu",
                "transition-default max-md:absolute max-md:right-0 max-md:top-18 md:w-full min-[370px]:w-[320px] w-[90%] md:h-full h-[calc(100vh-72px)] flex max-md:flex-col items-center max-md:z-50 max-md:bg-black/80 max-md:backdrop-blur-[300px] max-md:rounded-s-[50px]",
                menuActive ? "max-md:translate-x-0 menu-active" : "max-md:translate-x-full"
            )}>
                <div className={clsx(
                    "scrollbar-invisible group/menu",
                    "transition-default w-full h-full flex max-md:flex-col justify-end max-md:justify-start items-center md:gap-13 gap-15 max-md:py-5 max-md:overflow-y-auto max-md:overscroll-contain",
                )}>
                    <div className="transition-default max-md:translate-x-[calc(100vw+10px)] max-md:group-[.menu-active]/menu:translate-x-0 max-md:group-[.menu-active]/menu:delay-150">
                        <NavLink
                            href="/"
                            name={t("home")}
                            activeName="/"
                            Icon={FaHouseUser}
                        />
                    </div>

                    <div className="transition-default max-md:translate-x-[calc(100vw+10px)] max-md:group-[.menu-active]/menu:translate-x-0 max-md:group-[.menu-active]/menu:delay-300">
                        <NavLink
                            href="/projects"
                            name={t("projects")}
                            activeName="/projects"
                            Icon={FaCodeBranch}
                        />
                    </div>

                    <div className="transition-default max-md:translate-x-[calc(100vw+10px)] max-md:group-[.menu-active]/menu:translate-x-0 max-md:group-[.menu-active]/menu:delay-400">
                        <NavLink
                            href="/contact"
                            name={t("contact")}
                            Icon={FaPhone}
                        />
                    </div>
                </div>

                <div className="transition-default relative w-full md:hidden flex justify-center items-center shrink-0 max-md:gap-3  border-t-black/20 py-4 max-md:translate-y-[calc(100%+10%)] max-md:group-[.menu-active]/menu:translate-y-0 max-md:group-[.menu-active]/menu:delay-600 before:transition-default before:absolute before:-top-[2px] before:w-2/3 before:h-[2px] before:bg-white/20">
                    <span
                        className="transition-default font-['papyrus'] text-2xl max-md:text-xl font-extrabold text-transparent bg-clip-text dark:bg-linear-to-br bg-linear-to-r from-white/80 via-white/10 via-50% to-white/80 to-100% cursor-default"
                    >
                        &copy; Youms&rsquo;s portfolio {new Date().getFullYear()}
                    </span>
                </div>
            </div>

            <div className="transition-default max-md:w-full h-full flex justify-end items-center  gap-5 px-2 pl-10">
                <div className={clsx(
                    "group/parent",
                    "transition-default relative",
                )}
                >
                    <div className="transition-default relative flex items-center gap-2 cursor-pointer">
                        <FaGlobe className={clsx(
                            "transition-default text-2xl cursor-pointer",
                            theme === "dark" ? "text-white/80" : "text-black/80",
                        )} />

                        <span className="transition-default text-lg first-letter:uppercase">
                            {i18n.language}
                        </span>
                    </div>

                    <Box
                        gap={10}
                        left={20}
                    >
                        <div
                            onClick={() => changeLanguage(undefined)}
                            className={clsx(
                                "group",
                                "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer"
                            )}
                        >
                            <span className="transition-default text-white/80">
                                {t("system")}
                            </span>

                            <FaCheck className={clsx(
                                "transition-default text-xl text-white/80",
                                lngTarget == null ? "opacity-100" : "opacity-0 lg:group-hover:opacity-60"
                            )} />
                        </div>

                        <div
                            onClick={() => changeLanguage("fr")}
                            className={clsx(
                                "group",
                                "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer"
                            )}
                        >
                            <span className="transition-default text-white/80">
                                {t("french")}
                            </span>

                            <FaCheck className={clsx(
                                "transition-default text-xl text-white/80",
                                lngTarget == "fr" ? "opacity-100" : "opacity-0 lg:group-hover:opacity-60"
                            )} />
                        </div>
                        <div
                            onClick={() => changeLanguage("en")}
                            className={clsx(
                                "group",
                                "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer"
                            )}
                        >
                            <span className="transition-default text-white/80">
                                {t("english")}
                            </span>

                            <FaCheck className={clsx(
                                "transition-default text-xl text-white/80",
                                lngTarget == "en" ? "opacity-100" : "opacity-0 lg:group-hover:opacity-60"
                            )} />
                        </div>
                    </Box>
                </div>

                <div className={clsx(
                    "group/parent",
                    "transition-default relative",
                )}
                >
                    <div className="transition-default relative perspective-distant">
                        <themeIcon.value
                            className={clsx(
                                "transition-default text-2xl cursor-pointer",
                                theme === "dark" ? "text-white/80" : "text-black/80",
                            )}
                        />
                        <span
                            className={clsx(
                                "transition-default absolute left-[2px] -bottom-5 size-5 rotate-x-80 blur-sm",
                                theme === "dark" ? "bg-white/80" : "bg-black/80",
                            )}
                        />
                    </div>

                    <Box gap={10}>
                        <div
                            onClick={() => setTheme("system")}
                            className={clsx(
                                "group",
                                "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] dark:before:bg-gray-400 before:bg-gray-400 lg:hover:before:w-full"
                            )}
                        >
                            <span className="transition-default text-white/80 lg:group-hover:text-gray-400">Système</span>
                            <FaGear
                                className="transition-default text-xl text-gray-400 group-hover:scale-120 group-active:scale-90"
                            />
                        </div>

                        <div
                            onClick={() => setTheme("light")}
                            className={clsx(
                                "group",
                                "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-amber-400/60 lg:hover:before:w-full"
                            )}>
                            <span className="transition-default text-white/80 lg:group-hover:text-amber-400">Clair</span>
                            <FaSun
                                className="transition-default text-xl text-amber-400 group-hover:scale-120 group-active:scale-90"
                            />
                        </div>

                        <div
                            onClick={() => setTheme("dark")}
                            className={clsx(
                                "group",
                                "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] dark:before:bg-white/50 before:bg-black lg:hover:before:w-full"
                            )}
                        >
                            <span className="transition-default text-white/80 lg:group-hover:text-white">Sombre</span>
                            <FaMoon
                                className="transition-default text-xl text-white/80 group-hover:scale-120 group-active:scale-90 lg:group-hover:text-white"
                            />
                        </div>
                    </Box>
                </div>

                <div className="transition-default relative h-full md:hidden flex justify-center items-center">
                    <div
                        onClick={() => setMenuActive(!menuActive)}
                        className={clsx(
                            "transition-default flex flex-col gap-2 rounded-xl p-3 py-[10px] perspective-distant cursor-pointer active:scale-90"
                        )}
                    >
                        <div className={clsx(
                            "transition-default w-5 h-[2px] dark:bg-white bg-black",
                            menuActive ? "rotate-45 translate-y-[5px]" : "",
                        )} />
                        <div className={clsx(
                            "transition-default h-[2px] dark:bg-white bg-black self-end",
                            menuActive ? "w-5 -rotate-45 translate-y-[-5px]" : "w-3",
                        )} />
                    </div>
                    <span
                        className={clsx(
                            "transition-default absolute left-3.5 bottom-[3.5px] size-5 rotate-x-80 blur-sm dark:bg-white/80 bg-black/80"
                        )}
                    />
                </div>
            </div>
        </nav>
    );
}