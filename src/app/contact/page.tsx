"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaEnvelopeOpenText, FaFileAlt, FaPaperPlane, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaEnvelopeCircleCheck, FaPhoneVolume } from "react-icons/fa6";
import { toast } from "react-toastify";
import { api } from "../axios";
import { Button } from "../components/button";
import { Component } from "../components/component";
import { Container } from "../components/container";
import { CV } from "../components/cv";
import { SkillsCarrousel } from "../components/skills-carrousel";
import { Title } from "../components/title";
import { devInfos } from "../constants/data";
import { Animated } from "../types/enum";
import { ApiError } from "../types/errors";

export default function Contact() {
    const date = new Date();
    const hour = date.getHours();
    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const [formData, setFormData] = useState<typeof initialFormData>(initialFormData);
    const { t } = useTranslation();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSendMail = async (e: React.FormEvent) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key as keyof typeof formData].trim() === "") {
                toast.info(t("toast_fill_fields"));
                setIsSubmitting(false);
                return;
            }
        }

        try {
            const { data: { res } } = await api.post("/api/sendMail", formData);

            toast.success(`${t("toast_mail_sent", { email: res })}`);
            toast.success(t("toast_check_mail"));
            setIsSubmitting(false);
            setFormData(initialFormData);
        }
        catch (e) {
            const { data: { error } } = e as {
                data: ApiError;
                status: number,
            };

            if (error.type === "warning") toast.warning(error.message);
            else if (error.type === "error") toast.error(error.message);
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        setIsSubmitting(true);
        handleSendMail(e);
    }

    return (
        <Container centerX>
            <Component
                animated={Animated.SECTION}
                className="transition-default w-full flex items-center mt-5 sm:px-8 px-3"
            >
                <Title id="contact" className="transition-default text-2xl mb-10">
                    <Component component="span">
                        {t("contact_title")}
                    </Component>
                </Title>
            </Component>

            <Component
                animated={Animated.SECTION}
                className="transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 sm:px-10 px-5 my-10"
            >
                <Component
                    animated={Animated.LEFT}
                    className="transition-default relative flex flex-col items-center gap-4 border dark:border-white/20 border-black/20 p-5 rounded-2xl dark:bg-black bg-white shadow-lg dark:shadow-white/20 shadow-black/20 lg:hover:-translate-y-2 overflow-hidden before:transition-default before:absolute before:-left-full before:top-0 before:w-15 before:h-full dark:before:bg-white/20 before:bg-black/10 before:-skew-x-30 lg:hover:before:left-[150%]"
                >
                    <FaPhoneVolume className="transition-default text-6xl dark:text-white/30 text-black/40" />
                    <Component
                        component="span"
                        className="transition-default text-lg font-bold tracking-widest"
                    >
                        {t("phone")}
                    </Component>
                    <Link
                        href={`tel:${devInfos(t).phoneNumber}`}
                        className="transition-default text-lg font-bold tracking-widest"
                    >
                        {devInfos(t).phoneNumber}
                    </Link>
                </Component>

                <Component
                    animated={Animated.SECTION}
                    className="transition-default relative flex flex-col items-center gap-4 border dark:border-white/20 border-black/20 p-5 rounded-2xl dark:bg-black bg-white shadow-lg dark:shadow-white/20 shadow-black/20 lg:hover:-translate-y-2 overflow-hidden before:transition-default before:absolute before:-left-full before:top-0 before:w-15 before:h-full dark:before:bg-white/20 before:bg-black/10 before:-skew-x-30 lg:hover:before:left-[150%]"
                >
                    <FaEnvelopeOpenText className="transition-default text-6xl dark:text-white/30 text-black/40" />
                    <span className="transition-default text-lg font-bold tracking-widest">Email</span>
                    <Link
                        href={`mailto:${devInfos(t).email}`}
                        target="_blank"
                        className="transition-default text-lg font-bold tracking-widest"
                    >
                        {devInfos(t).email}
                    </Link>
                </Component>

                <Component
                    animated={Animated.RIGHT}
                    className="transition-default relative flex flex-col items-center gap-4 border dark:border-white/20 border-black/20 p-5 rounded-2xl dark:bg-black bg-white shadow-lg dark:shadow-white/20 shadow-black/20 lg:hover:-translate-y-2 overflow-hidden before:transition-default before:absolute before:-left-full before:top-0 before:w-15 before:h-full dark:before:bg-white/20 before:bg-black/10 before:-skew-x-30 lg:hover:before:left-[150%]"
                >
                    <FaWhatsapp className="transition-default text-6xl dark:text-white/30 text-black/40" />
                    <span className="transition-default text-lg font-bold tracking-widest">Whatsapp</span>
                    <Link
                        href={`http://wa.me/${devInfos(t).phoneNumber}?text=${hour >= 16 ? "Bonsoir" : "Bonjour"} monsieur Le-duc. Je viens de visiter votre portfolio et j'aimerais discuter avec vous !`}
                        target="_blank"
                        className="transition-default text-lg font-bold tracking-widest"
                    >
                        {devInfos(t).phoneNumber}
                    </Link>
                </Component>
            </Component>

            <SkillsCarrousel />

            <Component
                animated={Animated.SECTION}
                className="transition-default w-full flex flex-col items-center mt-5 sm:px-10 px-5"
            >
                <div
                    className="transition-default relative w-full dark:bg-black bg-white rounded-3xl p-8 border dark:border-white/20 border-black/20 before:transition-default before:absolute before:top-0 before:left-0 before:-translate-x-4 before:-translate-y-4 before:w-8 before:h-8 before:border-l-4 before:border-t-4 dark:before:border-white/80 before:border-black/80 after:transition-default after:absolute after:bottom-0 after:right-0 after:translate-x-4 after:translate-y-4 after:w-8 after:h-8 after:border-r-4 after:border-b-4 dark:after:border-white/80 after:border-black/80"
                >
                    <form
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        className={clsx(
                            "transition-default w-full flex flex-col gap-6",
                            isSubmitting && "pointer-events-none"
                        )}
                    >
                        {/* Nom */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaUser className="transition-default text-lg" />
                                <Component
                                    component="label"
                                    className="transition-default font-bold"
                                >
                                    {t("contact_name")}
                                </Component>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="transition-default w-full h-12 px-4 bg-transparent border-b-2 dark:border-white/30 border-black/30 dark:text-white text-black dark:focus:border-white/80 focus:border-black/80 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50"
                                placeholder={t("contact_name_placeholder")}
                            />
                        </div>

                        {/* Email */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaEnvelope className="transition-default text-lg" />
                                <Component
                                    component="label"
                                    className="transition-default font-bold"
                                >
                                    {t("contact_email")}
                                </Component>
                            </div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="transition-default w-full h-12 px-4 bg-transparent border-b-2 dark:border-white/30 border-black/30 dark:text-white text-black dark:focus:border-white/80 focus:border-black/80 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50"
                                placeholder={t("contact_email_placeholder")}
                            />
                        </div>

                        {/* Sujet */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaFileAlt className="transition-default text-lg" />
                                <Component
                                    component="label"
                                    className="transition-default font-bold"
                                >
                                    {t("contact_subject")}
                                </Component>
                            </div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="transition-default w-full h-12 px-4 bg-transparent border-b-2 dark:border-white/30 border-black/30 dark:text-white text-black dark:focus:border-white/80 focus:border-black/80 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50"
                                placeholder={t("contact_subject_placeholder")}
                            />
                        </div>

                        {/* Message */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaPaperPlane className="transition-default text-lg" />
                                <Component
                                    component="label"
                                    className="transition-default font-bold"
                                >
                                    {t("contact_message")}
                                </Component>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={6}
                                className="transition-default w-full h-40 px-4 bg-transparent border-b-2 dark:border-white/30 border-black/30 dark:text-white text-black dark:focus:border-white/80 focus:border-black/80 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50 resize-none"
                                placeholder={t("contact_message_placeholder")}
                            />
                        </div>

                        {/* Bouton d'envoi */}
                        <div className="transition-default flex justify-center mt-6">
                            <Button
                                type="submit"
                                loading={isSubmitting}
                                size="w-60 h-14"
                            >
                                <FaPaperPlane className={clsx(
                                    "transition-default dark:text-black/80 text-white/80",
                                    !isSubmitting && "dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80",
                                )} />
                                <Component
                                    component="span"
                                    className={clsx(
                                        "transition-default dark:text-black/80 text-white/80",
                                        !isSubmitting && "dark:lg:group-hover/button:text-white/80 lg:group-hover/button:text-black/80",
                                    )}
                                >
                                    {t("contact_send_message")}
                                </Component>
                            </Button>
                        </div>
                    </form>

                    {/* Other contact methods */}
                    <div className="transition-default mt-8 pt-6 border-t dark:border-white/80 border-black/80">
                        <Component
                            component="p"
                            className="transition-default text-center dark:text-gray-400 text-gray-500 mb-4"
                        >
                            {t("contact_other_methods")} :
                        </Component>
                        <div className="transition-default flex flex-wrap justify-evenly items-center gap-6">
                            <Link
                                href={`mailto:${devInfos(t).email}`}
                                className="transition-default flex items-center gap-2 text-base tracking-[4px] font-bold dark:lg:hover:text-white lg:hover:text-black lg:hover:underline"
                            >
                                <FaEnvelopeCircleCheck
                                    className="transition-default text-3xl"
                                />
                                <span>
                                    {devInfos(t).email}
                                </span>
                            </Link>
                            <Link
                                href={`tel:${devInfos(t).phoneNumber}`}
                                className="transition-default flex items-center gap-2 text-base tracking-[4px] font-bold dark:lg:hover:text-white lg:hover:text-black lg:hover:underline"
                            >
                                <FaPhoneVolume
                                    className="transition-default text-2xl"
                                />
                                {devInfos(t).phoneNumber}
                            </Link>
                        </div>
                    </div>
                </div>
            </Component>


            <CV />
            <SkillsCarrousel />
        </Container>
    );
}