'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { BgGrid } from './components/bg-grid';
import { Button } from './components/button';
import { Container } from './components/container';
import { useTranslation } from 'react-i18next';
import { Component } from './components/component';
import { Animated } from './types/enum';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        console.error(error)
    }, [error])

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

            <Component
                component="h1"
                className={clsx(
                    "section-animate",
                    "transition-default text-center text-lg"
                )}
            >
                {t("error")}
            </Component>

            <Component
                animated={Animated.SECTION}
                className={clsx(
                    'transition-default w-full flex justify-center items-center gap-5 mt-5'
                )}
            >
                <Button
                    width={150}
                    onClick={() => reset()}
                >
                    <FaArrowRotateRight className='transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:white/80 lg:group-hover/button:text-black/80' />
                    <Component
                        component="span"
                        className="transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:white/80 lg:group-hover/button:text-black/80 ml-3"
                    >
                        {t("retry")}
                    </Component>
                </Button>

                <Button onClick={() => router.push("/")}>
                    <FaHouseUser className='transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:white/80 lg:group-hover/button:text-black/80' />
                    <Component
                        component="span"
                        className="transition-default dark:text-black/80 text-white/80 dark:lg:group-hover/button:white/80 lg:group-hover/button:text-black/80 ml-3"
                    >
                        {t("back_to_home")}
                    </Component>
                </Button>
            </Component>
        </Container>
    )
}