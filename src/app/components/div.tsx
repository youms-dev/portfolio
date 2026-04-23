import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

/**
 * 
 * @param {ReactNode} children - Is the content that'll be displayed ;
 * @default undefined
 * 
 * @returns {JSX.Element}
 */

export const Div = ({ children, ...rest }: Props) => {
    return (
        <div
            {...rest}
            className="transition-default relative w-full min-h-24 flex flex-col justify-center gap-2 p-7 pt-0 pl-9 before:transition-default before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 dark:before:border-white/80 before:border-black/80 before:rounded-full after:transition-default after:absolute after:left-[9px] after:top-5 after:w-[2px] after:h-[calc(100%-20px)] dark:after:bg-white/80 after:bg-black/80"
        >
            {children}
        </div>
    );
}