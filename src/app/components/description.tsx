import clsx from "clsx";
import { HTMLAttributes, useEffect, useRef } from "react";

interface DescProps extends HTMLAttributes<HTMLParagraphElement> {
    sentence: string;
    className?: string;
}

/**
 * 
 * @param {string} sentence - Is the sentence to display ;
 * @default undefined
 * 
 * @param {string} className - Is the class name that'll be applied to the component ;
 * @default undefined
 * 
 * @returns {JSX.Element}
 */

export const Desc = ({ sentence: str, className = "", ...rest }: DescProps) => {
    const ref = useRef<HTMLParagraphElement>(null);

    const handleDescription = () => {
        if (!ref.current) return;
        const wordClassName = [
            "transition-default",
            "dark:text-white",
            "text-black",
            "font-bold",
            "tracking-wide",
        ];
        const regex = /__[^\s]+__/g;
        let wordsFound = str.match(regex);
        let positions = [];

        if (wordsFound) {

            for (let i = 0; i < wordsFound.length; i++) {
                const val = wordsFound[i];
                const pos = str.indexOf(val, i == 0 ? 0 : positions[i - 1] + 1);

                positions.push(pos);
            }

            if (wordsFound.length > 1) {
                for (let j = 0; j < wordsFound.length; j++) {
                    const word = wordsFound[j];

                    if (j == 0) {
                        const prevSpan = document.createElement("span");
                        const wordSpan = document.createElement("span");
                        const p = str.slice(0, positions[j]);

                        ref.current.textContent = "";
                        prevSpan.textContent = p;
                        wordSpan.textContent = word.replaceAll("__", "");

                        wordSpan.classList.add(...wordClassName);
                        ref.current.appendChild(prevSpan);
                        ref.current.appendChild(wordSpan);
                    }
                    else if (j == wordsFound.length - 1) {
                        const prevSpan = document.createElement("span");
                        const wordSpan = document.createElement("span");
                        const nextSpan = document.createElement("span");
                        const p = str.slice(positions[j - 1] + wordsFound[j - 1].length, positions[j]);
                        const n = str.slice(positions[j] + word.length);

                        wordSpan.classList.add(...wordClassName);
                        prevSpan.textContent = p;
                        wordSpan.textContent = word.replaceAll("__", "");
                        nextSpan.textContent = n;
                        ref.current.appendChild(prevSpan);
                        ref.current.appendChild(wordSpan);
                        ref.current.appendChild(nextSpan);
                    }
                    else {
                        const prevSpan = document.createElement("span");
                        const wordSpan = document.createElement("span");
                        const nextSpan = document.createElement("span");
                        const p = str.slice(positions[j - 1] + wordsFound[j - 1].length, positions[j]);

                        wordSpan.classList.add(...wordClassName);
                        prevSpan.textContent = p;
                        wordSpan.textContent = word.replaceAll("__", "");
                        ref.current.appendChild(prevSpan);
                        ref.current.appendChild(wordSpan);
                        ref.current.appendChild(nextSpan);
                    }
                }
            }
            else if (wordsFound.length == 1) {
                const prevSpan = document.createElement("span");
                const wordSpan = document.createElement("span");
                const nextSpan = document.createElement("span");
                const word = wordsFound[0];
                const p = str.slice(0, positions[0]);
                const n = str.slice(positions[0] + word.length);

                wordSpan.classList.add(...wordClassName);
                ref.current.textContent = "";
                prevSpan.textContent = p;
                wordSpan.textContent = word.replaceAll("__", "").trim();
                nextSpan.textContent = n;
                ref.current.appendChild(prevSpan);
                ref.current.appendChild(wordSpan);
                ref.current.appendChild(nextSpan);
            }
        }
    }

    useEffect(() => {
        handleDescription();
    }, [str]);

    return (
        <p
            {...rest}
            ref={ref}
            className={clsx(
                "transition-default whitespace-pre-line",
                className && className,
            )}
        >
            {str}
        </p>
    );
}