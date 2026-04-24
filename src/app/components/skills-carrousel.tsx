"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { skills } from "../constants/data";
import { Animated } from "../types/enum";
import { Component } from "./component";

export const SkillsCarrousel = () => {
    const [itemsCount, setItemsCount] = useState<number>(0);

    useEffect(() => {
        const resize = () => {
            const w = window.innerWidth;
            const n = w / (160 * skills.length);
            const r = Math.ceil(n);

            setItemsCount(r < 2 ? 2 : r);
        }

        resize();
        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <Component
            animated={Animated.SECTION}
            className={clsx(
                "transition-default w-full h-30 overflow-hidden pointer-events-none"
            )}>
            <Component
                animated={Animated.SECTION}
                className={clsx(
                    "skills-carrousel",
                    "transition-default w-max h-full flex items-center"
                )}
            >
                {
                    Array(itemsCount).fill(0).map((_, i) => {
                        return (skills.map((skill, j) => (
                            skill.technology.icon && (
                                <div
                                    key={`${i}-${skill.technology.name}-${j}`}
                                    className={clsx(
                                        "object-3d",
                                        "transition-default w-40 h-full flex flex-col justify-center items-center border-2 dark:border-white/60 border-black/50 p-2 shadow-[-8px_7px_5px] dark:shadow-white/80 shadow-black/80 dark:bg-black bg-black/80 text-center"
                                    )}
                                >
                                    {
                                        (() => {
                                            const Icon = skill.technology.icon;
                                            return <Icon className="transition-default text-8xl text-white/80" />;
                                        })()
                                    }
                                    <h2 className="transition-default text-2xl font-['forte'] tracking-[2px] text-white/80">
                                        {skill.technology.name}
                                    </h2>
                                </div>
                            )
                        )));
                    })
                }
            </Component>
        </Component>
    );
}