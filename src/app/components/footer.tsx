"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { FaCircleInfo, FaCode, FaGitlab, FaLinkedinIn, FaPhoneVolume, FaRoadCircleCheck, FaUserTie } from "react-icons/fa6";
import { devInfos } from "../constants/data";
import { Component } from "./component";

interface Props {
    name: string;
    href?: string;
    activeName?: string;
    Icon: IconType;
}

/**
 * 
 * @param {string} name - Is the name of the link ;
 * @default undefined
 * 
 * @param {string} href - Is the href of the link ;
 * @default undefined
 * 
 * @param {string} activeName - Is the active name of the link ;
 * @default undefined
 * 
 * @param {IconType} Icon - Is the icon of the link ;
 * @default undefined
 * 
 * @returns {JSX.Element}
 */

const FooterLink = ({ name, href, activeName, Icon }: Props) => {
    const pathname = usePathname();

    return (
        <Link
            href={href ? href : `/${name}`}
            className={clsx(
                "group",
                "transition-default relative w-max flex items-center gap-3 lg:text-lg max-md:text-lg active:[transform:_scale(.9)_!important] before:transition-default before:absolute before:-left-[15%] before:-top-[2px] before:h-[105%] before:rounded-xl dark:before:bg-white/15 before:bg-black/15 after:transition-default after:absolute after:left-0 after:-bottom-1 after:h-[2px] dark:after:bg-white/80 after:bg-black/80 max-md:after:bg-white/70",
                pathname === (activeName ? activeName : `/${name}`) ? "lg:hover:scale-95 before:w-[130%] after:w-full lg:hover:before:w-0 lg:hover:after:w-0" : "before:w-0 after:w-0 lg:hover:before:w-[130%] lg:hover:after:w-full",
            )}
        >
            <Icon className={clsx(
                "transition-default text-xl",
                pathname === (activeName ? activeName : `/${name}`) && "dark:lg:group-hover:text-white lg:group-hover:text-black",
            )} />
            <Component
                component="span"
                className={clsx(
                    "transition-default",
                    pathname === (activeName ? activeName : `/${name}`) && "font-bold dark:lg:group-hover:text-white lg:group-hover:text-black lg:group-hover:font-semibold",
                )}>
                {name}
            </Component>
        </Link>
    );
};

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={clsx(
            "transition-default w-full flex flex-col gap-3 border-t-2 dark:border-t-white/50 border-t-black/50 p-5 dark:shadow-[0_-5px_10px_white]/50 shadow-[0_-5px_10px_black]/50 dark:bg-black bg-white"
        )}>
            <div className={clsx(
                "transition-default w-full flex max-[490px]:flex-wrap items-center gap-3"
            )}>
                <div className={clsx(
                    "section-animate",
                    "transition-default min-[490px]:size-35 w-full flex items-center gap-6"
                )}>
                    <Link
                        href="/"
                        className="transition-default relative min-[490px]:size-35 size-20 flex justify-center items-center shrink-0 rounded-full"
                    >
                        <Image
                            src={"/img/logo.webp"}
                            alt="Logo"
                            fill
                            priority
                            placeholder="blur"
                            blurDataURL="/img/logo.webp"
                            className="transition-default rounded-full"
                        />
                    </Link>
                    <span
                        className="transition-default relative bottom-2 min-[490px]:hidden font-['papyrus'] text-2xl max-md:text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-br dark:from-white/80 from-black/80 dark:via-white/10 dark:via-50% via-black/30 via-60% dark:to-white/80 dark:to-100% to-black/80 to-80% dark:lg:hover:text-white/80 lg:hover:text-black/80 before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-2/3 before:h-[2px] dark:before:bg-linear-to-br before:bg-linear-to-r dark:before:from-white/80 before:from-black/80 dark:before:via-black/30 before:via-black/10 dark:before:to-white/80 before:to-black/80 dark:lg:hover:before:bg-white/80 lg:hover:before:bg-black/80 after:transition-default after:absolute after:left-0 after:-bottom-3 after:w-1/3 after:h-[2px] dark:after:bg-linear-to-br after:bg-linear-to-r dark:after:from-white/80 after:from-black/80 dark:after:via-black/30 after:via-black/20 dark:after:to-white/80 after:to-black/80 dark:lg:hover:after:bg-white/80 lg:hover:after:bg-black/80"
                    >
                        Youms&rsquo;s portfolio
                    </span>
                </div>

                <div className={clsx(
                    "section-animate",
                    "transition-default w-full h-full grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-5 p-3"
                )}>
                    <FooterLink
                        name={t("projects")}
                        href={"/projects"}
                        activeName="/projects"
                        Icon={FaCode}
                    />

                    <FooterLink
                        name={t("about")}
                        href={"/?search=about"}
                        activeName="/about"
                        Icon={FaCircleInfo}
                    />

                    <FooterLink
                        name={t("route")}
                        href={"/?search=route"}
                        activeName="/parcours"
                        Icon={FaRoadCircleCheck}
                    />

                    <FooterLink
                        name={t("experience")}
                        href={"/?search=route"}
                        activeName="/experience"
                        Icon={FaUserTie}
                    />

                    <FooterLink
                        name={t("contact")}
                        href={"/contact"}
                        activeName="/contact"
                        Icon={FaPhoneVolume}
                    />
                </div>
            </div>

            <div className={clsx(
                "transition-default w-full flex flex-wrap justify-center items-center gap-8"
            )}>
                <Link
                    href={"https://www.linkedin.com/in/youmbi-le-duc-887275360"}
                    target="_blank"
                >
                    <FaLinkedinIn
                        className="transition-default md:text-2xl text-xl cursor-pointer lg:hover:scale-120 active:[transform:_scale(.8)_!important]"
                    />
                </Link>
                <Link
                    href={"https://gitlab.com/youms.dev"}
                    target="_blank"
                >
                    <FaGitlab
                        className="transition-default md:text-2xl text-xl cursor-pointer lg:hover:scale-120 active:[transform:_scale(.8)_!important]"
                    />
                </Link>
            </div>

            <div className={clsx(
                "transition-default w-full flex justify-center items-center"
            )}>
                <div className="transition-default flex flex-wrap justify-center items-center gap-3">
                    <span
                        className="transition-default sm:text-lg font-semibold"
                    >
                        &copy; {devInfos(t).pseudo}
                    </span>
                    <Link
                        href={`mailto:"Youmbi Le-duc" <${devInfos(t).email}>`}
                        className="transition-default sm:text-lg font-semibold lg:hover:underline"
                    >
                        {devInfos(t).email}
                    </Link>
                </div>
            </div>
        </footer>
    );
}