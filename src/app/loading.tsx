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
                color={appTheme === "dark" ? "white" : "oklch(71.5% 0.143 215.2"}
                size={80}
            />
        </Container>
    );
}