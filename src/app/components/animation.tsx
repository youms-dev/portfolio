"use client";

import { useEffect } from "react";

interface Props {
    entries?: any[]
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
            const sectionAnimated = document.querySelectorAll(".section-animate");

            if (sectionAnimated) {
                sectionAnimated.forEach((section) => {
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