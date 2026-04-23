"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { Button } from "./button";
import { Component } from "./component";

export const CV = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        setMounted(true);
    }, []);
    const handleClick = () => {
        if (!mounted) {
            return;
        }

        (async () => {
            await fetch(String(process.env.NEXT_PUBLIC_CV_URL!))
                .then(async (res) => {
                    const a = document.createElement("a");
                    const blob = await res.blob();
                    a.href = URL.createObjectURL(blob);
                    a.download = "Youmbi_Le-duc_CV.pdf";
                    a.click();
                    URL.revokeObjectURL(a.href);
                })
                .catch((error) => {
                    toast.error("Une erreur s'est produite");
                    console.error(error);
                });
        })();
    }

    return (
        <div className={clsx(
            "section-animate",
            "transition-default relative w-11/12 h-80 flex sm:flex-row flex-col-reverse items-center sm:gap-0 gap-3 my-20 dark:bg-black/70 bg-white/70 before:transition-all before:duration-400 before:ease-in-out before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] dark:before:bg-white/70 before:bg-black/70 before:z-20 before:-translate-y-10 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] dark:after:bg-white/70 after:bg-black/70 after:z-20 after:translate-y-10"
        )}>
            <div className={clsx(
                "left-item",
                "transition-default w-full h-full flex justify-center items-center dark:bg-black/70 z-10"
            )}>
                <Button onClick={handleClick}>
                    <Component
                        component="span"
                        className="transition-default font-medium tracking-wider dark:text-black/80 text-white/80 dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80"
                    >
                        {t("download_cv")}
                    </Component>
                    <FaDownload className="transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80" />
                </Button>
            </div>
            <div className={clsx(
                "right-item",
                "transition-default w-full h-full flex justify-center items-center dark:bg-black/70 z-10"
            )}>
                <iframe
                    src={String(process.env.NEXT_PUBLIC_CV_URL!)}
                    title="Mon CV"
                    className={clsx(
                        "scrollbar-invisible",
                        "transition-default w-80 h-62 overscroll-contain rounded-xl"
                    )}
                />
            </div>

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

        </div>
    );
}