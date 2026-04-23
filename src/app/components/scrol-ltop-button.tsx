"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

export const ScrollTopButton = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!ref.current) return;
        const handleVisibility = () => {
            clearTimeout(timeout);
            if (window.scrollY >= window.innerHeight) {
                setVisible(true);
                timeout = setTimeout(() => {
                    setVisible(false);
                }, 1500);
            }
            else {
                setVisible(false);
            }
        }

        handleVisibility();
        window.addEventListener("scroll", handleVisibility);
        const onMouseEnter = () => {
            clearTimeout(timeout);
            setVisible(true);
        }

        ref.current.addEventListener("mouseenter", onMouseEnter);
        ref.current.addEventListener("mouseleave", handleVisibility);

        return () => {
            window.removeEventListener("scroll", handleVisibility);
            ref.current?.removeEventListener("mouseenter", onMouseEnter);
            ref.current?.removeEventListener("mouseleave", handleVisibility);
        }
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <span
            ref={ref}
            className={clsx(
                "transition-default fixed right-5 sm:bottom-18 bottom-10 text-4xl lg:hover:scale-110 lg:hover:opacity-100 active:scale-[.9_!important] cursor-pointer",
                visible ? "opacity-50 z-10" : "opacity-0 -z-10"
            )}
            onClick={() => scrollTop()}
        >
            <FaChevronCircleUp
                className="transition-default dark:text-white text-black/80"
            />
        </span>
    );
}