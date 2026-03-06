"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const SearchTitle = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const search = searchParams.get("search");

        if (!search && searchParams.size > 0) {
            router.replace(pathname);
            return;
        }
        else if (!search && searchParams.size == 0) return;
        const item = document.querySelector(`#${search}`) as HTMLElement;

        if (!item) {
            router.replace(pathname);
            return;
        }
        const { top } = item.getBoundingClientRect();
        setTimeout(() => {
            const parent = item.closest(".section-animate") as HTMLElement;

            if (!parent) {
                if (item.classList.contains("section-animate")) {
                    window.scrollTo({
                        top: top - 150,
                        behavior: "smooth",
                    });
                }
                else {
                    window.scrollTo({
                        top: top - 100,
                        behavior: "smooth",
                    });
                }
            }
            else if (!parent.classList.contains("show")) {
                window.scrollTo({
                    top: top - 150,
                    behavior: "smooth",
                });
            }
            else {
                window.scrollTo({
                    top: top - 100,
                    behavior: "smooth",
                });
            }
        }, 500);
    }, [searchParams]);

    return null;
}