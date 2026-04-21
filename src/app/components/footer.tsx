"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaCircleInfo, FaCode, FaGitlab, FaLinkedinIn, FaPhoneVolume, FaRoadCircleCheck, FaUserTie } from "react-icons/fa6";
import { devInfos } from "../constants/data";

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
                "transition-default relative w-max flex items-center gap-3 lg:text-lg max-md:text-lg active:[transform:_scale(.9)_!important] before:transition-default before:absolute before:-left-[15%] before:-top-[2px] before:h-[105%] dark:before:bg-blue-200/20 before:bg-cyan-500/20 after:transition-default after:absolute after:left-0 after:-bottom-1 after:h-[2px] dark:after:bg-blue-200 after:bg-cyan-500",
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

export const Footer = () => {
    return (
        <footer className={clsx(
            "transition-default w-full flex flex-col gap-3 border-t-2 dark:border-t-white/50 border-t-black/50 p-5 dark:shadow-[0_-5px_10px_white]/50 shadow-[0_-5px_10px_black]/50"
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
                        className="transition-default relative bottom-2 min-[490px]:hidden font-['papyrus'] text-2xl max-md:text-xl font-extrabold text-transparent bg-clip-text dark:bg-linear-to-br bg-linear-to-r dark:from-blue-200 from-cyan-500 dark:via-white/30 via-black dark:to-blue-200 to-cyan-500 dark:lg:hover:text-blue-200 lg:hover:text-cyan-500 before:transition-default before:absolute before:left-0 before:-bottom-1 before:w-2/3 before:h-[2px] dark:before:bg-linear-to-br before:bg-linear-to-r dark:before:from-blue-200 before:from-cyan-500 dark:before:via-white/30 before:via-black dark:before:to-blue-200 before:to-cyan-500 dark:lg:hover:before:bg-blue-200 lg:hover:before:bg-cyan-500 after:transition-default after:absolute after:left-0 after:-bottom-3 after:w-1/3 after:h-[2px] dark:after:bg-linear-to-br after:bg-linear-to-r dark:after:from-blue-200 after:from-cyan-500 dark:after:via-white/30 after:via-black dark:after:to-blue-200 after:to-cyan-500 dark:lg:hover:after:bg-blue-200 lg:hover:after:bg-cyan-500"
                    >
                        Youms&rsquo;s portfolio
                    </span>
                </div>

                <div className={clsx(
                    "section-animate",
                    "transition-default w-full h-full grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-5 p-3"
                )}>
                    <FooterLink
                        name="Projets"
                        href={"/projects"}
                        activeName="/projects"
                        Icon={FaCode}
                    />

                    <FooterLink
                        name="À propos"
                        href={"/?search=about"}
                        activeName="/about"
                        Icon={FaCircleInfo}
                    />

                    <FooterLink
                        name="Parcours"
                        href={"/?search=route"}
                        activeName="/parcours"
                        Icon={FaRoadCircleCheck}
                    />

                    <FooterLink
                        name="Experience"
                        href={"/?search=route"}
                        activeName="/experience"
                        Icon={FaUserTie}
                    />

                    <FooterLink
                        name="Contact"
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
                        className="transition-default dark:text-white text-black dark:lg:hover:text-blue-200 lg:hover:text-cyan-500 md:text-2xl text-xl cursor-pointer lg:hover:scale-120 active:[transform:_scale(.8)_!important]"
                    />
                </Link>
                <Link
                    href={"https://gitlab.com/youms.dev"}
                    target="_blank"
                >
                    <FaGitlab
                        className="transition-default dark:text-white text-black dark:lg:hover:text-blue-200 lg:hover:text-cyan-500 md:text-2xl text-xl cursor-pointer lg:hover:scale-120 active:[transform:_scale(.8)_!important]"
                    />
                </Link>
            </div>

            <div className={clsx(
                "transition-default w-full flex justify-center items-center"
            )}>
                <div className="transition-default flex justify-center items-center gap-3">
                    <span
                        className="transition-default sm:text-lg dark:text-white text-black font-semibold"
                    >
                        &copy; {devInfos.pseudo}
                    </span>
                    <Link
                        href={`mailto:"Youmbi Le-duc" <${devInfos.email}>`}
                        className="transition-default sm:text-lg dark:text-white text-black font-semibold dark:lg:hover:text-blue-200 lg:hover:text-cyan-500"
                    >
                        {devInfos.email}
                    </Link>
                </div>
            </div>
        </footer>
    );
}