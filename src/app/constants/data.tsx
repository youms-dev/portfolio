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

export const PHP: ProjectType[] = [
    {
        titre: "GES_LOCATION",
        description: "Application permettant au commun des mortels de pouvoir non seulement trouver un __futur__ __logement__ parmi plusieurs disponibles sur la plateforme mais aussi d'en __publier__ sur la plateforme si jamais le désir de mettre en location un logement se fait ressentir.\nTechnologies :\n- __HTML5__ : pour le squelette premier de chaque page,\n- __CSS3__ : pour le style minimaliste de chaque page,\n- __Javascript__ : pour la gestion fluide des animations et interactions système,\n- __PHP__ : pour la gestion de l'application côté serveur.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/ges_location",
        interfaces: [
            {
                link: "/img/PHP/GES_LOCATION/Inscription.webp",
                titre: "Interface d'inscription"
            },
            {
                link: "/img/PHP/GES_LOCATION/Connexion.webp",
                titre: "Interface de connexion"
            },
            {
                link: "/img/PHP/GES_LOCATION/Accueil.webp",
                titre: "Accueil"
            },
            {
                link: "/img/PHP/GES_LOCATION/Side.webp",
                titre: "Vue du panneau latéral"
            },
            {
                link: "/img/PHP/GES_LOCATION/Notifs.webp",
                titre: "Espace de notifications"
            },
            {
                link: "/img/PHP/GES_LOCATION/EspaceProprios.webp",
                titre: "Espace propriétaire"
            },
            {
                link: "/img/PHP/GES_LOCATION/Commentaires.webp",
                titre: "Espace commentaires"
            },
        ]
    },
    {
        titre: "E-commerce",
        description: "Petite application faisant office de maquette de site __E-commerce__.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/e-commerce",
        interfaces: [
            {
                link: "/img/PHP/E-commerce/Inscription.webp",
                titre: "Interface d'inscription"
            },
            {
                link: "/img/PHP/E-commerce/Connexion.webp",
                titre: "Interface de connexion"
            },
            {
                link: "/img/PHP/E-commerce/Accueil.webp",
                titre: "Accueil"
            },
            {
                link: "/img/PHP/E-commerce/One.webp",
                titre: "Un article"
            },
            {
                link: "/img/PHP/E-commerce/Mobile.webp",
                titre: "Version mobile"
            },
        ]
    },
    {
        titre: "Wallpapers",
        description: "Petite application web de téléchargements d'images de fond d'écrans.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/wallpapers",
        interfaces: [
            {
                link: "/img/PHP/Galerie/Accueil.webp",
                titre: "Accueil"
            },
            {
                link: "/img/PHP/Galerie/Profile.webp",
                titre: "Interface de changement de photo"
            },
            {
                link: "/img/PHP/Galerie/Clair.webp",
                titre: "Thème clair."
            },
            {
                link: "/img/PHP/Galerie/Mobile.webp",
                titre: "Interface mobile."
            }
        ]
    },
    {
        titre: "AgPOO",
        description: "Application web de __gestion__ __des__ __réservations__ __des__ __tickets__ __de__ __voyage__ __dans__ __les__ __agences__ __de__ __la__ __ville__ __de__ __Douala__ (__Cameroun__); cette application web étant d'ailleurs mon projet de soutenance en __BTS__, permet aux habitants de la ville de __douala__ de pouvoir effectuer leurs reservations en avance sur leurs voyages depuis chez eux et ce peu importe l'agence.\nTechnologies utilisées :\n- __HTML5__ : pour le squelette premier de chaque page,\n- __CSS3__ : pour le style minimaliste de chaque page,\n- __Javascript__ : pour la gestion fluide des animations et interactions système,\n- __PHP__ : pour la gestion de l'application côté serveur.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/agpoo",
        interfaces: [
            {
                link: "/img/PHP/AgPOO/Inscription.webp",
                titre: "Interface d'inscription"
            },
            {
                link: "/img/PHP/AgPOO/Connexion.webp",
                titre: "Interface de connexion"
            },
            {
                link: "/img/PHP/AgPOO/Location.webp",
                titre: "Localiser une agence via google map."
            }
        ]
    },

];

export const Laravel: ProjectType[] = [
    {
        titre: "InvTrack",
        description: "__InvTrack__ est une application web de __gestion__ __du__ __matériel__ __didactique__, permettant ainsi de quitter de la vielle méthode de gestion du matériel (Manuelle via livre ou cahier) à l'ère nouvelle du numérique assurant ainsi une rapide traçabilité des matériels.\nJe l'ai réalisé en utilisant les technologies suivantes :\n- __Laravel__ : pour les vues ou interfaces de l'application et également pour la gestion du back-end,\n- __Tailwindcss__ : pour le style des différentes pages de l'application.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/invtrack",
        interfaces: [
            {
                link: "img/Laravel/InvTrack/Auth.webp",
                titre: "Interface d'authentification"
            },
            {
                link: "img/Laravel/InvTrack/Accueil.webp",
                titre: "Accueil"
            },
            {
                link: "img/Laravel/InvTrack/Historique.webp",
                titre: "Historique"
            },
            {
                link: "img/Laravel/InvTrack/Offload.webp",
                titre: "Interface de décharge d'un matériel"
            },
            {
                link: "img/Laravel/InvTrack/Materiels_list.webp",
                titre: "Liste des matériels"
            },
            {
                link: "img/Laravel/InvTrack/Dark_mode.webp",
                titre: "Aperçu du mode sombre"
            },
        ]
    },
    {
        titre: "GES_SALLES",
        description: "Ceci est tout simplement une petite application permettant de gérer la __reservation__ __des__ __salles__ __en__ __ligne__ pour pouvoir permettre aux différentes personne de pouvoir le faire depuis chez eux et ce peu importe l'emplacement de la salle ou le propriétaire de celle-ci.\nTechnologies utilisées : \n- __Laravel__ : pour le front-end et le back-end,\n- __Tailwindcss__ : pour le style global de chaque page du système.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/ges_salles",
        interfaces: [
            {
                link: "/img/Laravel/GES_SALLES/Inscription.webp",
                titre: "Interface d'inscription"
            },
            {
                link: "/img/Laravel/GES_SALLES/Connexion.webp",
                titre: "Interface de connexion"
            },
            {
                link: "/img/Laravel/GES_SALLES/Accueil.webp",
                titre: "Accueil"
            },
            {
                link: "/img/Laravel/GES_SALLES/AccueilMobile.webp",
                titre: "Vue sur mobile"
            },
            {
                link: "/img/Laravel/GES_SALLES/One.webp",
                titre: "Affichage d'une salle"
            },
        ]
    },
    {
        titre: "Blog",
        description: "Application web gérant un blog.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/blog",
        interfaces: [
            {
                link: "/img/Laravel/Blog/Inscription.webp",
                titre: "Interface d'inscription"
            },
            {
                link: "/img/Laravel/Blog/Connexion.webp",
                titre: "Interface de connexion"
            },
            {
                link: "/img/Laravel/Blog/Accueil.webp",
                titre: "Accueil"
            },
            {
                link: "/img/Laravel/Blog/UnArticle.webp",
                titre: "Un article"
            },
            {
                link: "/img/Laravel/Blog/Commentaires.webp",
                titre: "Espace commentaires"
            },
        ]
    },
];

export const Next: ProjectType[] = [
    {
        titre: "Nala's website",
        description: "__Nala's__ __website__ est l'application web de l'entreprise __NALA__ __SECURITY__ __CONSULTING__;\nJe l'ai réalisé avec les technologies suivantes :\n- __Next.js__ : pour le __front-end__ ( vues / interfaces ) et le __back-end__ ( gestion des ressources de l'application ), \n- __Tailwindcss__ : pour le style / design global de l'application, \n- __Prisma__ : pour la gestion fluide, efficace et plus simple des requêtes vers __la__ __base__ __de__ __données__, \n- __Supabase__ : pour le déploiement de la __base__ __de__ __données__ ( qui d'ailleurs utilise __POSTGRESQL__ comme __SGBD__ ) et le stockage des fichiers.",
        link: "https://nalasecurity.com",
    },

    {
        titre: "Portfolio",
        description: "C'est tout simplement ce __portfolio__ que vous visitez actuellement :\nPour le réaliser, j'ai utiliser comme technologies :\n- __Next.js__ : pour le __front-end__ ( vues / interfaces ) et le __back-end__ ( gestion des ressources de l'application ), \n- __Tailwindcss__ : pour le style / design global de l'application.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/portfolio",
    },
    {
        titre: "Projects_List",
        description: "Petite application web que j'ai mis sur pied dans mes debuts avec << __Next.js__ >>, c'est  une plate-forme de publication de projets où, différents utilisateurs voulant partager leurs idées et où réalisations peuvent le faire de manière simple et avoir des feedback.",
        gitlab: "https://gitlab.com/yc_public_projects3173534/projects_list",
        interfaces: [
            {
                link: "/img/Next/CodersMonkeys/Inscription.webp",
                titre: "Interface d'inscription",
            },
            {
                link: "/img/Next/CodersMonkeys/Connexion.webp",
                titre: "Interface de connexion",
            },
            {
                link: "/img/Next/CodersMonkeys/Footer.webp",
                titre: "Footer",
            },
        ],
    },
];

export const RN: ProjectType[] = [
    {
        titre: "Student_QR",
        description: "__Student__ __QR__ est une application mobile de __scan__ __de__ __code__ __QR__ permettant aux vigiles des établissements de rapidement savoir si un étudiant est à jour dans les tranches de la scolarité à payer ceci en scannant le code QR lié à l'étudiant sur son reçu.\nLe procédé de vérification est le suivant est le suivant:\n- À l'arrivée de l'étudiant devant l'établissement, ce dernier présente son reçu de paiement à l'un des vigiles présents.\n- Le vigile récupère le reçu et scan tout simplement le code QR qui s'y trouve.\n- Ensuite, l'application déchiffre le code QR de l'étudiant et récupère ses informations ceci en retournant les tranches que l'étudiant est censé payer, si il a payé, la case correspondant à la tranche est cochée et sinon elle est vide.\n\nL'application a été mise sur pied grâce à:\n- __React__ __Native__ : pour le __front-end__ ( vues / interfaces ), \n- __Nestjs__ : pour le __back-end__ ( gestion des ressources de l'application ),\n- __Nativewind__ : pour le style / design global de l'application, \n- __TypeORM__ : pour la gestion fluide, efficace et plus simple des requêtes vers __la__ __base__ __de__ __données__ ( __POSTGRESQL__ ) , \n- __Supabase__ : pour le déploiement de la __base__ __de__ __données__.",
    },
    {
        titre: "YoumsVersity",
        description: "__YoumsVersity__ est un réseau social ( __application__ __mobile__ ) uniquement conçu pour __enseignants__ __et__ __étudiants__, où différents enseignants désirants offrir leurs savoir massif peuvent le faire via des __publications__ de type __vidéo__ ou __image__, pour permettre aux étudiants de ne plus être limité en terme de connaissance par rapport à leurs niveaux scolaires.\nCelle-ci a été mise sur pied grâce à:\n- __React__ __Native__ : pour le __front-end__ ( vues / interfaces ), \n- __Nestjs__ : pour le __back-end__ ( gestion des ressources de l'application ),\n- __Nativewind__ : pour le style / design global de l'application, \n- __TypeORM__ : pour la gestion fluide, efficace et plus simple des requêtes vers __la__ __base__ __de__ __données__ ( __POSTGRESQL__ ) , \n- __Supabase__ : pour le déploiement de la __base__ __de__ __données__, le stockage des fichiers et __l'authentification__ des utilisateurs.",
    },
]

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