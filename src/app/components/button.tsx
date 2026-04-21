import clsx from "clsx";
import { Tailspin } from 'ldrs/react';
import 'ldrs/react/Tailspin.css';
import { CSSProperties, HTMLAttributes, Ref } from "react";
import { useTheme } from "../hooks/use-theme";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "style" | "className"> {
    children: React.ReactNode;
    size?: string;
    loading?: boolean;
    ref?: Ref<HTMLButtonElement>;
    type?: HTMLButtonElement["type"];
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
}

/**
 * 
 * @param {ReactNode} children - Is the content that'll be displayed ;
 * @default undefined
 * 
 * @param {string} size - Is the size of the button ;
 * @default undefined
 * 
 * @param {boolean} loading - Is the button loading ? ;
 * @default false
 * 
 * @param {Ref<HTMLButtonElement>} ref - Is the ref of the button ;
 * @default undefined
 * 
 * @param {HTMLButtonElement["type"]} type - Is the type of the button ;
 * @default "button"
 * 
 * @param {CSSProperties["width"]} width - Is the width of the button ;
 * @default undefined
 * 
 * @param {CSSProperties["height"]} height - Is the height of the button ;
 * @default undefined
 * 
 * @returns {JSX.Element}
 */

export const Button = ({ children, size, loading = false, ref, type = "button", width, height, ...rest }: Props) => {
    const { theme } = useTheme();
    return (
        <button
            {...rest}
            ref={ref && ref}
            disabled={loading}
            style={{
                width,
                height,
            }}
            className={clsx(
                "group/button",
                "transition-default relative flex justify-center items-center flex-nowrap gap-2 dark:bg-white/80 bg-black/80 shrink-0 rounded-xl cursor-pointer p-3 disabled:opacity-70 disabled:cursor-not-allowed dark:lg:hover:bg-black/80 lg:hover:bg-white/80 disabled:lg:hover:translate-y-0 active:scale-80 disabled:active:scale-100 after:transition-default after:absolute after:-bottom-0 after:w-10/12 after:h-4 dark:after:bg-white/80 after:bg-black/80 after:rotate-x-80 after:blur-md after:translate-y-7",
            )}
        >
            {
                loading ? (
                    <>
                        <Tailspin
                            size="25"
                            stroke="5"
                            speed="0.9"
                            color={theme === "dark" ? "rgba(0, 0, 0, .8)" : "rgba(255, 255, 255, .8)"}
                        />

                        {children}
                    </>
                )
                    :
                    children
            }
        </button >
    );
}