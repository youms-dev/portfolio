import clsx from "clsx";
import { ElementType, forwardRef, HTMLAttributes } from "react";
import { Animated } from "../types/enum";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "children" | "className"> {
    children?: React.ReactNode;
    animated?: Animated;
    component?: ElementType;
    className?: HTMLElement["className"];
}

/**
 * 
 * @param {ReactNode} children - Is the content that'll be displayed ;
 * @default undefined
 * 
 * @param {Animated} animated - Is the animation that'll be applied to the component ;
 * @default Animated.SECTION
 * 
 * @param {ElementType} component - Is the component that'll be rendered ;
 * @default "div"
 * 
 * @param {HTMLElement["className"]} className - Is the class name that'll be applied to the component ;
 * @default undefined
 * 
 * @returns {JSX.Element}
 */

export const Component = forwardRef<ElementType, Props>(({ children, animated, component: Component = "div", className, ...rest }: Props, ref) => {
    return (
        <Component
            {...rest}
            suppressHydrationWarning
            ref={ref}
            className={clsx(
                className,
                animated && animated,
            )}
        >
            {children}
        </Component>
    );
});