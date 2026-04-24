import { IconType } from "react-icons";
import { FaCss3Alt } from "react-icons/fa";
import { FaDatabase, FaJs, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaSquareJs } from "react-icons/fa6";

interface Skills {
    technology: {
        name: string;
        icon?: IconType;
    };
    percent: number;
}

interface Experience {
    begin?: string,
    end?: string,
    title: string;
    description: string;
}

interface Way extends Experience {
    year?: string;
}

export const skills: Skills[] = [
    {
        technology: {
            name: "Javascript",
            icon: FaJs
        },
        percent: 85
    },
    {
        technology: {
            name: "PHP",
            icon: FaPhp
        },
        percent: 85
    },
    {
        technology: {
            name: "SQL",
            icon: FaDatabase
        },
        percent: 75
    },
    {
        technology: {
            name: "Typescript",
            icon: FaSquareJs
        },
        percent: 65
    },
    {
        technology: {
            name: "Python",
            icon: FaPython
        },
        percent: 10
    },
    {
        technology: {
            name: "Laravel",
            icon: FaLaravel
        },
        percent: 70
    },
    {
        technology: {
            name: "Next.js",
            icon: FaNodeJs
        },
        percent: 70
    },
    {
        technology: {
            name: "Tailwindcss",
            icon: FaCss3Alt
        },
        percent: 90
    },
    {
        technology: {
            name: "Nestjs",
            icon: FaNodeJs
        },
        percent: 70
    },
    {
        technology: {
            name: "React native",
            icon: FaReact
        },
        percent: 80
    },
];

export const experiences = (t: any): Experience[] => [
    {
        begin: "06 - 2023",
        end: "08 - 2023",
        title: t("internship_al_consulting"),
        description: t("internship_al_consulting_desc")
    },
    {
        begin: "12 - 2024",
        end: "01 - 2025",
        title: t("employee_soif"),
        description: t("employee_soif_desc")
    },
    {
        begin: "01 - 2025",
        end: "03 - 2025",
        title: t("internship_mt_consulting"),
        description: t("internship_mt_consulting_desc")
    },
    {
        begin: "07 - 2025",
        end: "04 - 2026",
        title: t("internship_nala_security_consulting"),
        description: t("internship_nala_security_consulting_desc")
    },
];

export const parcours = (t: any): Way[] => ([
    {
        year: "2022",
        title: t("baccalaureat_d"),
        description: t("baccalaureat_d_desc")
    },
    {
        begin: "2022",
        end: "2024",
        title: t("bts"),
        description: t("bts_desc")
    },
    {
        begin: "2024",
        end: "2025",
        title: t("bachelor_degree"),
        description: t("bachelor_degree_desc")
    },
]);

export interface ProjectType {
    titre: string;
    description: string;
    link?: string;
    gitlab?: string;
    interfaces?: {
        link: string;
        titre: string;
    }[];
}

export const PHP = (t: any): ProjectType[] => ([
    {
        titre: "GES_LOCATION",
        description: t("ges_location_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/ges_location",
        interfaces: [
            {
                link: "/img/PHP/GES_LOCATION/Inscription.webp",
                titre: t("inscription_page"),
            },
            {
                link: "/img/PHP/GES_LOCATION/Connexion.webp",
                titre: t("login_page"),
            },
            {
                link: "/img/PHP/GES_LOCATION/Accueil.webp",
                titre: t("home_page"),
            },
            {
                link: "/img/PHP/GES_LOCATION/Side.webp",
                titre: t("sidebar_page"),
            },
            {
                link: "/img/PHP/GES_LOCATION/Notifs.webp",
                titre: t("notification_space"),
            },
            {
                link: "/img/PHP/GES_LOCATION/EspaceProprios.webp",
                titre: t("owner_space"),
            },
            {
                link: "/img/PHP/GES_LOCATION/Commentaires.webp",
                titre: t("comments_space"),
            },
        ]
    },
    {
        titre: "E-commerce",
        description: t("e-commerce_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/e-commerce",
        interfaces: [
            {
                link: "/img/PHP/E-commerce/Inscription.webp",
                titre: t("inscription_page"),
            },
            {
                link: "/img/PHP/E-commerce/Connexion.webp",
                titre: t("login_page"),
            },
            {
                link: "/img/PHP/E-commerce/Accueil.webp",
                titre: t("home_page"),
            },
            {
                link: "/img/PHP/E-commerce/One.webp",
                titre: t("one_item"),
            },
            {
                link: "/img/PHP/E-commerce/Mobile.webp",
                titre: t("mobile_version"),
            },
        ]
    },
    {
        titre: "Wallpapers",
        description: t("wallpapers_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/wallpapers",
        interfaces: [
            {
                link: "/img/PHP/Galerie/Accueil.webp",
                titre: t("home_page"),
            },
            {
                link: "/img/PHP/Galerie/Profile.webp",
                titre: t("profile_page"),
            },
            {
                link: "/img/PHP/Galerie/Clair.webp",
                titre: t("light_theme"),
            },
            {
                link: "/img/PHP/Galerie/Mobile.webp",
                titre: t("mobile_version"),
            },
        ]
    },
    {
        titre: "AgPOO",
        description: t("agpoo_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/agpoo",
        interfaces: [
            {
                link: "/img/PHP/AgPOO/Inscription.webp",
                titre: t("inscription_page"),
            },
            {
                link: "/img/PHP/AgPOO/Connexion.webp",
                titre: t("login_page"),
            },
            {
                link: "/img/PHP/AgPOO/Location.webp",
                titre: t("map_page"),
            }
        ]
    },

]);

export const Laravel = (t: any) => ([
    {
        titre: "InvTrack",
        description: t("invtrack_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/invtrack",
        interfaces: [
            {
                link: "img/Laravel/InvTrack/Auth.webp",
                titre: t("login_page"),
            },
            {
                link: "img/Laravel/InvTrack/Accueil.webp",
                titre: t("home_page"),
            },
            {
                link: "img/Laravel/InvTrack/Historique.webp",
                titre: t("history"),
            },
            {
                link: "img/Laravel/InvTrack/Offload.webp",
                titre: t("offload_interface"),
            },
            {
                link: "img/Laravel/InvTrack/Materiels_list.webp",
                titre: t("materials_list"),
            },
            {
                link: "img/Laravel/InvTrack/Dark_mode.webp",
                titre: t("dark_mode"),
            },
        ]
    },
    {
        titre: "GES_SALLES",
        description: t("ges_salles_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/ges_salles",
        interfaces: [
            {
                link: "/img/Laravel/GES_SALLES/Inscription.webp",
                titre: t("inscription_page"),
            },
            {
                link: "/img/Laravel/GES_SALLES/Connexion.webp",
                titre: t("login_page"),
            },
            {
                link: "/img/Laravel/GES_SALLES/Accueil.webp",
                titre: t("home_page"),
            },
            {
                link: "/img/Laravel/GES_SALLES/AccueilMobile.webp",
                titre: t("mobile_version"),
            },
            {
                link: "/img/Laravel/GES_SALLES/One.webp",
                titre: t("one_room"),
            },
        ]
    },
    {
        titre: "Blog",
        description: t("blog_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/blog",
        interfaces: [
            {
                link: "/img/Laravel/Blog/Inscription.webp",
                titre: t("inscription_page"),
            },
            {
                link: "/img/Laravel/Blog/Connexion.webp",
                titre: t("login_page"),
            },
            {
                link: "/img/Laravel/Blog/Accueil.webp",
                titre: t("home_page"),
            },
            {
                link: "/img/Laravel/Blog/UnArticle.webp",
                titre: t("one_article"),
            },
            {
                link: "/img/Laravel/Blog/Commentaires.webp",
                titre: t("comments_space"),
            },
        ]
    },
]);

export const Next = (t: any): ProjectType[] => [
    {
        titre: "Nala's website",
        description: t("nalas_website_description"),
        link: "https://nalasecurity.com",
    },

    {
        titre: "Portfolio",
        description: t("portfolio_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/portfolio",
    },
    {
        titre: "Projects_List",
        description: t("projects_list_description"),
        gitlab: "https://gitlab.com/yc_public_projects3173534/projects_list",
        interfaces: [
            {
                link: "/img/Next/CodersMonkeys/Inscription.webp",
                titre: t("inscription_page"),
            },
            {
                link: "/img/Next/CodersMonkeys/Connexion.webp",
                titre: t("login_page"),
            },
            {
                link: "/img/Next/CodersMonkeys/Footer.webp",
                titre: t("footer"),
            },
        ],
    },
];

export const RN = (t: any): ProjectType[] => ([
    {
        titre: "Student QR",
        description: t("student_qr_description"),
    },
    {
        titre: "YoumsVersity",
        description: t("youmsversity_description"),
    },
]);

export const devInfos = (t: any | null = null) => {
    if (t) return ({
        name: "Youmbi Le-duc",
        pseudo: "Youms.dev",
        email: "youmsdeveloper@gmail.com",
        devEmail: "youms.dev@gmail.com",
        phoneNumber: "+237690552385",
        studyLevel: "Licence",
        country: "Cameroun",
        town: "Douala",
        status: "Full stack",
        typedjs: [
            t('dev_frontend'),
            t('dev_backend'),
            t('dev_web'),
            `${t('dev_mobile')} ^700`,
            t('dev_fullstack')
        ]
    })
    else return {
        name: "Youmbi Le-duc",
        pseudo: "Youms.dev",
        email: "youmsdeveloper@gmail.com",
        devEmail: "youms.dev@gmail.com",
        phoneNumber: "+237690552385",
        studyLevel: "Licence",
        country: "Cameroun",
        town: "Douala",
        status: "Full stack",
        typedjs: [
            "Développeur front-end",
            "Développeur back-end",
            "Développeur web",
            "Développeur mobile ^700",
            "Développeur web et mobile full stack"
        ]
    }
}

export const other = {
    MYSQL: 85,
    POSTGRESQL: 75,
    NOSQL: 65,
    PRISMA: 80,
    TYPEORM: 80,
    SQLITE: 70,
}