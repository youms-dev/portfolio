import clsx from "clsx";

interface Props {
    interactivity?: boolean;
}

export const BgGrid = ({ interactivity = false }: Props) => {
    return (
        <div className={clsx(
            "transition-default absolute sm:-left-1 -left-5 top-0 w-[calc(100%+50%)] h-full flex flex-wrap overflow-hidden",
            !interactivity && "-z-100"
        )}>
            {
                Array.from({ length: 1000 }).map((_, i) => (
                    <div key={i} className="transition-default size-20 border dark:border-white/20 border-[black]/10 dark:lg:hover:bg-white/80 lg:hover:bg-primary/50 lg:hover:transition-none"></div>)
                )
            }
        </div>
    );
}