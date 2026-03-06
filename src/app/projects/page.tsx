"use client";

import { Container } from "#/components/container";
import { Title } from "#/components/title";
import { Laravel, Next, PHP, RN } from "@/app/constants/data";
import { FaCodePullRequest } from "react-icons/fa6";
import { CV } from "../components/cv";
import { ProjectView } from "../components/project-view";
import { SkillsCarrousel } from "../components/skills-carrousel";

export default function Projects() {
    return (
        <Container centerX>
            <div className="transition-default w-full flex items-center px-5 mb-10 mt-5">
                <Title>
                    <FaCodePullRequest />
                    <span>Mes projets</span>
                </Title>
            </div>

            <div className="transition-default w-full sm:px-5 px-3">
                <ProjectView
                    title="React native & Nestjs"
                    data={RN}
                />
            </div>

            <SkillsCarrousel />

            <div className="transition-default w-full sm:px-5 px-3">
                <ProjectView
                    title="Next.js & Tailwindcss"
                    data={Next}
                />
            </div>

            <SkillsCarrousel />
            <CV />

            <div className="transition-default w-full sm:px-5 px-3">
                <ProjectView
                    title="Laravel & Tailwindcss"
                    data={Laravel}
                    initialMode="carousel"
                />
            </div>

            <SkillsCarrousel />
            <CV />

            <div className="transition-default w-full sm:px-5 px-3">
                <ProjectView
                    title="Javascript & PHP"
                    data={PHP}
                    initialMode="carousel"
                />
            </div>

            <CV />
            <SkillsCarrousel />
        </Container>
    );
}