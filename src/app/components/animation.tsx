"use client";

import { useEffect } from "react";
import { Animated } from "../types/enum";

interface Props {
    entries?: any[];
}

export const Animation = ({ entries }: Props) => {
    useEffect(() => {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add("show");
                    observer.unobserve(item.target);
                }
            });
        });

        const handleAnimation = () => {
            const sectionAnimated = document.querySelectorAll(`.${Animated.SECTION}`);
            const animatedLeft = document.querySelectorAll(`.${Animated.LEFT}`);
            const animatedRight = document.querySelectorAll(`.${Animated.RIGHT}`);

            if (sectionAnimated) {
                sectionAnimated.forEach((section) => {
                    observer.observe(section);
                });
            }

            if (animatedLeft) {
                animatedLeft.forEach((section) => {
                    observer.observe(section);
                });
            }

            if (animatedRight) {
                animatedRight.forEach((section) => {
                    observer.observe(section);
                });
            }
        }

        handleAnimation();
        window.addEventListener("scroll", handleAnimation);

        return () => {
            window.removeEventListener("scroll", handleAnimation);
        }
    }, entries ?? []);

    return null;
}