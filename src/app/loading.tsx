"use client";

import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { Container } from "./components/container";
import { useTheme } from "./hooks/use-theme";

export default function Loading() {
    const { theme } = useTheme();
    const [appTheme, setAppTheme] = useState<typeof theme>(theme);

    useEffect(() => {
        setAppTheme(theme);
    }, [theme]);

    return (
        <Container
            center
            navigation={false}
            spaceTop={false}
        >
            <RingLoader
                color={appTheme === "dark" ? "rgba(255, 255, 255, .9)" : "rgba(0, 0, 0, .9)"}
                size={80}
            />
        </Container>
    );
}