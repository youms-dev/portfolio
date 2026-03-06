"use client";

import { Title } from "#/components/title";
import { createId } from "@paralleldrive/cuid2";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaCalendarCheck, FaCheck, FaGraduationCap, FaLink, FaPlus, FaUserTie } from "react-icons/fa";
import { FaGrip } from "react-icons/fa6";
import Typed from "typed.js";
import { BgGrid } from "./components/bg-grid";
import { Button } from "./components/button";
import { Container } from "./components/container";
import { CV } from "./components/cv";
import { Desc } from "./components/description";
import { Div } from "./components/div";
import { SkillsCarrousel } from "./components/skills-carrousel";
import { devInfos, experiences, other, parcours, skills } from "./constants/data";

export default function Page() {
  const hour = new Date().getHours();
  const router = useRouter();
  const typedRef = useRef<HTMLHeadingElement>(null);
  const [activeView, setActiveView] = useState<"grid" | "date">("date");

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: devInfos.typedjs,
      typeSpeed: 50,
      loop: true,
      cursorChar: ""
    });

    return () => typed.destroy();
  }, []);

  return (
    <Container centerX>
      <div className={
        clsx(
          "section-animate",
          "transition-default relative w-full min-h-96 sm:h-100 flex justify-center items-center mb-10 sm:px-10 px-2 overflow-hidden before:transition-default before:absolute before:bottom-0 before:translate-y-10 before:w-2/3 before:h-1 dark:before:bg-blue-200 before:bg-cyan-500",
        )
      }
      >
        <BgGrid />
        <div className={clsx(
          "left-item",
          "transition-default w-full sm:w-1/2 h-full p-3 flex flex-col justify-center items-start gap-1 dark:max-sm:bg-black/60 sm:bg-transparent bg-white/70 bg-opacity-80"
        )}>
          <h1 className="transition-default text-2xl text-left dark:text-blue-200 text-cyan-500">
            <p className="transition-default dark:text-blue-50 text-cyan-600">
              {
                new Date().getHours() >= 16 ? "Bonsoir" : "Bonjour"
              },
            </p>
            <p className="my-2">
              <span className="transition-default dark:text-blue-50 text-cyan-600">
                je suis
              </span>
              <span
                className="relative font-['papyrus'] dark:font-normal font-bold mx-4 before:absolute before:top-0 before:left-0 before:-translate-x-6 before:-translate-y-1 before:w-4 before:h-4 before:border-l-2 before:border-t-2 dark:before:border-blue-200 before:border-cyan-500 after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:translate-y-1 after:w-4 after:h-4 after:border-r-2 after:border-b-2 dark:after:border-blue-200 after:border-cyan-500"
              >
                Youmbi Le-duc
              </span>
            </p>
          </h1>

          <h2
            ref={typedRef}
            className="transition-default inline-block w-full h-7 text-xl text-left dark:text-blue-200 text-cyan-500 font-['papyrus'] dark:font-normal font-bold"
          />

          <p className="transition-default text-justify">
            Je suis développeur web et mobile full stack passionné par la création d&rsquo;applications web. J&rsquo;ai une solide expérience dans le développement d&rsquo;applications front-end et back-end, ainsi que dans la conception de bases de données. Je suis toujours à la recherche de nouveaux défis et d&rsquo;opportunités pour apprendre et grandir en tant que développeur.
          </p>

          <div className="transition-default flex justify-center items-center rounded-2xl dark:bg-black bg-white">
            <Button
              onClick={() => router.push("/?search=about")}
            >
              <FaPlus />&nbsp;Plus à propos de moi
            </Button>
          </div>
        </div>

        <div className={clsx(
          "right-item",
          "transition-default absolute sm:relative w-1/2 h-full flex justify-center items-center -z-10"
        )}>
          <div className="transition-default relative w-50 h-5/6 before:absolute before:top-0 before:left-0 before:-translate-x-10 before:-translate-y-6 before:w-10 before:h-10 before:border-l-4 before:border-t-4 dark:before:border-blue-200 before:border-cyan-500 after:absolute after:bottom-0 after:right-0 after:translate-x-10 after:translate-y-6 after:w-10 after:h-10 after:border-r-4 after:border-b-4 dark:after:border-blue-200 after:border-cyan-500">
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
        </div>
      </div>

      <SkillsCarrousel />

      {/* ************* À propos ************* */}

      <div className={clsx(
        "section-animate",
        "transition-default w-full flex flex-col justify-center items-start gap-2 sm:px-8 px-3 mt-5"
      )}>
        <Link
          href="/?search=about"
          className={clsx(
            "group",
            "transition-default flex items-center gap-5"
          )}
        >
          <Title id="about">À propos de moi</Title>
          <FaLink
            className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
          />
        </Link>

        <div className="transition-default mt-10">
          <span>Moi c&rsquo;est &nbsp;</span>
          <span className="transition-default relative dark:text-blue-200 text-cyan-500 text-xl font-['papyrus'] font-bold mx-6 before:absolute before:top-0 before:left-0 before:-translate-x-6 before:-translate-y-1 before:w-4 before:h-4 before:border-l-2 before:border-t-2 dark:before:border-blue-200 before:border-cyan-500 after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:translate-y-1 after:w-4 after:h-4 after:border-r-2 after:border-b-2 dark:after:border-blue-200 after:border-cyan-500">
            Youmbi Le-duc
          </span>
          &nbsp; et je suis
          <span className="transition-default dark:text-blue-200 text-cyan-500 font-extrabold ml-1">Développeur web et mobile full stack.</span>
        </div>

        <p className="transition-default mt-3">
          Ayant débuté ma carrière en 2022 dans le monde du développement d&rsquo;applications et plus particulièrement dans le monde du développement web, je suis passionné par le développement d&rsquo;applications web et mobile; j&rsquo;ai acquis une solide expérience dans le développement d'application côté front-end et back-end grâce à la grande pléthore de technologies que je maîtrise dès à présent. J&rsquo;ai également une très bonne connaissance des bases de données et des systèmes de gestion de contenu. Je suis toujours à la recherche de nouveaux défis et d&rsquo;opportunités pour apprendre et grandir en tant que développeur.
        </p>

        <div className="transition-default w-full flex flex-wrap justify-start items-start sm:gap-22 gap-16 mt-4">
          <div className={clsx(
            "section-animate",
            "transition-default flex flex-col gap-10"
          )}>
            <div className=" transition-default flex flex-wrap justify-between gap-16">

              <ul className={clsx(
                "section-animate",
                "transition-default flex flex-col gap-6"
              )}>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Niveau d&rsquo;étude :
                  <span className="transition-default dark:text-blue-200 text-cyan-500 ml-2">
                    {devInfos.studyLevel}
                  </span>
                </li>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Pays : <span className="transition-default dark:text-blue-200 text-cyan-500 ml-2">{devInfos.country}</span>
                </li>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Ville : <span className="transition-default dark:text-blue-200 text-cyan-500 ml-2">{devInfos.town}</span>
                </li>
              </ul>

              <ul className={clsx(
                "section-animate",
                "transition-default flex flex-col justify-center items-start gap-6"
              )}>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  <span>Dev email :</span>
                  &nbsp;
                  <Link href={`mailto:${devInfos.devEmail}`} className="transition-default dark:text-blue-200 text-cyan-500 underline ml-2 tracking-[3px] font-bold">
                    {devInfos.email}
                  </Link>
                </li>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  <span>Email professionnelle :</span>
                  <Link href={`mailto:${devInfos.email}`} className="transition-default dark:text-blue-200 text-cyan-500 underline ml-2 tracking-[3px] font-bold">
                    {devInfos.email}
                  </Link>
                </li>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  <span>Téléphone :</span>
                  <span className="transition-default dark:text-blue-200 text-cyan-500 ml-2">
                    <Link href="tel:+237690552385" className="transition-default tracking-[3px] font-bold">{devInfos.phoneNumber}</Link>
                  </span>
                </li>
                <li className="transition-default relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  <span>Statut :</span>
                  <span className="transition-default dark:text-blue-200 text-cyan-500 ml-2 font-bold">{devInfos.status}</span>
                </li>
              </ul>
            </div>

            <Link
              href={`http://wa.me/${devInfos.phoneNumber}?text=${hour >= 16 ? "Bonsoir" : "Bonjour"} monsieur Le-duc. Je viens de visiter votre portfolio et j'aimerais discuter avec vous !`}
              target="_blank"
              className={clsx(
                "section-animate",
                "transition-default relative w-2/3 h-[50px] bg-transparent mt-2 dark:text-blue-200 text-cyan-500 border-b-2 dark:border-blue-200 border-cyan-500 rounded-xl flex justify-center items-center flex-nowrap lg:hover:shadow-sm dark:lg:hover:shadow-blue-200 hover:shadow-cyan-500 active:scale-90 lg:before:transition-all lg:before:duration-500 lg:before:absolute lg:before:top-0 lg:before:left-1/2 lg:before:border-t-2 lg:dark:before:border-blue-200 lg:before:border-cyan-500 lg:before:rounded-xl lg:before:w-0 lg:before:h-2 lg:hover:before:w-[95%] lg:hover:before:left-1"
              )}
            >
              Discuter avec moi
            </Link>

            <ul className={clsx(
              "section-animate",
              "transition-default w-2/3 flex flex-col justify-center items-start gap-6"
            )}>
              {
                Object.entries(other).map((key) => {
                  return (
                    <li key={createId()} className="transition-default relative w-full flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        {key[0]}
                        &nbsp;
                        :
                        <span className="transition-default dark:text-blue-200 text-cyan-500">{key[1]}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-500/40 rounded-full overflow-hidden">
                        <div
                          className="transition-default h-full bg-gradient-to-r from-black/80 dark:to-blue-200 to-cyan-500 rounded-full"
                          style={{ width: `${key[1]}%` }}
                        ></div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <ul className={clsx(
            "section-animate",
            "transition-default w-[265px] flex flex-col justify-center items-start gap-6"
          )}>
            {
              skills.map((child) => {
                return (
                  <li key={createId()} className="transition-default relative w-full flex flex-col gap-2">
                    <div className="transition-default flex justify-between items-center">
                      {child.technology.name}
                      &nbsp;
                      :
                      <span className="transition-default dark:text-blue-200 text-cyan-500">{child.percent}%</span>
                    </div>
                    <div className="transition-default w-full h-2 bg-gray-500/40 rounded-full overflow-hidden">
                      <div
                        className="transition-default h-full bg-gradient-to-r from-black/80 dark:to-blue-200 to-cyan-500 rounded-full"
                        style={{ width: `${child.percent}%` }}
                      />
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <CV />

      <div
        id="route"
        className={clsx(
          "section-animate",
          "transition-default w-full flex items-center gap-5 sm:px-8 px-3 mb-5"
        )}
      >
        <div
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
            className="transition-default sm:text-3xl text-xl dark:text-blue-200 text-cyan-500"
          />
          <span className="transition-default sm:text-lg dark:text-blue-200 text-cyan-500 font-extrabold tracking-widest">Grille</span>
        </div>
        <div
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
            className="transition-default sm:text-3xl text-xl dark:text-blue-200 text-cyan-500"
          />
          <span className="transition-default sm:text-lg dark:text-blue-200 text-cyan-500 font-extrabold tracking-widest">Dates</span>
        </div>
      </div>

      <div className={clsx(
        "section-animate",
        "transition-default w-full flex-col mb-5 sm:px-8 px-3",
        activeView === "grid" ? "flex" : "hidden"
      )}>
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
            <span>Parcours</span>
          </Title>
          <FaLink
            className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
          />
        </Link>

        <div className={clsx(
          "section-animate",
          "transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mt-13"
        )}>
          {
            parcours.map((child) => (
              <div
                key={child.title}
                className={clsx(
                  "section-animate",
                  "transition-default relative flex flex-col gap-3 border dark:border-white/20 border-black/20 shadow-xl dark:shadow-white/15 shadow-black/20 rounded-xl p-4 overflow-hidden dark:bg-white/10 bg-black/6 lg:hover:-translate-y-2 before:transition-default before:absolute before:-top-10 before:-right-10 before:size-30 before:bg-radial dark:before:from-white/50 before:from-cyan-500/50 dark:before:to-white/10 before:to-cyan-500/10 before:to-60% before:opacity-70 before:rounded-full",
                )}
              >
                <span className="transition-default dark:text-blue-200 text-cyan-500 font-bold tracking-widest">
                  {child.title}
                </span>
                <Desc
                  sentence={child.description}
                />
              </div>
            ))
          }
        </div>

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
            <span>Experience</span>
          </Title>
          <FaLink
            className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
          />
        </Link>

        <div className={clsx(
          "section-animate",
          "transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mt-13"
        )}>
          {
            experiences.map((child) => (
              <div
                key={child.title}
                className={clsx(
                  "section-animate",
                  "transition-default relative flex flex-col gap-3 border dark:border-white/20 border-black/20 shadow-xl dark:shadow-white/15 shadow-black/20 rounded-xl p-4 overflow-hidden dark:bg-white/10 bg-black/6 lg:hover:-translate-y-2 before:transition-default before:absolute before:-top-10 before:-right-10 before:size-30 before:bg-radial dark:before:from-white/50 before:from-cyan-500/50 dark:before:to-white/10 before:to-cyan-500/10 before:to-60% before:opacity-70 before:rounded-full",
                )}
              >
                <span className="transition-default dark:text-blue-200 text-cyan-500 font-bold tracking-widest">
                  {child.title}
                </span>
                <Desc
                  sentence={child.description}
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className={clsx(
        "section-animate",
        "transition-default w-full min-h-[500px] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] mb-5 gap-6 sm:px-8 px-3",
        activeView === "date" ? "grid" : "hidden"
      )}>
        <div className={clsx(
          "left-item",
          "transition-default h-full flex flex-col justify-start items-start"
        )}>
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
              <span>Parcours</span>
            </Title>
            <FaLink
              className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
            />
          </Link>

          <div className="transition-default flex flex-col justify-center items-center dark:bg-gray-900/40 bg-cyan-500/10 rounded-2xl p-2 pt-10 text-justify border dark:border-white/20 border-black/20 shadow-lg dark:shadow-white/20 shadow-black/20 mt-9">
            {
              parcours.map((child) => (
                <Div key={createId()}>
                  <span className="transition-default flex justify-start items-center gap-2 text-bold dark:text-blue-200 text-cyan-500">
                    <FaCalendarAlt />
                    &nbsp;
                    {
                      child.year && child.year
                      ||
                      <span>
                        {child?.begin} à {child?.end}
                      </span>
                    }
                  </span>
                  <p className="transition-default text-bold dark:text-blue-200 text-cyan-500">
                    {child.title}
                  </p>
                  <Desc
                    sentence={child.description}
                  />
                </Div>
              ))
            }
          </div>
        </div>

        <div className={clsx(
          "right-item",
          "transition-default h-full flex flex-col justify-start items-start"
        )}>

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
              <span>Expérience</span>
            </Title>
            <FaLink
              className="transition-default text-2xl dark:text-white text-cyan-500 opacity-0 lg:group-hover:opacity-100"
            />
          </Link>

          <div className="transition-default flex flex-col justify-center items-center dark:bg-gray-900/40 bg-cyan-500/10 rounded-2xl p-2 pt-10 text-justify border dark:border-white/20 border-black/20 shadow-lg dark:shadow-white/20 shadow-black/20 mt-10">
            {
              experiences.map((child) => (
                <Div key={createId()}>
                  <span className="transition-default flex justify-start items-center gap-2 text-bold dark:text-blue-200 text-cyan-500">
                    <FaCalendarAlt /> {child?.begin} au {child?.end}
                  </span>
                  <p className="transition-default text-bold dark:text-blue-200 text-cyan-500">
                    {child.title}
                  </p>
                  <Desc
                    sentence={child.description}
                  />
                </Div>
              ))
            }
          </div>
        </div>
      </div>

      <SkillsCarrousel />
    </Container >
  );
}