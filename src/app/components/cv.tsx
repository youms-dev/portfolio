"use client";

import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { Animated } from "../types/enum";
import { Button } from "./button";
import { Component } from "./component";

export const CV = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation();

    const handleClick = async () => {
        if (loading) return;

        setLoading(true);
        await fetch(String(process.env.NEXT_PUBLIC_CV_URL!))
            .then(async (res) => {
                const a = document.createElement("a");
                const blob = await res.blob();
                a.href = URL.createObjectURL(blob);
                a.download = "CV_Youmbi_Le-duc.pdf";
                a.click();
                URL.revokeObjectURL(a.href);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                toast.error(t("error"));
            });
    }

    return (
        <Component
            animated={Animated.SECTION}
            className="transition-default relative w-11/12 h-80 flex sm:flex-row flex-col-reverse items-center sm:gap-0 gap-3 my-20 dark:bg-black/70 bg-white/70 before:transition-all before:duration-400 before:ease-in-out before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] dark:before:bg-white/70 before:bg-black/70 before:z-20 before:-translate-y-10 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] dark:after:bg-white/70 after:bg-black/70 after:z-20 after:translate-y-10"
        >
            <Component
                animated={Animated.LEFT}
                className="transition-default w-full h-full flex justify-center items-center dark:bg-black/70 z-10"
            >
                <Button
                    loading={loading}
                    onClick={handleClick}
                >
                    <Component
                        component="span"
                        className={clsx(
                            "transition-default font-medium tracking-wider dark:text-black/80 text-white/80",
                            !loading && "dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80",
                        )}
                    >
                        {t("download_cv")}
                    </Component>
                    <FaDownload className={clsx(
                        "transition-default dark:text-black/80 text-white/80",
                        !loading && "dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80",
                    )} />
                </Button>
            </Component>
            <Component
                animated={Animated.RIGHT}
                className="transition-default w-full h-full flex justify-center items-center dark:bg-black/70 z-10"
            >
                <iframe
                    src={String(process.env.NEXT_PUBLIC_CV_URL!)}
                    title="Mon CV"
                    className={clsx(
                        "scrollbar-invisible",
                        "transition-default w-80 h-62 overscroll-contain rounded-xl"
                    )}
                />
            </Component>

            <div className="transition-default absolute left-0 top-0 w-full h-full flex flex-wrap gap-5 overflow-hidden">
                {
                    Array.from({ length: 100 }).map((_, i) => (
                        <div
                            key={i}
                            className="transition-default relative size-10 odd:before:transition-all odd:before:duration-400 odd:before:ease-in-out odd:before:absolute odd:before:right-0 odd:before:bottom-1 odd:before:w-2/3 odd:before:h-[2px] dark:odd:before:bg-white/70 odd:before:bg-black/10 odd:before:translate-x-1/2 odd:before:z-2 odd:after:transition-all odd:after:duration-400 odd:after:ease-in-out odd:after:absolute odd:after:right-0 odd:after:bottom-1 odd:after:w-[2px] odd:after:h-2/3 dark:odd:after:bg-white/70 odd:after:bg-black/10 odd:after:translate-x-1/2 odd:after:translate-y-[42%] odd:after:z-2"
                        />
                    ))
                }
            </div>

        </Component>
    );
}