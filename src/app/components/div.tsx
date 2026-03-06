interface Props {
    children: React.ReactNode;
    divKey?: string;
}

export const Div = ({ children, divKey }: Props) => {
    return (
        <div
            key={divKey && divKey}
            className="transition-default relative w-full min-h-24 flex flex-col justify-center items-start gap-2 p-7 pt-0 pl-9 before:transition-default before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 dark:before:border-blue-200 before:border-cyan-500 before:rounded-full after:transition-default after:absolute after:left-[9px] after:top-5 after:w-[2px] after:h-[calc(100%-20px)] dark:after:bg-blue-200 after:bg-cyan-500"
        >
            {children}
        </div>
    );
}