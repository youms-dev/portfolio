"use client";

import clsx from "clsx";
import { Animation } from "./animation";
import { Footer } from "./footer";
import { Nav } from "./nav";
import { ScrollTopButton } from "./scrol-ltop-button";
import { SearchTitle } from "./search-title";

interface Props {
    children: React.ReactNode;
    center?: boolean;
    centerX?: boolean;
    centerY?: boolean;
    spaceTop?: boolean;
    navigation?: boolean;
}

export const Container = ({ children, center = false, centerX = false, centerY = false, spaceTop = true, navigation = true }: Props) => {
    Animation({ entries: [children] });

    return (
        <main className={clsx(
            "transition-default relative w-screen min-h-screen flex flex-col",
            spaceTop && "pt-18",
            center && !centerX && !centerY && "justify-center items-center",
            !center && centerX && !centerY && "justify-start items-center",
            !center && !centerX && centerY && "justify-center items-start",
        )}>
            {
                navigation && (
                    <Nav />
                )
            }
            {
                navigation && <SearchTitle />
            }
            {children}

            <ScrollTopButton />
            {
                navigation && (
                    <Footer />
                )
            }
        </main>
    );
}