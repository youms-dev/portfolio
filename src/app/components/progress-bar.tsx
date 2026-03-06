"use client";

import { usePathname } from "next/navigation"
import { NProgress } from "nprogress-v2";
import { useEffect } from "react";
import "nprogress-v2/dist/index.css";

export default function ProgressBar() {
    const pathname = usePathname();

    useEffect(() => {
        NProgress.configure({
            showSpinner: false
        });
        NProgress.start();
        NProgress.done();
    }, [pathname]);

    return null;
}