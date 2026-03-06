"use client";

import clsx from "clsx";
import { skills } from "../constants/data";
import { createId } from "@paralleldrive/cuid2";

export const SkillsCarrousel = () => {
    return (
        <div className="transition-default w-full h-30 overflow-hidden pointer-events-none">
            <div className={clsx(
                "skills-carrousel section-animate",
                "transition-default w-max h-full flex items-center"
            )}>
                {
                    skills.map((skill) => (
                        skill.technology.icon && (
                            <div
                                key={createId()}
                                className={clsx(
                                    "object-3d",
                                    "transition-default w-40 h-full flex flex-col justify-center items-center border-2 dark:border-white/60 border-black/50 p-2 shadow-[-8px_7px_5px] dark:shadow-white/90 shadow-cyan-500/60 dark:bg-black bg-cyan-500 text-center"
                                )}
                            >
                                {
                                    (() => {
                                        const Icon = skill.technology.icon;
                                        return <Icon className="transition-default text-8xl" />;
                                    })()
                                }
                                <h2 className="transition-default text-2xl font-['forte'] tracking-[2px]">{skill.technology.name}</h2>
                            </div>
                        )
                    ))
                }

                {
                    skills.map((skill) => (
                        skill.technology.icon && (
                            <div
                                key={createId()}
                                className={clsx(
                                    "object-3d",
                                    "transition-default w-40 h-full flex flex-col justify-center items-center border-2 dark:border-white/60 border-black/50 p-2 shadow-[-8px_7px_5px] dark:shadow-white/90 shadow-cyan-500/60 dark:bg-black bg-cyan-500 text-center"
                                )} >
                                {
                                    (() => {
                                        const Icon = skill.technology.icon;
                                        return <Icon className="transition-default text-8xl" />;
                                    })()
                                }
                                <h2 className="transition-default text-2xl font-['forte'] tracking-[2px]">{skill.technology.name}</h2>
                            </div>
                        )
                    ))
                }
            </div>
        </div >
    );
}