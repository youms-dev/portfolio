"use client";

import { Title } from "#/components/title";
import { createId } from "@paralleldrive/cuid2";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaCalendarCheck, FaCheck, FaGraduationCap, FaLink, FaUserTie } from "react-icons/fa";
import { FaGrip } from "react-icons/fa6";
import Typed from "typed.js";
import { BgGrid } from "./components/bg-grid";
import { Button } from "./components/button";
import { Component } from "./components/component";
import { Container } from "./components/container";
import { CV } from "./components/cv";
import { Desc } from "./components/description";
import { Div } from "./components/div";
import { SkillsCarrousel } from "./components/skills-carrousel";
import { devInfos, experiences, other, parcours, skills } from "./constants/data";
import { Animated } from "./types/enum";

export default function Page() {
  const hour = new Date().getHours();
  const router = useRouter();
  const typedRef = useRef<HTMLHeadingElement>(null);
  const [activeView, setActiveView] = useState<"grid" | "date">("date");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: devInfos(t).typedjs,
      typeSpeed: 50,
      loop: true,
      cursorChar: ""
    });

    return () => typed.destroy();
  }, [i18n.language]);

  return (
    <Container centerX>
      <Component
        animated={Animated.SECTION}
        className={clsx(
          "transition-default relative w-full min-h-96 sm:h-100 flex justify-center items-center mb-10 sm:px-10 px-2 overflow-hidden before:transition-default before:absolute before:bottom-0 before:translate-y-10 before:w-2/3 before:h-1 dark:before:bg-blue-200 before:bg-cyan-500",
        )}
      >
        <BgGrid />
        <Component
          animated={Animated.LEFT}
          className={clsx(
            "transition-default w-full sm:w-1/2 h-full p-3 flex flex-col justify-center items-start gap-1 dark:max-sm:bg-black/60 sm:bg-transparent bg-white/70 bg-opacity-80"
          )}
        >
          <h1 className="transition-default text-2xl text-left">
            <span>
              {
                new Date().getHours() >= 16 ? t("goodbye") : t("hello")
              },
            </span>
            <p className="my-2">
              <span>
                {t("iam")} &nbsp;
              </span>
              <span
                className="transition-default relative font-['papyrus'] dark:font-normal font-bold mx-4 dark:text-white text-black/80 before:transition-default before:absolute before:top-0 before:left-0 before:-translate-x-6 before:-translate-y-1 before:w-4 before:h-4 before:border-l-2 before:border-t-2 dark:before:border-white after:transition-default after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:translate-y-1 after:w-4 after:h-4 after:border-r-2 after:border-b-2 dark:after:border-white after:border-black/80"
              >
                Youmbi Le-duc
              </span>
            </p>
          </h1>

          <h2
            ref={typedRef}
            className="transition-default inline-block w-full h-7 text-xl text-left dark:text-blue-200 text-black/80 font-['papyrus'] dark:font-normal font-bold"
          />

          <Component
            component="p"
            className="transition-default text-justify"
          >
            {t("home_about_me")}
          </Component>

          <Component
            animated={Animated.SECTION}
            className="transition-default flex justify-center items-center rounded-2xl dark:bg-black bg-white mt-3"
          >
            <Button onClick={() => router.push("/?search=about")}>
              <Component
                component="span"
                animated={undefined}
                className="transition-default dark:text-black/80 text-white/80 font-bold tracking-wider dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80"
              >
                {t("home_more_about_me")}
              </Component>
            </Button>
          </Component>
        </Component>

        <Component
          animated={Animated.RIGHT}
          className={clsx(
            "transition-default absolute sm:relative w-1/2 h-full flex justify-center items-center -z-10"
          )}
        >
          <div className="transition-default relative w-50 h-5/6 before:absolute before:top-0 before:left-0 before:-translate-x-10 before:-translate-y-6 before:w-10 before:h-10 before:border-l-4 before:border-t-4 dark:before:border-blue-200 before:border-black/80 after:absolute after:bottom-0 after:right-0 after:translate-x-10 after:translate-y-6 after:w-10 after:h-10 after:border-r-4 after:border-b-4 dark:after:border-blue-200 after:border-black/80">
            <Image
              src={String(process.env.NEXT_PUBLIC_PHOTO!)}
              alt="Dev image"
              fill
              priority
              className="transition-default aspect-video object-center"
            />
          </div>
          <div
            className="transition-default absolute top-0 left-0 w-full h-full bg-transparent"
          />
        </Component>
      </Component>

      <SkillsCarrousel />

      {/* ************* About ************* */}

      <Component className={clsx(
        "transition-default w-full flex flex-col justify-center items-start gap-2 sm:px-8 px-3 mt-5"
      )}>
        <Link
          href="/?search=about"
          className={clsx(
            "group",
            "transition-default flex items-center gap-5"
          )}
        >
          <Title id="about">
            {t("about_title")}
          </Title>
          <FaLink
            className="transition-default text-2xl dark:text-white text-black opacity-0 lg:group-hover:opacity-100"
          />
        </Link>

        <div className="transition-default mt-10">
          <Component
            component="span"
          >
            {t("iam")} &nbsp;
          </Component>
          <span className="transition-default relative dark:text-white text-black text-xl font-['papyrus'] font-bold mx-6 before:absolute before:top-0 before:left-0 before:-translate-x-6 before:-translate-y-1 before:w-4 before:h-4 before:border-l-2 before:border-t-2 dark:before:border-white before:border-black after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:translate-y-1 after:w-4 after:h-4 after:border-r-2 after:border-b-2 dark:after:border-white after:border-black">
            Youmbi Le-duc
          </span>
          &nbsp; {t("iam_dev")}&nbsp;
          <Component
            component="span"
            className="transition-default dark:text-white text-black font-extrabold ml-1"
          >
            {devInfos(t).typedjs[devInfos(t).typedjs.length - 1]}.
          </Component>
        </div>

        <Component
          component="p"
          className="transition-default mt-3"
        >
          {t("about_content")}
        </Component>

        <div className="transition-default w-full flex flex-wrap justify-start items-start sm:gap-22 gap-16 mt-4">
          <Component className={clsx(
            "transition-default flex flex-col gap-10"
          )}>
            <div className=" transition-default flex flex-wrap justify-between gap-16">
              <Component
                component="ul"
                animated={Animated.SECTION}
                className={clsx(
                  "transition-default flex flex-col gap-6"
                )}
              >
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  {t("education_level")} :
                  <span className="transition-default dark:text-white text-black">
                    {devInfos().studyLevel}
                  </span>
                </Component>
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  {t("country")} :
                  <span className="transition-default dark:text-white text-black">
                    {devInfos().country}
                  </span>
                </Component>
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  {t("town")} :
                  <span className="transition-default dark:text-white text-black">
                    {devInfos().town}
                  </span>
                </Component>
              </Component>

              <Component
                component="ul"
                animated={Animated.SECTION}
                className={clsx(
                  "transition-default flex flex-col justify-center items-start gap-6"
                )}
              >
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  <Component component="span">
                    {t("dev_email")} :
                  </Component>
                  <Link
                    href={`mailto:"Youmbi Le-duc" <${devInfos().devEmail}>`}
                    className="transition-default dark:text-white text-black underline tracking-[3px] font-bold"
                  >
                    {devInfos().devEmail}
                  </Link>
                </Component>
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  <Component component="span">
                    {t("professional_email")} :
                  </Component>
                  <Link href={`mailto:"Youmbi Le-duc" <${devInfos().email}>`} className="transition-default dark:text-white text-black underline tracking-[3px] font-bold">
                    {devInfos().email}
                  </Link>
                </Component>
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  <Component component="span">
                    {t("phone")} :
                  </Component>
                  <Link
                    href={`tel:+237690552385`}
                    className="transition-default dark:text-white text-black underline tracking-[3px] font-bold"
                  >
                    {devInfos().phoneNumber}
                  </Link>
                </Component>
                <Component
                  component="li"
                  className="transition-default relative w-full flex flex-wrap items-center gap-2 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40"
                >
                  <Component component="span">
                    {t("status")} :
                  </Component>
                  <Component
                    component="span"
                    className="transition-default dark:text-white text-black ml-2 font-bold"
                  >
                    {devInfos().status}
                  </Component>
                </Component>
              </Component>
            </div>

            <Link
              href={`http://wa.me/${devInfos().phoneNumber}?text=${hour >= 16 ? t("goodbye") : t("hello")} ${t("presentation_text")}`}
              target="_blank"
              className={clsx(
                "section-animated",
                "transition-default relative w-80 h-[50px] bg-transparent mt-2 dark:text-white text-black border-b-2 dark:border-white border-black rounded-xl flex justify-center items-center flex-nowrap lg:hover:shadow-sm dark:lg:hover:shadow-white hover:shadow-black active:scale-90 lg:before:transition-all lg:before:duration-500 lg:before:absolute lg:before:top-0 lg:before:left-1/2 lg:before:border-t-2 lg:dark:before:border-white lg:before:border-black lg:before:rounded-xl lg:before:w-0 lg:before:h-2 lg:hover:before:w-[95%] lg:hover:before:left-1"
              )}
            >
              <Component component="span">
                {t("discuss_with_me")}
              </Component>
            </Link>

            <Component
              component="ul"
              animated={Animated.SECTION}
              className={clsx(
                "transition-default w-2/3 flex flex-col justify-center items-start gap-6"
              )}
            >
              {
                Object.entries(other).map((key) => {
                  return (
                    <li key={createId()} className="transition-default relative w-full flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        {key[0]}
                        &nbsp;
                        :
                        <span className="transition-default dark:text-white text-black">{key[1]}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-500/40 rounded-full overflow-hidden">
                        <div
                          className="transition-default h-full bg-gradient-to-r dark:from-black from-white dark:to-white/80 to-black/80 rounded-full"
                          style={{ width: `${key[1]}%` }}
                        ></div>
                      </div>
                    </li>
                  )
                })
              }
            </Component>
          </Component>

          <Component
            component="ul"
            animated={Animated.SECTION}
            className={clsx(
              "transition-default w-[265px] flex flex-col justify-center items-start gap-6"
            )}
          >
            {
              skills.map((child) => {
                return (
                  <li key={createId()} className="transition-default relative w-full flex flex-col gap-2">
                    <div className="transition-default flex justify-between items-center">
                      {child.technology.name}
                      &nbsp;
                      :
                      <span className="transition-default dark:text-white text-black">{child.percent}%</span>
                    </div>
                    <div className="transition-default w-full h-2 bg-gray-500/40 rounded-full overflow-hidden">
                      <div
                        className="transition-default h-full bg-gradient-to-r dark:from-black from-white dark:to-white/80 to-black/80 rounded-full"
                        style={{ width: `${child.percent}%` }}
                      />
                    </div>
                  </li>
                )
              })
            }
          </Component>
        </div>
      </Component>

      <CV />

      <Component
        id="route"
        animated={Animated.SECTION}
        className={clsx(
          "transition-default w-full flex items-center gap-5 sm:px-8 px-3 mb-5"
        )}
      >
        <Component
          animated={Animated.LEFT}
          onClick={() => setActiveView("grid")}
          className={clsx(
            "transition-default relative flex gap-2 items-center px-3 py-2 border dark:border-white/20 border-black/20 rounded-2xl cursor-pointer lg:hover:shadow-lg lg:hover:dark:shadow-white/20 lg:hover:shadow-black/20 active:scale-90"
          )}
        >
          {
            activeView === "grid" && (
              <FaCheck
                className={clsx(
                  "transition-default absolute -top-3 -right-2 text-2xl text-emerald-500"
                )}
              />
            )
          }
          <FaGrip
            className="transition-default sm:text-3xl text-xl"
          />
          <Component
            component="span"
            className="transition-default sm:text-lg font-extrabold tracking-widest"
          >
            {t("grid")}
          </Component>
        </Component>

        <Component
          animated={Animated.RIGHT}
          onClick={() => setActiveView("date")}
          className={clsx(
            "transition-default relative flex gap-2 items-center px-3 py-2 border dark:border-white/20 border-black/20 rounded-2xl cursor-pointer lg:hover:shadow-lg lg:hover:dark:shadow-white/20 lg:hover:shadow-black/20 active:scale-90"
          )}
        >
          {
            activeView === "date" && (
              <FaCheck
                className={clsx(
                  "transition-default absolute -top-3 -right-2 text-2xl text-emerald-500"
                )}
              />
            )
          }
          <FaCalendarCheck
            className="transition-default sm:text-3xl text-xl"
          />
          <Component
            component="span"
            className="transition-default sm:text-lg font-extrabold tracking-widest"
          >
            {t("dates")}
          </Component>
        </Component>
      </Component>

      <Component
        animated={Animated.SECTION}
        className={clsx(
          "transition-default w-full flex-col mb-5 sm:px-8 px-3",
          activeView === "grid" ? "flex" : "hidden"
        )}
      >
        <Link
          href="/?search=route"
          className={clsx(
            "group",
            "transition-default w-max flex items-center gap-5"
          )}
        >
          <Title>
            <FaGraduationCap
              className={clsx(
                "transition-default sm:text-4xl text-3xl"
              )}
            />

            <Component
              component="span"
              className="transition-default sm:text-lg font-extrabold tracking-widest"
            >
              {t("route")}
            </Component>
          </Title>

          <FaLink
            className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
          />
        </Link>

        <Component className={clsx(
          "transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mt-13"
        )}>
          {
            parcours(t).map((child) => (
              <Component
                key={child.title}
                className={clsx(
                  "transition-default relative flex flex-col gap-3 border dark:border-white/20 border-black/20 shadow-xl dark:shadow-white/15 shadow-black/20 rounded-xl p-4 overflow-hidden dark:bg-white/10 bg-black/6 lg:hover:-translate-y-2 before:transition-default before:absolute before:-top-10 before:-right-10 before:size-30 before:bg-radial dark:before:from-white/50 before:from-cyan-500/50 dark:before:to-white/10 before:to-cyan-500/10 before:to-60% before:opacity-70 before:rounded-full",
                )}
              >
                <span className="transition-default dark:text-blue-200 text-cyan-500 font-bold tracking-widest">
                  {child.title}
                </span>
                <Desc
                  sentence={child.description}
                />
              </Component>
            ))
          }
        </Component>

        <Link
          href="/?search=route"
          className={clsx(
            "transition-default w-max flex items-center gap-5 mt-20"
          )}
        >
          <Title>
            <FaUserTie
              className="transition-default sm:text-2xl"
            />
            <Component
              component="span"
              className="transition-default sm:text-lg font-extrabold tracking-widest"
            >
              {t("experience")}
            </Component>
          </Title>
          <FaLink
            className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
          />
        </Link>

        <Component className={clsx(
          "transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mt-13"
        )}>
          {
            experiences(t).map((child) => (
              <Component
                key={child.title}
                className={clsx(
                  "transition-default relative flex flex-col gap-3 border dark:border-white/20 border-black/20 shadow-xl dark:shadow-white/15 shadow-black/20 rounded-xl p-4 overflow-hidden dark:bg-white/10 bg-black/6 lg:hover:-translate-y-2 before:transition-default before:absolute before:-top-10 before:-right-10 before:size-30 before:bg-radial dark:before:from-white/50 before:from-cyan-500/50 dark:before:to-white/10 before:to-cyan-500/10 before:to-60% before:opacity-70 before:rounded-full",
                )}
              >
                <span className="transition-default dark:text-blue-200 text-cyan-500 font-bold tracking-widest">
                  {child.title}
                </span>
                <Desc
                  sentence={child.description}
                />
              </Component>
            ))
          }
        </Component>
      </Component>

      <Component
        animated={Animated.SECTION}
        className={clsx(
          "transition-default w-full min-h-[500px] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] mb-5 gap-6 sm:px-8 px-3",
          activeView === "date" ? "grid" : "hidden"
        )}
      >
        <Component
          animated={Animated.LEFT}
          className={clsx(
            "transition-default h-full flex flex-col justify-start items-start"
          )}
        >
          <Link
            href="/?search=route"
            className={clsx(
              "group",
              "transition-default w-max flex items-center gap-5"
            )}
          >
            <Title>
              <FaGraduationCap
                className="transition-default sm:text-4xl text-3xl"
              />
              <Component
                component="span"
                className="transition-default sm:text-lg font-extrabold tracking-widest"
              >
                {t("route")}
              </Component>
            </Title>
            <FaLink className="transition-default text-2xl dark:text-white text-black opacity-0 lg:group-hover:opacity-100" />
          </Link>

          <div className="transition-default flex flex-col justify-center items-center dark:bg-black bg-white/80 rounded-2xl p-2 pt-10 text-justify border dark:border-white/20 border-black/20 shadow-lg dark:shadow-white/20 shadow-black/20 dark:opacity-85 mt-9">
            {
              parcours(t).map((child) => (
                <Div key={createId()}>
                  <span className="transition-default flex justify-start items-center gap-2 text-bold dark:text-white/40 text-black/30 font-medium text-[14px]">
                    <FaCalendarAlt />
                    {
                      child.year && child.year
                      ||
                      <Component component="span">
                        {t("from")}
                        &nbsp;
                        {child?.begin}
                        &nbsp;
                        {t("to")}
                        &nbsp;
                        {child?.end}
                      </Component>
                    }
                  </span>
                  <Component
                    component="p"
                    className="transition-default text-bold dark:text-white text-black font-medium tracking-wide"
                  >
                    {child.title}
                  </Component>
                  <Desc
                    sentence={child.description}
                  />
                </Div>
              ))
            }
          </div>
        </Component>

        <Component
          animated={Animated.RIGHT}
          className={clsx(
            "transition-default h-full flex flex-col justify-start items-start"
          )}
        >
          <Link
            href="/?search=route"
            className={clsx(
              "group",
              "transition-default w-max flex items-center gap-5"
            )}
          >
            <Title>
              <FaUserTie
                className="transition-default sm:text-2xl"
              />
              <Component
                component="span"
                className="transition-default sm:text-lg font-extrabold tracking-widest"
              >
                {t("experience")}
              </Component>
            </Title>
            <FaLink
              className="transition-default text-2xl dark:text-white text-black opacity-0 lg:group-hover:opacity-100"
            />
          </Link>

          <div className="transition-default flex flex-col justify-center items-center dark:bg-black bg-white/80 rounded-2xl p-2 pt-10 text-justify border dark:border-white/20 border-black/20 shadow-lg dark:shadow-white/20 shadow-black/20 dark:opacity-85 mt-11">
            {
              experiences(t).map((child) => (
                <Div key={createId()}>
                  <span className="transition-default flex justify-start items-center gap-2 text-bold dark:text-white/40 text-black/30 font-medium text-[14px]">
                    <FaCalendarAlt />
                    <Component component="span">
                      {t("from")}
                      &nbsp;
                      {child?.begin}
                      &nbsp;
                      {t("to")}
                      &nbsp;
                      {child?.end}
                    </Component>
                  </span>
                  <Component
                    component="p"
                    className="transition-default text-bold dark:text-white text-black font-medium tracking-wide"
                  >
                    {child.title}
                  </Component>
                  <Desc
                    sentence={child.description}
                  />
                </Div>
              ))
            }
          </div>
        </Component>
      </Component>

      <SkillsCarrousel />
    </Container >
  );
}