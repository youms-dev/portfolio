import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { ProjectType } from "../constants/data";
import { MOBILE_CHECK_REGEX } from "../constants/regex";

interface Props {
    list: ProjectType["interfaces"];
    duration?: number;
}

/**
 * 
 * @param {ProjectType["interfaces"]} list - Is the list of interfaces to display ;
 * @default undefined
 * 
 * @param {number} duration - Is the duration of the carousel ;
 * @default 2000
 * 
 * @returns {JSX.Element}
 */

export const Carousel = ({ list, duration = 2000 }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const checkDisplay = () => {
        setIsMobile(MOBILE_CHECK_REGEX.test(navigator.userAgent));
    }

    useEffect(() => {
        checkDisplay();
        if (!ref.current || !list) return;
        const container = ref.current;
        const buttonsContainer = container.nextElementSibling as HTMLDivElement;
        let interval: NodeJS.Timeout;
        let start = 0;
        let end = 0;

        const handleCarousel = (direction: "left" | "right" | null = null) => {
            if (!direction) interval = setInterval(() => {
                if (
                    container.scrollLeft >= (container.scrollWidth - container.clientWidth)
                    ||
                    Math.floor(container.scrollLeft) >= Math.floor(container.scrollWidth - container.clientWidth)
                    ||
                    Math.ceil(container.scrollLeft) >= (container.scrollWidth - container.clientWidth)
                    ||
                    Math.round(container.scrollLeft) >= (container.scrollWidth - container.clientWidth)
                ) {
                    container.scrollTo({
                        left: 0,
                        behavior: "smooth",
                    });
                }
                else {
                    container.scrollTo({
                        left: container.scrollLeft + (container.firstChild as HTMLElement).clientWidth,
                        behavior: "smooth",
                    });
                }
            }, duration);
            else if (direction === "left")
                container.scrollTo({
                    left: container.scrollLeft - (container.firstChild as HTMLElement).clientWidth,
                    behavior: "smooth",
                });
            else {
                container.scrollTo({
                    left: container.scrollLeft + (container.firstChild as HTMLElement).clientWidth,
                    behavior: "smooth",
                });
            }
        }

        const checkCarouselState = () => {
            if (!buttonsContainer.classList.contains("active")) return;
            if (container.scrollLeft == 0) {
                (buttonsContainer.firstChild as HTMLElement).classList.remove(
                    "group-[.active]:opacity-100",
                    "cursor-pointer",
                );
                (buttonsContainer.firstChild as HTMLElement).classList.add("cursor-not-allowed");
            }
            else {
                (buttonsContainer.firstChild as HTMLElement).classList.remove("cursor-not-allowed");
                (buttonsContainer.firstChild as HTMLElement).classList.add(
                    "group-[.active]:opacity-100",
                    "cursor-pointer",
                );
            }

            if (
                container.scrollLeft >= (container.scrollWidth - container.clientWidth)
                ||
                Math.floor(container.scrollLeft) >= Math.floor(container.scrollWidth - container.clientWidth)
                ||
                Math.ceil(container.scrollLeft) >= (container.scrollWidth - container.clientWidth)
                ||
                Math.round(container.scrollLeft) >= (container.scrollWidth - container.clientWidth)
            ) {
                (buttonsContainer.lastChild as HTMLElement).classList.remove(
                    "group-[.active]:opacity-100",
                    "cursor-pointer",
                );
                (buttonsContainer.lastChild as HTMLElement).classList.add("cursor-not-allowed");
            }
            else {
                (buttonsContainer.lastChild as HTMLElement).classList.remove("cursor-not-allowed");
                (buttonsContainer.lastChild as HTMLElement).classList.add(
                    "group-[.active]:opacity-100",
                    "cursor-pointer",
                );
            }
        }

        handleCarousel();
        container.addEventListener("scroll", function () {
            checkCarouselState();
        });

        window.addEventListener("resize", function () {
            clearInterval(interval);
            handleCarousel();
            checkDisplay();
        });

        container.addEventListener("touchstart", function (e) {
            clearInterval(interval);
            start = e.touches[0].clientX;
        });
        container.addEventListener("touchmove", function (e) {
            container.classList.remove("[scroll-snap-type:_x_mandatory]");
            const val = e.changedTouches[0].clientX * .1;

            end = e.targetTouches[0].clientX;
            if (start > end) {
                container.scrollTo({
                    left: container.scrollLeft + val,
                });
            }
            else if (start < end) {
                container.scrollTo({
                    left: container.scrollLeft - val,
                });
            }
        });
        container.addEventListener("touchend", function () {
            clearInterval(interval);
            container.classList.add("[scroll-snap-type:_x_mandatory]");
            handleCarousel();
            start = 0;
            end = 0;
        });

        container.addEventListener("mouseenter", function () {
            clearInterval(interval);
            buttonsContainer.classList.add("active");
            checkCarouselState();
        });
        container.addEventListener("mouseleave", function () {
            checkCarouselState();
            handleCarousel();
            buttonsContainer.classList.remove("active");
        });

        buttonsContainer.addEventListener("mouseenter", function () {
            checkCarouselState();
            clearInterval(interval);
            this.classList.add("active");
        });
        buttonsContainer.addEventListener("mouseleave", function () {
            checkCarouselState();
            handleCarousel();
            this.classList.remove("active");
        });
        (buttonsContainer.firstChild as HTMLElement).addEventListener("click", function () {
            clearInterval(interval);
            handleCarousel("left");
        });
        (buttonsContainer.lastChild as HTMLElement).addEventListener("click", function () {
            clearInterval(interval);
            handleCarousel("right");
        });

        return () => {
            window.removeEventListener("resize", function () {
                clearInterval(interval);
                handleCarousel();
            });

            container.removeEventListener("mouseenter", function () {
                clearInterval(interval);
                buttonsContainer.classList.add("active");
            });

            container.removeEventListener("mouseleave", function () {
                handleCarousel();
                buttonsContainer.classList.remove("active");
            });

            buttonsContainer.removeEventListener("mouseenter", function () {
                clearInterval(interval);
                this.classList.add("active");
            });

            buttonsContainer.removeEventListener("mouseleave", function () {
                handleCarousel();
                this.classList.remove("active");
            });

            (buttonsContainer.firstChild as HTMLElement).removeEventListener("click", function () {
                clearInterval(interval);
                handleCarousel("left");
            });

            (buttonsContainer.lastChild as HTMLElement).removeEventListener("click", function () {
                clearInterval(interval);
                handleCarousel("right");
            });

            container.removeEventListener("touchstart", function (e) {
                clearInterval(interval);
                start = e.touches[0].clientX;
            });

            container.removeEventListener("touchmove", function (e) {
                container.classList.remove("[scroll-snap-type:_x_mandatory]");
                const val = e.changedTouches[0].clientX * .1;

                end = e.targetTouches[0].clientX;
                if (start > end) {
                    container.scrollTo({
                        left: container.scrollLeft + val,
                    });
                }
                else if (start < end) {
                    container.scrollTo({
                        left: container.scrollLeft - val,
                    });
                }
            });

            container.removeEventListener("touchend", function () {
                clearInterval(interval);
                container.classList.add("[scroll-snap-type:_x_mandatory]");
                handleCarousel();
                start = 0;
                end = 0;
            });

            container.removeEventListener("scroll", function () {
                checkCarouselState();
            });
        }
    }, []);

    return (
        <div className={clsx(
            "transition-default relative w-full flex items-center"
        )}>
            <div
                ref={ref}
                className={clsx(
                    "transition-default w-full h-100 flex items-center gap-6 py-4 overflow-hidden [scroll-snap-type:_x_mandatory] px-2"
                )}
            >
                {
                    list?.map((img) => {
                        return (
                            <div
                                key={img.link}
                                className={clsx(
                                    "transition-default w-full h-full flex flex-col justify-center items-center gap-2 dark:bg-gray-900/90 bg-cyan-500/50 rounded-3xl py-7 px-4 aspect-square snap-center"
                                )}
                            >
                                <div className="transition-default relative w-full h-full rounded-3xl shrink-0">
                                    <Image
                                        src={img.link}
                                        alt={img.titre}
                                        fill
                                        priority
                                        sizes="(max-width: 800px) 50vw, 100vw"
                                        placeholder="blur"
                                        blurDataURL="/img/logo_blur.webp"
                                        className="transition-default rounded-3xl aspect-video"
                                    />
                                </div>
                                <p className="transition-default w-full h-max text-center shrink-0 truncate font-bold">
                                    {img.titre}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            {
                !isMobile && (
                    <div
                        className={clsx(
                            "group",
                            "transition-default absolute left-0 w-full flex justify-between items-center"
                        )}>
                        <FaChevronCircleLeft
                            className={clsx(
                                "transition-default text-3xl dark:text-white border-2 dark:border-white border-black rounded-full text-cyan-500 cursor-pointer opacity-50 group-[.active]:opacity-100 active:scale-75",
                            )}
                        />
                        <FaChevronCircleRight
                            className={clsx(
                                "transition-default text-3xl dark:text-white border-2 dark:border-white border-black rounded-full text-cyan-500 cursor-pointer opacity-50 group-[.active]:opacity-100 active:scale-75",
                            )}
                        />
                    </div>
                )
            }
        </div>
    );
}