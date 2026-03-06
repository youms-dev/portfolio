"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEnvelopeOpenText, FaFileAlt, FaPaperPlane, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaEnvelopeCircleCheck, FaPhoneVolume } from "react-icons/fa6";
import { toast } from "react-toastify";
import { api } from "../axios";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { CV } from "../components/cv";
import { SkillsCarrousel } from "../components/skills-carrousel";
import { Title } from "../components/title";
import { devInfos } from "../constants/data";
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
                toast.info("Veuillez remplir tous les champs");
                setIsSubmitting(false);
                return;
            }
        }

        try {
            const { data: { res } } = await api.post("/api/sendMail", formData);

            toast.success(`Un mail vous a été envoyé à l'adresse ${res}`);
            toast.success("Consultez votre boîte mail ou vos spams");
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
            <div className={clsx(
                "section-animate",
                "transition-default w-full flex items-center mt-5 sm:px-8 px-3",
            )}>
                <Title id="contact" className="transition-default text-2xl mb-10">
                    Contactez - moi
                </Title>
            </div>

            <div className={clsx(
                "section-animate",
                "transition-default w-full grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 sm:px-10 px-5 my-10"
            )}>
                <div className="transition-default relative flex flex-col items-center gap-4 border dark:border-white/20 border-black/20 p-5 rounded-2xl dark:bg-gray-900/40 bg-cyan-500/10 shadow-lg dark:shadow-white/20 shadow-black/20 lg:hover:-translate-y-2 overflow-hidden before:transition-default before:absolute before:-left-full before:top-0 before:w-10 before:h-full dark:before:bg-white/30 before:bg-cyan-500/30 before:-skew-x-30 lg:hover:before:left-[150%]">
                    <FaPhoneVolume
                        className="transition-default text-6xl dark:text-blue-200 text-cyan-500"
                    />
                    <span className="transition-default text-lg font-bold tracking-widest">Téléphone</span>
                    <Link
                        href={`tel:${devInfos.phoneNumber}`}
                        className="transition-default text-lg dark:text-blue-200 text-cyan-500 font-bold tracking-widest"
                    >
                        {devInfos.phoneNumber}
                    </Link>
                </div>

                <div className="transition-default relative flex flex-col items-center gap-4 border dark:border-white/20 border-black/20 p-5 rounded-2xl dark:bg-gray-900/40 bg-cyan-500/10 shadow-lg dark:shadow-white/20 shadow-black/20 lg:hover:-translate-y-2 overflow-hidden before:transition-default before:absolute before:-left-full before:top-0 before:w-10 before:h-full dark:before:bg-white/30 before:bg-cyan-500/30 before:-skew-x-30 lg:hover:before:left-[150%]">
                    <FaEnvelopeOpenText
                        className="transition-default text-6xl dark:text-blue-200 text-cyan-500"
                    />
                    <span className="transition-default text-lg font-bold tracking-widest">Email</span>
                    <Link
                        href={`mailto:${devInfos.email}`}
                        target="_blank"
                        className="transition-default text-lg dark:text-blue-200 text-cyan-500 font-bold tracking-widest"
                    >
                        {devInfos.email}
                    </Link>
                </div>

                <div className="transition-default relative flex flex-col items-center gap-4 border dark:border-white/20 border-black/20 p-5 rounded-2xl dark:bg-gray-900/40 bg-cyan-500/10 shadow-lg dark:shadow-white/20 shadow-black/20 lg:hover:-translate-y-2 overflow-hidden before:transition-default before:absolute before:-left-full before:top-0 before:w-10 before:h-full dark:before:bg-white/30 before:bg-cyan-500/30 before:-skew-x-30 lg:hover:before:left-[150%]">
                    <FaWhatsapp
                        className="transition-default text-6xl dark:text-blue-200 text-cyan-500"
                    />
                    <span className="transition-default text-lg font-bold tracking-widest">Whatsapp</span>
                    <Link
                        href={`http://wa.me/${devInfos.phoneNumber}?text=${hour >= 16 ? "Bonsoir" : "Bonjour"} monsieur Le-duc. Je viens de visiter votre portfolio et j'aimerais discuter avec vous !`}
                        target="_blank"
                        className="transition-default text-lg dark:text-blue-200 text-cyan-500 font-bold tracking-widest"
                    >
                        {devInfos.phoneNumber}
                    </Link>
                </div>
            </div>

            <SkillsCarrousel />

            <div
                className={clsx(
                    "section-animate",
                    "transition-default w-full flex flex-col items-center mt-5 sm:px-10 px-5"
                )}
            >
                <div
                    className={clsx(
                        "transition-default relative w-full dark:bg-gray-900/40 bg-cyan-500/15 rounded-3xl p-8 border dark:border-white/20 border-black/20 before:transition-default before:absolute before:top-0 before:left-0 before:-translate-x-4 before:-translate-y-4 before:w-8 before:h-8 before:border-l-4 before:border-t-4 dark:before:border-blue-200 before:border-cyan-500 after:transition-default after:absolute after:bottom-0 after:right-0 after:translate-x-4 after:translate-y-4 after:w-8 after:h-8 after:border-r-4 after:border-b-4 dark:after:border-blue-200 after:border-cyan-500"
                    )}
                >
                    <form onSubmit={handleSubmit} autoComplete="off" className={clsx(
                        "transition-default w-full flex flex-col gap-6",
                        isSubmitting && "pointer-events-none"
                    )}>
                        {/* Nom */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaUser className="transition-default dark:text-blue-200 text-cyan-500 text-lg" />
                                <label htmlFor="name" className="transition-default dark:text-blue-200 text-cyan-500 font-bold">
                                    Nom complet
                                </label>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="transition-default w-full h-12 px-4 bg-transparent border-b-2 dark:border-gray-600 border-cyan-500 dark:text-white text-black dark:focus:border-blue-200 focus:border-cyan-500 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50"
                                placeholder="Votre nom complet"
                            />
                        </div>

                        {/* Email */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaEnvelope className="transition-default dark:text-blue-200 text-cyan-500 text-lg" />
                                <label htmlFor="email" className="transition-default dark:text-blue-200 text-cyan-500 font-bold">
                                    Adresse email
                                </label>
                            </div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="transition-default w-full h-12 px-4 bg-transparent border-b-2 dark:border-gray-600 border-cyan-500 dark:text-white text-black dark:focus:border-blue-200 focus:border-cyan-500 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50"
                                placeholder="votre.email@exemple.com"
                            />
                        </div>

                        {/* Sujet */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaFileAlt className="transition-default dark:text-blue-200 text-cyan-500 text-lg" />
                                <label htmlFor="subject" className="transition-default dark:text-blue-200 text-cyan-500 font-bold">
                                    Sujet
                                </label>
                            </div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="transition-default w-full h-12 px-4 bg-transparent border-b-2 dark:border-gray-600 border-cyan-500 dark:text-white text-black dark:focus:border-blue-200 focus:border-cyan-500 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50"
                                placeholder="Sujet de votre message"
                            />
                        </div>

                        {/* Message */}
                        <div className="transition-default relative">
                            <div className="transition-default flex items-center gap-3 mb-2">
                                <FaPaperPlane className="transition-default dark:text-blue-200 text-cyan-500 text-lg" />
                                <label htmlFor="message" className="transition-default dark:text-blue-200 text-cyan-500 font-bold">
                                    Message
                                </label>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={6}
                                className="transition-default w-full h-40 px-4 bg-transparent border-b-2 dark:border-gray-600 border-cyan-500 dark:text-white text-black dark:focus:border-blue-200 focus:border-cyan-500 focus:outline-none rounded-lg dark:placeholder:text-white/50 placeholder:text-black/50 resize-none"
                                placeholder="Votre message..."
                            />
                        </div>

                        {/* Bouton d'envoi */}
                        <div className="transition-default flex justify-center mt-6">
                            <Button
                                type="submit"
                                loading={isSubmitting}
                                size="w-60 h-14"
                            >
                                <FaPaperPlane />
                                <span>Envoyer le message</span>
                            </Button>
                        </div>
                    </form>

                    {/* Informations de contact alternatives */}
                    <div className="transition-default mt-8 pt-6 border-t dark:border-gray-600 border-cyan-500">
                        <p className="transition-default text-center dark:text-gray-400 text-gray-500 mb-4">
                            Ou contactez-moi directement :
                        </p>
                        <div className="transition-default flex flex-wrap justify-evenly items-center gap-6">
                            <Link
                                href={`mailto:${devInfos.email}`}
                                className="transition-default flex items-center gap-2 dark:text-blue-200 text-cyan-500 text-base tracking-[4px] font-bold dark:lg:hover:text-blue-100 lg:hover:text-cyan-500/60 lg:hover:underline"
                            >
                                <FaEnvelopeCircleCheck
                                    className="transition-default text-3xl"
                                />
                                <span>
                                    {devInfos.email}
                                </span>
                            </Link>
                            <Link
                                href={`tel:${devInfos.phoneNumber}`}
                                className="transition-default flex items-center gap-2 dark:text-blue-200 text-cyan-500 text-base tracking-[4px] font-bold dark:lg:hover:text-blue-100 lg:hover:text-cyan-500/60 lg:hover:underline"
                            >
                                <FaPhoneVolume
                                    className="transition-default text-2xl"
                                />
                                {devInfos.phoneNumber}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <CV />
            <SkillsCarrousel />
        </Container>
    );
}