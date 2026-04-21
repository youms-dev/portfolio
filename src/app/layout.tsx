import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { DevInfos } from "./components/dev-info";
import ProgressBar from "./components/progress-bar";
import { ToastProvider } from "./components/toast-provider";
import "./globals.css";
import { ThemeProvider } from "./hooks/use-theme";
import { LanguageProvider } from "./components/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youms's portfolio",
  description: "Portfolio du développeur full stack Youmbi Le-duc développeur full stack",
  keywords: "Portfolio, portfolio, Portfolio web, Portfolio développeur, Portfolio professionnel, Portfolio digital, Portfolio créatif, Portfolio personnel, Portfolio en ligne, Portfolio full stack, Portfolio développeur web, Portfolio développeur full stack, Portfolio de Youmbi Le-duc, YOUMBI LE-DUC, Youmbi le-duc, Youmbi Le-duc, Youms's portfolio, Youms.dev, youms.dev, YoumsChoco, youmschoco, personal website, developer portfolio, web developer portfolio, software engineer portfolio, creative portfolio, digital portfolio, online portfolio, professional portfolio, frontend portfolio, backend portfolio, UX portfolio, UI portfolio, coding portfolio, resume website, portfolio site, portfolio showcase, portfolio template, portfolio design, portfolio projects, portfolio examples, portfolio inspiration, portfolio presentation, portfolio gallery, portfolio works, portfolio skills, portfolio experience, portfolio achievements, portfolio CV, portfolio bio, portfolio about, portfolio contact, meilleur développeur, meilleur portfolio, top portfolio, top développeur, portfolio 2024, portfolio moderne, portfolio innovant, portfolio Next.js, portfolio React, portfolio TypeScript, portfolio SEO, portfolio Google, portfolio Bing, portfolio LinkedIn, portfolio GitHub, portfolio expert, portfolio professionnel web, portfolio développeur Paris, portfolio développeur France, portfolio développeur freelance, portfolio développeur fullstack, portfolio développeur frontend, portfolio développeur backend, portfolio site web, portfolio site personnel, portfolio site professionnel, portfolio site créatif, portfolio site moderne, portfolio site innovant, portfolio site Next.js, portfolio site React, portfolio site TypeScript, portfolio site SEO, portfolio site Google, portfolio site Bing, portfolio site LinkedIn, portfolio site GitHub, portfolio site expert, portfolio site professionnel web, portfolio site développeur Paris, portfolio site développeur France, portfolio site développeur freelance, portfolio site développeur fullstack, portfolio site développeur frontend, portfolio site développeur backend, développeur JavaScript, développeur TypeScript, développeur React, développeur Next.js, développeur web Paris, développeur web France, développeur web freelance, développeur web fullstack, développeur web frontend, développeur web backend, site web moderne, site web créatif, site web innovant, site web professionnel, site web personnel, site web portfolio, site web développeur, site web Next.js, site web React, site web TypeScript, site web SEO, site web Google, site web Bing, site web LinkedIn, site web GitHub, site web expert, site web professionnel web, site web développeur Paris, site web développeur France, site web développeur freelance, site web développeur fullstack, site web développeur frontend, site web développeur backend, développeur informatique, ingénieur logiciel, ingénieur web, ingénieur full stack, ingénieur frontend, ingénieur backend, développeur UI, développeur UX, développeur design, développeur expérience utilisateur, développeur application web, développeur site internet, développeur digital, développeur créatif, développeur moderne, développeur innovant, développeur expert, développeur professionnel, développeur personnel, développeur showcase, développeur template, développeur inspiration, développeur présentation, développeur galerie, développeur works, développeur skills, développeur experience, développeur achievements, développeur CV, développeur bio, développeur about, développeur contact",
  openGraph: {
    type: "website",
    title: "Youms's portfolio",
    description: "Portfolio de Youmbi Le-duc",
    url: String(process.env.NEXT_PUBLIC_PROJECT_URL!),
    images: [
      {
        url: String(process.env.NEXT_PUBLIC_LOGO_URL!)
      }
    ]
  },
  icons: String(process.env.NEXT_PUBLIC_ICON_URL!)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="mo8NxphzXsbtW-kauNMm9c7fouT008Mj0t8RaRJKjKA" />
      </head>
      <body
        className={`transition-default ${inter.variable} antialiased dark:**:selection:bg-white/80 **:selection:bg-black/80 dark:**:selection:text-black/80 **:selection:text-white/80 **:selection:[font-weight:900_!important] dark:bg-black/90 bg-black/10 dark:*:text-white/80 *:text-black/80 overflow-x-hidden`}
      >
        <ProgressBar />
        <DevInfos />
        <ThemeProvider>
          <ToastProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
