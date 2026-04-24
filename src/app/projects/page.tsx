"use client";

import { Container } from "#/components/container";
import { Title } from "#/components/title";
import { Laravel, Next, PHP, RN } from "@/app/constants/data";
import { useTranslation } from "react-i18next";
import { FaCodePullRequest } from "react-icons/fa6";
import { Component } from "../components/component";
import { CV } from "../components/cv";
import { ProjectView } from "../components/project-view";
import { SkillsCarrousel } from "../components/skills-carrousel";
import { Animated } from "../types/enum";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <Container centerX>
            <Component
                animated={Animated.SECTION}
                className="transition-default w-full flex items-center px-5 mb-10 mt-5"
            >
                <Title>
                    <FaCodePullRequest />
                    <Component component="span">
                        {t("projects_title")}
                    </Component>
                </Title>
            </Component>

            <Component
                animated={Animated.SECTION}
                className="transition-default w-full sm:px-5 px-3"
            >
                <ProjectView
                    title="React native & Nestjs"
                    data={RN(t)}
                />
            </Component>

            <SkillsCarrousel />

            <Component
                animated={Animated.SECTION}
                className="transition-default w-full sm:px-5 px-3"
            >
                <ProjectView
                    title="Next.js & Tailwindcss"
                    data={Next(t)}
                />
            </Component>

            <SkillsCarrousel />
            <CV />

            <Component
                animated={Animated.SECTION}
                className="transition-default w-full sm:px-5 px-3"
            >
                <ProjectView
                    title="Laravel & Tailwindcss"
                    data={Laravel(t)}
                    initialMode="carousel"
                />
            </Component>

            <SkillsCarrousel />
            <CV />

            <Component
                animated={Animated.SECTION}
                className="transition-default w-full sm:px-5 px-3"
            >
                <ProjectView
                    title="Javascript & PHP"
                    data={PHP(t)}
                    initialMode="carousel"
                />
            </Component>

            <CV />
            <SkillsCarrousel />
        </Container>
    );
}