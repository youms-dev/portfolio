import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    gap?: number;
    left?: CSSProperties["left"];
}

/**
 * 
 * @param {ReactNode} children - Represents the content that'll be displayed ;
 * 
 * @param {number} gap - Represents the gap between each child ;
 * @default 1
 * 
 * @param {CSSProperties["left"]} left - Represents the left position of the box ;
 * @default 0
 * 
 * @returns {JSX.Element}
 */

export const Box = ({ children, gap = 1, left = 0 }: Props) => {
    return (
        <div className={clsx(
            "transition-default absolute bottom-0 min-w-[200px] -translate-x-[80%] translate-y-[95%] pt-8 pr-2 z-100 opacity-0 pointer-events-none group-hover/parent:opacity-100 group-hover/parent:pointer-events-auto animate-none group-hover/parent:animate-[boxAnimation_.3s_1_linear]",
        )}>
            <div
                style={{
                    gap,
                    left
                }}
                className={clsx(
                    "group/box",
                    "transition-default size-full flex flex-col items-center relative border dark:border-white/20 border-black/10 rounded-xl bg-black dark:opacity-100 opacity-75 backdrop-blur-3xl p-3 before:transition-default before:absolute before:right-0 before:top-0 before:size-[25px] before:bg-black before:-skew-y-30 before:-rotate-30 before:-translate-y-2 before:-translate-x-2 before:-z-1",
                )}>
                {children}
            </div>
        </div>
    );
}