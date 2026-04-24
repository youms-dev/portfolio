"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGitlab, FaImages, FaInfoCircle, FaRProject } from "react-icons/fa";
import { FaGrip, FaScrollTorah, FaXmark } from "react-icons/fa6";
import { ProjectType } from "../constants/data";
import { Animated } from "../types/enum";
import { Button } from "./button";
import { Carousel } from "./carousel";
import { Component } from "./component";
import { Desc } from "./description";
import { Title } from "./title";

interface Props {
    title: string;
    data: ProjectType[];
    initialMode?: "grid" | "carousel",
}

/**
 * 
 * @param {string} title - Is the title of the project view ;
 * @default undefined
 * 
 * @param {ProjectType[]} data - Is the data of the project view ;
 * @default undefined
 * 
 * @param {"grid" | "carousel"} initialMode - Is the initial mode of the project view ;
 * @default "grid"
 * 
 * @returns {JSX.Element}
 */

export const ProjectView = ({ title, data, initialMode = "grid" }: Props) => {
    const [mode, setMode] = useState<typeof initialMode>(initialMode);
    const ref = useRef<HTMLButtonElement>(null);
    const [text, setText] = useState<string>("Copier le lien");
    let timeout: NodeJS.Timeout;
    const { t } = useTranslation();

    const handleCopy = (text: string) => {
        clearTimeout(timeout);
        navigator.clipboard.writeText(text);
        setText(`${t("copied_link")} ✔️`);
        timeout = setTimeout(() => {
            setText(t("copy_link"));
        }, 2000);
    }

    return (
        <Component
            animated={Animated.SECTION}
            className={clsx(
                "transition-default w-full flex flex-col justify-start items-start dark:bg-black bg-white rounded-3xl px-4 py-4"
            )}
        >
            <Component
                animated={Animated.SECTION}
                className="transition-default mb-10"
            >
                <Title>
                    {title}
                </Title>
            </Component>

            {
                data.map((child) => (
                    <Component
                        animated={Animated.SECTION}
                        key={child.titre}
                        className="transition-default w-full flex flex-col"
                    >
                        <Component
                            animated={Animated.SECTION}
                            className="transition-default relative w-full h-full flex flex-col gap-3 sm:px-10 pl-7 py-5 before:transition-default before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 dark:before:border-white/80 before:border-black/80 before:rounded-full after:transition-all after:duration-500 after:absolute after:left-[9px] after:top-5 after:w-[2px] after:h-[calc(100%-16px)] dark:after:bg-white/80 after:bg-black/80"
                        >
                            <Component
                                animated={Animated.SECTION}
                                className="transition-default flex items-center gap-2 shrink-0"
                            >
                                <Component
                                    component="span"
                                    animated={Animated.LEFT}
                                    className="transition-default flex items-center gap-2"
                                >
                                    <FaRProject
                                        className="transition-default text-xl"
                                    />
                                    <Component
                                        component="span"
                                        className="transition-default"
                                    >
                                        {t("project_name")} :
                                    </Component>
                                </Component>

                                <Component
                                    component="span"
                                    animated={Animated.RIGHT}
                                    className="transition-default dark:text-white text-black"
                                >
                                    {child.titre}
                                </Component>
                            </Component>

                            <Component
                                animated={Animated.SECTION}
                                className="transition-default flex flex-col gap-2"
                            >
                                <Component
                                    animated={Animated.LEFT}
                                    className="transition-default flex justify-start items-center gap-2 shrink"
                                >
                                    <FaInfoCircle className="transition-default text-xl" />
                                    <Component component="span">
                                        {t("project_description")} :
                                    </Component>
                                </Component>

                                <Component animated={Animated.RIGHT}>
                                    <Desc
                                        sentence={child.description}
                                        className="w-full"
                                    />
                                </Component>
                            </Component>
                            {
                                child.link && (
                                    <div className="transition-default w-full flex flex-col gap-2">
                                        <Link
                                            href={child.link}
                                            target="_blank"
                                            className="transition-default w-max font-bold cursor-pointer dark:lg:hover:text-white lg:hover:text-black lg:hover:underline"
                                        >
                                            <Component component="span">
                                                {t("view_project")}
                                            </Component>
                                        </Link>
                                        <div className="transition-default w-full flex max-lg:hidden flex-col gap-2">
                                            <Component
                                                component="span"
                                                className="transition-default font-bold"
                                            >
                                                {t("project_preview")}
                                            </Component>
                                            <iframe src={child.link}
                                                className="transition-default w-full h-150 overflow-hidden pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                child.gitlab
                                &&
                                (
                                    <div className="transition-default relative w-full h-full flex flex-wrap justify-start items-start gap-2">
                                        <div className={clsx(
                                            "parent peer",
                                            "transition-default w-full flex items-center gap-3"
                                        )}>
                                            <div className="transition-default flex justify-start items-center gap-2 shrink-0">
                                                <FaGitlab className="transition-default text-xl" />
                                                <span>Gitlab :</span>
                                            </div>
                                            <span
                                                onClick={(e) => {
                                                    document.querySelectorAll(".parent")?.forEach(item => item.classList.remove("active"));
                                                    e.currentTarget.closest(".parent")?.classList.add("active");
                                                }}
                                                className={clsx(
                                                    "transition-default font-bold truncate cursor-pointer lg:hover:underline lg:hover:dark:text-white lg:hover:text-black"
                                                )}
                                            >
                                                {child.gitlab}
                                            </span>
                                        </div>

                                        <div className={clsx(
                                            "transition-default absolute left-0 translate-y-8 flex flex-col gap-3 dark:bg-white/10 bg-black/70 backdrop-blur-xl border dark:border-white/20 border-black/20 p-3 -z-2 rounded-xl opacity-0 pointer-events-none peer-[.active]:opacity-100 peer-[.active]:pointer-events-auto peer-[.active]:z-2 shadow-lg dark:shadow-white/20 shadow-black/20",
                                        )}>
                                            <div className="transition-default relative w-full flex justify-center items-center px-2">
                                                <FaGitlab
                                                    className="transition-default text-3xl text-white/80"
                                                />
                                                <FaXmark
                                                    onClick={() => document.querySelectorAll(".parent")?.forEach(item => item.classList.remove("active"))}
                                                    className={clsx(
                                                        "transition-default absolute right-2 top-1 text-xl font-extrabold cursor-pointer text-white/80 active:scale-80",
                                                    )}
                                                />
                                            </div>

                                            <div className="transition-default w-max flex flew-wrap items-center gap-5">
                                                <Button
                                                    onClick={() => {
                                                        window.open(child.gitlab, "_blank");
                                                        document.querySelectorAll(".parent")?.forEach(item => item.classList.remove("active"));
                                                    }}
                                                >
                                                    <Component
                                                        component="span"
                                                        className="transition-default dark:text-black/80 text-white/80 font-medium tracking-wider dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80"
                                                    >
                                                        {t("open_link")}
                                                    </Component>
                                                </Button>

                                                <Button
                                                    ref={ref}
                                                    onClick={(e) => handleCopy(child.gitlab ?? "")}
                                                >
                                                    <Component
                                                        component="span"
                                                        className="transition-default dark:text-black/80 text-white/80 font-medium tracking-wider dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80"
                                                    >
                                                        {text}
                                                    </Component>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                child.interfaces
                                &&
                                (
                                    <Component
                                        animated={Animated.SECTION}
                                        className="transition-default w-full flex flex-col gap-2"
                                    >
                                        <span className="transition-default flex items-center gap-2">
                                            <FaImages className="transition-default text-xl" />
                                            <Component component="span">
                                                {t("some_interfaces")} :
                                            </Component>
                                        </span>
                                        <div className="transition-default w-full flex flex-col gap-2 mb-5">
                                            <Component component="span">
                                                {t("mode")}
                                            </Component>
                                            <div className="transition-default flex flex-wrap items-center gap-3">
                                                <div
                                                    onClick={() => setMode("grid")}
                                                    className={clsx(
                                                        "group",
                                                        "transition-default relative w-max flex items-center gap-3 border dark:border-white/20 border-black/20 p-3 rounded-xl cursor-pointer active:scale-90",
                                                        mode === "grid" ? "dark:bg-white/70 bg-black/80 dark:lg:hover:bg-white/5 lg:hover:bg-transparent lg:hover:shadow-lg dark:lg:hover:shadow-white/10 lg:hover:shadow-black/10" : "dark:bg-white/5 bg-transparent lg:hover:shadow-lg dark:lg:hover:shadow-white/20 lg:hover:shadow-black/20 dark:lg:hover:bg-white/70 lg:hover:bg-black/80",
                                                    )}
                                                >
                                                    <FaGrip
                                                        className={clsx(
                                                            "transition-default text-xl",
                                                            mode === "grid" ? "dark:text-black/80 text-white/80 text-white/80k:lg:group-hover:text-white/80 dark:lg:group-hover:text-white/80 lg:group-hover:text-black/80" : "dark:lg:group-hover:text-black/80 lg:group-hover:text-white/80",
                                                        )}
                                                    />
                                                    <Component
                                                        component="span"
                                                        className={clsx(
                                                            "transition-default font-bold",
                                                            mode === "grid" ? "dark:text-black/80 text-white/80 text-white/80k:lg:group-hover:text-white/80 dark:lg:group-hover:text-white/80 lg:group-hover:text-black/80" : "dark:lg:group-hover:text-black/80 lg:group-hover:text-white/80",
                                                        )}
                                                    >
                                                        {t("gallery")}
                                                    </Component>
                                                </div>
                                                <div
                                                    onClick={() => setMode("carousel")}
                                                    className={clsx(
                                                        "group",
                                                        "transition-default relative w-max flex items-center gap-3 border dark:border-white/20 border-black/20 p-3 rounded-xl cursor-pointer active:scale-90",
                                                        mode === "carousel" ? "dark:bg-white/70 bg-black/80 dark:lg:hover:bg-white/5 lg:hover:bg-transparent lg:hover:shadow-lg dark:lg:hover:shadow-white/10 lg:hover:shadow-black/10" : "dark:bg-white/5 bg-transparent lg:hover:shadow-lg dark:lg:hover:shadow-white/20 lg:hover:shadow-black/20 dark:lg:hover:bg-white/70 lg:hover:bg-black/80",
                                                    )}
                                                >
                                                    <FaScrollTorah
                                                        className={clsx(
                                                            "transition-default text-xl",
                                                            mode === "carousel" ? "dark:text-black text-white/80 dark:lg:group-hover:text-white/80 lg:group-hover:text-black/80" : "dark:lg:group-hover:text-black/80 lg:group-hover:text-white/80",
                                                        )}
                                                    />
                                                    <Component
                                                        component="span"
                                                        className={clsx(
                                                            "transition-default font-bold",
                                                            mode === "carousel" ? "dark:text-black text-white/80 dark:lg:group-hover:text-white/80 lg:group-hover:text-black/80" : "dark:lg:group-hover:text-black/80 lg:group-hover:text-white/80",
                                                        )}
                                                    >
                                                        {t("carousel")}
                                                    </Component>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            mode === "grid" && (
                                                <div className={clsx((
                                                    "transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 px-3"
                                                ))}>
                                                    {
                                                        child.interfaces.map((item) => (
                                                            <div
                                                                key={item.titre}
                                                                className="transition-default flex flex-col items-center gap-1 border-2 dark:border-white/20 border-black/20 rounded-2xl dark:bg-white/10 bg-black/20 shadow-lg dark:shadow-white/10 shadow-black/30"
                                                            >
                                                                <div className="transition-default relative w-full h-60 rounded-t-2xl">
                                                                    <Image
                                                                        src={item.link}
                                                                        alt="Img"
                                                                        fill
                                                                        priority
                                                                        placeholder="blur"
                                                                        blurDataURL="/img/logo_blur.webp"
                                                                        className="transition-default rounded-t-2xl"
                                                                    />
                                                                </div>
                                                                <div className="transition-default size-full h-max flex justify-center items-center shrink-0 px-5 py-2">
                                                                    <span className="transition-default dark:text-white text-black font-bold tracking-widest">
                                                                        {item.titre}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }

                                        {
                                            mode === "carousel" && (
                                                <Carousel
                                                    list={child.interfaces}
                                                />
                                            )
                                        }
                                    </Component>
                                )
                            }
                        </Component>
                    </Component>
                ))
            }
        </Component>
    );
}