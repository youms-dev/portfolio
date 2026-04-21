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

/**
 * 
 * @param {ReactNode} children - Is the content that'll be displayed ;
 * @default undefined
 * 
 * @param {boolean} center - Is the container centered ? ;
 * @default false
 * 
 * @param {boolean} centerX - Is the container centered on the x-axis ? ;
 * @default false
 * 
 * @param {boolean} centerY - Is the container centered on the y-axis ? ;
 * @default false
 * 
 * @param {boolean} spaceTop - Is there space at the top of the container ? ;
 * @default true
 * 
 * @param {boolean} navigation - Is there a navigation bar ? ;
 * @default true
 * 
 * @returns {JSX.Element}
 */

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