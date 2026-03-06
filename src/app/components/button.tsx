import clsx from "clsx";
import { Tailspin } from 'ldrs/react';
import 'ldrs/react/Tailspin.css';
import { HTMLAttributes, Ref } from "react";
import { useTheme } from "../hooks/use-theme";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: string;
    loading?: boolean;
    variant?: 1 | 2;
    ref?: Ref<HTMLButtonElement>;
    type?: HTMLButtonElement["type"];
}

export const Button = ({ children, size, loading = false, variant = 1, ref, type = "button", ...rest }: Props) => {
    const { theme } = useTheme();

    return (
        <button
            {...rest}
            ref={ref && ref}
            disabled={loading}
            className={clsx(
                "transition-default relative flex justify-center items-center flex-nowrap gap-3 bg-transparent shrink-0 dark:text-blue-200 text-cyan-500 dark:border-blue-200 border-cyan-500 rounded-xl cursor-pointer p-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed lg:hover:shadow-lg lg:hover:shadow-blue-200/30 lg:hover:-translate-y-1 disabled:lg:hover:translate-y-0 active:scale-80 disabled:active:scale-100 before:transition-default before:absolute before:-left-[110%] before:top-0 before:w-10 before:h-[110%] dark:before:bg-blue-200/50 before:bg-black/20 before:-skew-x-30 lg:hover:before:left-[150%]",
                variant === 1 && "border-b-2",
                variant === 2 && "border-t-2",
                size && size,
            )}
        >
            {
                loading && (
                    <Tailspin
                        size="40"
                        stroke="5"
                        speed="0.9"
                        color={theme === "dark" ? "oklch(88.2% 0.059 254.128)" : "oklch(71.5% 0.143 215.221)"}
                    />
                )
            }
            {
                !loading && children
            }
        </button >
    );
}