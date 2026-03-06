"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaBars, FaCodeBranch, FaGear, FaHouseUser, FaMoon, FaPhone, FaSun, FaXmark } from "react-icons/fa6";
import { useTheme } from "../hooks/use-theme";

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
                "transition-default relative flex items-center gap-3 lg:text-lg max-md:text-lg active:[transform:_scale(.9)_!important] before:transition-default before:absolute before:-left-[15%] before:-top-[2px] before:h-[105%] dark:before:bg-blue-200/20 before:bg-cyan-500/20 after:transition-default after:absolute after:left-0 after:-bottom-1 after:h-[2px] dark:after:bg-blue-200 after:bg-cyan-500",
                pathname === (activeName ? activeName : `/${name}`) ? "lg:hover:scale-95 before:w-[130%] after:w-full lg:hover:before:w-0 lg:hover:after:w-0" : "before:w-0 after:w-0 lg:hover:before:w-[130%] lg:hover:after:w-full"
            )}
        >
            <Icon
                className={clsx(
                    "transition-default text-xl",
                    pathname === (activeName ? activeName : `/${name}`) ? "dark:text-blue-200 text-cyan-500 dark:lg:group-hover:text-white lg:group-hover:text-black" : "dark:lg:group-hover:text-blue-200 lg:group-hover:text-cyan-500"
                )}
            />
            <span className={clsx(
                "transition-default",
                pathname === (activeName ? activeName : `/${name}`) ? "dark:text-blue-200 text-cyan-500 font-bold dark:lg:group-hover:text-white lg:group-hover:text-black lg:group-hover:font-semibold" : "dark:lg:group-hover:text-blue-200 lg:group-hover:text-cyan-500"
            )}>
                {name}
            </span>
        </Link>
    );
};

export const Nav = () => {
    const [progressWidth, setProgressWidth] = useState<string>("0%");
    const { theme, target, setTheme } = useTheme();
    const [themeIcon, setThemeIcon] = useState<{ value: IconType }>({
        value: FaGear,
    });
    const [navShadow, setNavShadow] = useState<boolean>(false);
    const [menuActive, setMenuActive] = useState<boolean>(false);

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
        if (target === "dark") {
            setThemeIcon({
                value: FaMoon,
            });
        }
        else if (target === "light") {
            setThemeIcon({
                value: FaSun,
            });
        }
        else {
            setThemeIcon({
                value: FaGear,
            });
        }
    }, [target]);

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

    return (
        <nav
            className={clsx(
                "transition-default fixed left-0 top-0 w-full h-18 flex items-center dark:bg-black bg-white z-50 lg:px-5 min-[500px]:px-3 border-b dark:border-b-white/50 border-b-black/20",
                navShadow && "shadow-lg dark:shadow-white/15 shadow-black/20",
            )}
        >
            <span
                className="transition-default absolute left-0 bottom-0 h-[5px] bg-linear-to-r from-black dark:to-blue-200 to-cyan-500 rounded-r-4xl"
                style={{
                    width: progressWidth,
                }}
            ></span>

            <div className="transition-default w-max h-full flex items-center shrink-0 max-md:gap-3">
                <div className="transition-default relative size-15 rounded-full">
                    <Image
                        src={"/img/logo.webp"}
                        alt="Logo"
                        fill
                        priority
                        sizes="(max-width: 800px) 50vw, 100vw"
                        className="transition-default rounded-full"
                    />
                </div>

                <Link
                    href="/"
                    className="transition-default relative bottom-2 font-['papyrus'] text-2xl max-md:text-xl font-extrabold text-transparent bg-clip-text dark:bg-linear-to-br bg-linear-to-r dark:from-blue-200 from-cyan-500 dark:via-white/30 via-black dark:to-blue-200 to-cyan-500 dark:lg:hover:text-blue-200 lg:hover:text-cyan-500 before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-2/3 before:h-[2px] dark:before:bg-linear-to-br before:bg-linear-to-r dark:before:from-blue-200 before:from-cyan-500 dark:before:via-white/30 before:via-black dark:before:to-blue-200 before:to-cyan-500 dark:lg:hover:before:bg-blue-200 lg:hover:before:bg-cyan-500 after:transition-default after:absolute after:left-0 after:-bottom-3 after:w-1/3 after:h-[2px] dark:after:bg-linear-to-br after:bg-linear-to-r dark:after:from-blue-200 after:from-cyan-500 dark:after:via-white/30 after:via-black dark:after:to-blue-200 after:to-cyan-500 dark:lg:hover:after:bg-blue-200 lg:hover:after:bg-cyan-500"
                >
                    Youms&rsquo;s portfolio
                </Link>
            </div>

            <div className={clsx(
                "group/menu",
                "transition-default max-md:absolute max-md:right-0 max-md:top-18 md:w-full min-[370px]:w-[300px] w-[90%] md:h-full h-[calc(100vh-72px)] flex max-md:flex-col items-center max-md:z-50 max-md:border-l-2 dark:max-md:border-white/20 dark:max-md:shadow-[-3px_5px_10px_white]/80 max-md:shadow-[-3px_10px_10px_black]/70 dark:max-md:bg-black/85 max-md:bg-white/90",
                menuActive ? "max-md:translate-x-0 menu-active" : "max-md:translate-x-[calc(100vw*2)]"
            )}>
                <div className={clsx(
                    "scrollbar-invisible group/menu",
                    "transition-default w-full h-full flex max-md:flex-col justify-end max-md:justify-start items-center md:gap-20 gap-15 max-md:py-5 max-md:overflow-y-auto max-md:overscroll-contain",
                )}>
                    <div className="transition-default max-md:translate-x-[calc(100vw+10px)] max-md:group-[.menu-active]/menu:translate-x-0 max-md:group-[.menu-active]/menu:delay-150">
                        <NavLink
                            name="Accueil"
                            href="/"
                            activeName="/"
                            Icon={FaHouseUser}
                        />
                    </div>

                    <div className="transition-default max-md:translate-x-[calc(100vw+10px)] max-md:group-[.menu-active]/menu:translate-x-0 max-md:group-[.menu-active]/menu:delay-250">
                        <NavLink
                            href="/projects"
                            name="projets"
                            activeName="/projects"
                            Icon={FaCodeBranch}
                        />
                    </div>

                    <div className="transition-default max-md:translate-x-[calc(100vw+10px)] max-md:group-[.menu-active]/menu:translate-x-0 max-md:group-[.menu-active]/menu:delay-350">
                        <NavLink
                            href="/contact"
                            name="contact"
                            Icon={FaPhone}
                        />
                    </div>

                    <div className={clsx(
                        "group/themeIcon",
                        "transition-default relative max-md:hidden",
                    )}
                    >
                        <div className="transition-default relative perspective-distant">
                            <themeIcon.value
                                className={clsx(
                                    "transition-default text-2xl cursor-pointer",
                                    target === "dark" && "text-white",
                                    target === "light" && "text-amber-400",
                                    target === "system" && "text-gray-400",
                                )}
                            />
                            <span
                                className={clsx(
                                    "transition-default absolute left-[2px] -bottom-5 size-5 rotate-x-60 blur-xs",
                                    target === "dark" && "bg-white/80",
                                    target === "light" && "bg-amber-400/40",
                                    target === "system" && "bg-gray-400",
                                )}
                            />
                        </div>

                        <div className="transition-default absolute -right-3 -bottom-43 w-50 pt-10 pb-1 pointer-events-none opacity-0  group-hover/themeIcon:animate-[animatedMenu_.3s_1_ease-in-out] group-hover/themeIcon:opacity-100 group-hover/themeIcon:pointer-events-auto">
                            <div className="transition-default w-full flex flex-col items-center gap-3 border dark:border-white/20 border-black/20 p-4 rounded-xl dark:bg-gray-950 bg-white shadow-lg dark:shadow-white/20 shadow-black/50">
                                <div className="transition-default absolute right-0 top-0 -translate-x-3 translate-y-8 size-6 dark:bg-gray-600 bg-white border dark:border-wite/20 border-black/20 -rotate-45 -z-10"></div>
                                <div
                                    onClick={() => setTheme("system")}
                                    className={clsx(
                                        "group",
                                        "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] dark:before:bg-white/50 before:bg-gray-400 lg:hover:before:w-full"
                                    )}
                                >
                                    <span className="transition-default dark:text-white text-black">Système</span>
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
                                    <span className="transition-default dark:text-white text-black">Clair</span>
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
                                    <span className="transition-default dark:text-white text-black">Sombre</span>
                                    <FaMoon
                                        className="transition-default text-xl dark:text-white text-black group-hover:scale-120 group-active:scale-90"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="transition-default relative w-full md:hidden flex justify-center items-center shrink-0 max-md:gap-3  border-t-black/20 py-4 max-md:translate-y-[calc(100%+10%)] max-md:group-[.menu-active]/menu:translate-y-0  max-md:group-[.menu-active]/menu:delay-500 before:transition-default before:absolute before:-top-[2px] before:w-2/3 before:h-[2px] dark:before:bg-white/50 before:bg-black/50">
                    <span
                        className="transition-default font-['papyrus'] text-2xl max-md:text-xl font-extrabold text-transparent bg-clip-text dark:bg-linear-to-br bg-linear-to-r dark:from-blue-200 from-cyan-500 dark:via-white/30 via-black dark:to-blue-200 to-cyan-500 dark:lg:hover:text-blue-200 lg:hover:text-cyan-500"
                    >
                        &copy; Youms&rsquo;s portfolio {new Date().getFullYear()}
                    </span>
                </div>
            </div>

            <div className="transition-default w-full h-full min-md:hidden flex justify-end items-center min-[500px]:gap-8 gap-5 px-2 pl-10">
                <div className={clsx(
                    "group/themeIcon",
                    "transition-default relative",
                )}
                >
                    <div className="transition-default relative perspective-distant">
                        <themeIcon.value
                            className={clsx(
                                "transition-default text-2xl cursor-pointer",
                                target === "dark" && "text-white",
                                target === "light" && "text-amber-400",
                                target === "system" && "text-gray-400",
                            )}
                        />
                        <span
                            className={clsx(
                                "transition-default absolute left-[2px] -bottom-5 size-5 rotate-x-60 blur-xs",
                                target === "dark" && "bg-white/80",
                                target === "light" && "bg-amber-400/40",
                                target === "system" && "bg-gray-400",
                            )}
                        />
                    </div>
                    <div className="transition-default absolute -right-3 -bottom-43 w-50 pt-10 pb-1 pointer-events-none opacity-0  group-hover/themeIcon:animate-[animatedMenu_.3s_1_ease-in-out] group-hover/themeIcon:opacity-100 group-hover/themeIcon:pointer-events-auto">
                        <div className="transition-default w-full flex flex-col items-center gap-3 border dark:border-white/20 border-black/20 p-4 rounded-xl dark:bg-gray-950 bg-white shadow-lg dark:shadow-white/20 shadow-black/50">
                            <div className="transition-default absolute right-0 top-0 -translate-x-3 translate-y-8 size-6 dark:bg-gray-600 bg-white border dark:border-wite/20 border-black/20 -rotate-45 -z-10"></div>
                            <div
                                onClick={() => setTheme("system")}
                                className={clsx(
                                    "group",
                                    "transition-default relative w-full flex justify-between items-center gap-4 cursor-pointer before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] dark:before:bg-white/50 before:bg-gray-400 lg:hover:before:w-full"
                                )}
                            >
                                <span className="transition-default dark:text-white text-black">Système</span>
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
                                <span className="transition-default dark:text-white text-black">Clair</span>
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
                                <span className="transition-default dark:text-white text-black">Sombre</span>
                                <FaMoon
                                    className="transition-default text-xl dark:text-white text-black group-hover:scale-120 group-active:scale-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition-default relative h-full flex justify-center items-center">
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
                            "transition-default absolute left-3.5 bottom-[3.5px] size-5 rotate-x-60 blur-xs dark:bg-white/70 bg-black/30"
                        )}
                    />
                </div>
            </div>
        </nav>
    );
}