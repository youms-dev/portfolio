"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FaHouseUser } from "react-icons/fa";
import { BgGrid } from "./components/bg-grid";
import { Button } from "./components/button";
import { Container } from "./components/container";

export default function NotFound() {

    const router = useRouter();

    return (
        <Container
            navigation={false}
            spaceTop={false}
            center
        >
            <BgGrid />
            <p className={clsx(
                "section-animate",
                "transition-default sm:text-7xl text-5xl pb-3 animate-bounce"
            )}>
                🥲
            </p>
            <h1 className={clsx(
                "section-animate",
                "transition-default text-center"
            )}>Désolé mais cette page n&rsquo;existe pas sur cette plateforme.</h1>

            <div className={clsx(
                "section-animate",
            )}>
                <Button
                    onClick={() => router.push("/")}
                >
                    <FaHouseUser />
                    <span
                        className="ml-3"
                    >
                        Revenir en lieu sûr.
                    </span>
                </Button>
            </div>
        </Container>
    );
}