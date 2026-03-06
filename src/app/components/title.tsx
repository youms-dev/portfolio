import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    size?: string;
}

export const Title = ({ children, size, ...rest }: Props) => {
    return (
        <h1
            {...rest}
            className={clsx(
                "transition-default relative flex items-center gap-3 dark:text-blue-200 text-cyan-500 text-2xl font-bold before:absolute before:w-16 before:h-[2px] before:left-0 before:-bottom-1 after:absolute after:w-10 after:h-[2px] after:left-0 after:-bottom-4 dark:before:bg-blue-200 before:bg-cyan-500 dark:after:bg-blue-200 after:bg-cyan-500",
                size && size,
            )}
        >
            {children}
        </h1>
    );
}