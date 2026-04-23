import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    size?: string;
}

/**
 * 
 * @param {ReactNode} children - Is the content that'll be displayed ;
 * @default undefined
 * 
 * @param {string} size - Is the size of the title ;
 * @default undefined
 * 
 * @returns {JSX.Element}
 */

export const Title = ({ children, size, ...rest }: Props) => {
    return (
        <h1
            {...rest}
            className={clsx(
                "transition-default relative flex items-center gap-3 dark:text-white text-black text-2xl font-bold before:absolute before:w-16 before:h-[2px] before:left-0 before:-bottom-1 after:absolute after:w-10 after:h-[2px] after:left-0 after:-bottom-4 dark:before:bg-white before:bg-black dark:after:bg-white after:bg-black",
                size && size,
            )}
        >
            {children}
        </h1>
    );
}