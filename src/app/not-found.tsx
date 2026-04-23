"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FaHouseUser } from "react-icons/fa";
import { BgGrid } from "./components/bg-grid";
import { Button } from "./components/button";
import { Component } from "./components/component";
import { Container } from "./components/container";
import { Animated } from "./types/enum";

export default function NotFound() {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Container
            navigation={false}
            spaceTop={false}
            center
        >
            <BgGrid />
            <p className={clsx(
                "section-animate",
                "transition-default sm:text-7xl text-5xl pb-3 animate-bounce"
            )}>
                🥲
            </p>
            <Component
                component="h1"
                animated={Animated.SECTION}
                className={clsx(
                    "section-animate",
                    "transition-default text-center"
                )}
            >
                {t("page_not_found")}
            </Component>

            <Component
                animated={Animated.SECTION}
                className="transition-default mt-8"
            >
                <Button
                    onClick={() => router.push("/")}
                >
                    <FaHouseUser className="transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80" />
                    <Component
                        component="span"
                        className="transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80 ml-3"
                    >
                        {t("back_to_home")}
                    </Component>
                </Button>
            </Component>
        </Container>
    );
}