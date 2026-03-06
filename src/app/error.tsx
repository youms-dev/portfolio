'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { BgGrid } from './components/bg-grid';
import { Button } from './components/button';
import { Container } from './components/container';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

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
                "transition-default sm:text-7xl text-5xl pb-3"
            )}>
                😥
            </p>
            <h1 className={clsx(
                "section-animate",
                "transition-default text-center text-lg"
            )}>Une erreur s&rsquo;est produite</h1>
            <div className={clsx(
                "section-animate",
                'transition-default w-full flex justify-center items-center gap-5'
            )}>
                <Button
                    size='w-50 h-14'
                    onClick={() => reset()}
                >
                    <FaArrowRotateRight />
                    <span
                        className="ml-3"
                    >
                        Réessayer
                    </span>
                </Button>
                <Button
                    size='w-50 h-14'
                    onClick={() => router.push("/")}
                >
                    <FaHouseUser />
                    <span className="ml-3">Accueil</span>
                </Button>
            </div>
        </Container>
    )
}