"use client";

import { ReactNode } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { useTheme } from "../hooks/use-theme";

interface Props {
    children: ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
    const { theme } = useTheme();

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme == "dark" ? "dark" : "light"}
                transition={Bounce}
            />
            {children}
        </>
    );
}