import { IconRegistry, NavLink, SiteLink } from "@/types";
import { BsBoxArrowDownLeft, BsFillSendFill } from "react-icons/bs";
import { FaArrowLeft, FaSearch, FaTools } from "react-icons/fa";
import {
    FaArrowRight,
    FaBluesky,
    FaCalendar,
    FaCircleInfo,
    FaClock,
    FaCode,
    FaCodepen,
    FaDatabase,
    FaDiagramProject,
    FaEnvelopeOpenText,
    FaFacebook,
    FaFire,
    FaFolderOpen,
    FaGaugeHigh,
    FaGithub,
    FaGraduationCap,
    FaHandshake,
    FaIdCard,
    FaJs,
    FaLocationDot,
    FaNodeJs,
    FaReact,
    FaRss,
    FaSchool,
    FaUniversalAccess,
    FaUser,
    FaVial,
    FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RiShieldCheckFill } from "react-icons/ri";
import {
    SiBuymeacoffee,
    SiCanvas,
    SiGraphql,
    SiLinkedin,
    SiMoodle,
    SiPostgresql,
    SiTailwindcss,
    SiTeratail,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { SocialLink } from "@/types";

// const { ContactIcon, GitHubIcon, InfoIcon, LinkedInIcon, RssIcon } = icons;
// const { GitHubLink, LinkedInLink, RssLink } = externalLinks;
// const { AboutRoute, ContactRoute } = internalRoutes;

/**
 * Centralised collection of static asset paths used across the site.
 *
 * Provides a single source of truth for referencing images and
 * other static files to improve consistency and maintainability.
 */
export const assets = {
    /**
     * Optimised profile image used in the author card and site metadata.
     */
    profileImage: "/img/karl.optimised.webp",

    /**
     * Default image displayed on the 404 “Not Found” page.
     */
    notFoundImage: "/img/not-found.webp",
};

/**
 * Centralised collection of icon components sourced from various
 * `react-icons` libraries for consistent usage across the site.
 *
 * Each entry maps a named constant to an imported icon component,
 * with inline documentation specifying its origin and purpose.
 *
 * Used throughout the UI for a consistent visual language and
 * easy reference when importing icons.
 */
export const icons: IconRegistry = {
    /**
     * `FaUniversalAccess` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    AccessibilityIcon: FaUniversalAccess,

    /**
     * `TbApi` icon from [Tabler Icons](https://react-icons.github.io/react-icons/icons/tb/)
     */
    ApiIcon: TbApi,

    /**
     * `SiTeratail` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    BlackboardIcon: SiTeratail,

    /**
     * `FaBluesky` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    BlueskyIcon: FaBluesky,

    /**
     * `FaFire` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    BrightspaceIcon: FaFire,

    /**
     * `FaCalendar` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    CalendarIcon: FaCalendar,

    /**
     * `SiCanvas` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    CanvasIcon: SiCanvas,

    /**
     * `RiShieldCheckFill` icon from [Remix Icon](https://react-icons.github.io/react-icons/icons/ri/)
     */
    CheckIcon: RiShieldCheckFill,

    /**
     * `FaClock` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ClockIcon: FaClock,

    /**
     * `FaCode` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    CodeIcon: FaCode,

    /**
     * `FaCodepen` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    CodePenIcon: FaCodepen,

    /**
     * `SiBuymeacoffee` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    CoffeeIcon: SiBuymeacoffee,

    /**
     * `FaEnvelope` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ContactIcon: FaEnvelopeOpenText,

    /**
     * `FaDatabase` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    DatabaseIcon: FaDatabase,

    /**
     * `HiOutlineExternalLink` icon from [Heroicons](https://react-icons.github.io/react-icons/icons/hi/)
     */
    ExternalLinkIcon: HiOutlineExternalLink,

    /**
     * `FaGithub` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    GitHubIcon: FaGithub,

    /**
     * `FaFacebook` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    FacebookIcon: FaFacebook,

    /**
     * `FaFolderOpen` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    FolderIcon: FaFolderOpen,

    /**
     * `SiGraphql` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    GraphQlIcon: SiGraphql,

    /**
     * `FaSchool` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    HigherEducationIcon: FaSchool,

    /**
     * `FaHandshake` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    HireMeIcon: FaHandshake,

    /**
     * `FaCircleInfo` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    InfoIcon: FaCircleInfo,

    /**
     * `FaIdCard` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    IdIcon: FaIdCard,

    /**
     * `FaJs` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    JavaScriptIcon: FaJs,

    /**
     * `FaGraduationCap` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    LearningIcon: FaGraduationCap,

    /**
     * `FaLinkedin` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    LinkedInIcon: SiLinkedin,

    /**
     * `FaLocationDot` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    LocationIcon: FaLocationDot,

    /**
     * `SiMoodle` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    MoodleIcon: SiMoodle,

    /**
     * `FaArrowRight` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    NextIcon: FaArrowRight,

    /**
     * `FaNodeJs` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    NodeJsIcon: FaNodeJs,

    /**
     * `FaGaugeHigh` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    PerformanceIcon: FaGaugeHigh,

    /**
     * `SiPostgresql` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    PostgreSqlIcon: SiPostgresql,

    /**
     * `FaArrowLeft` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    PreviousIcon: FaArrowLeft,

    /**
     * `FaDiagramProject` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ProjectIcon: FaDiagramProject,

    /**
     * `FaReact` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ReactIcon: FaReact,

    /**
     * `FaArrowRight` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ReadMoreIcon: FaArrowRight,

    /**
     * `FaRss` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    RssIcon: FaRss,

    /**
     * `FaSearch` icon from [Font Awesome 5](https://react-icons.github.io/react-icons/icons/fa/)
     */
    SearchIcon: FaSearch,

    /**
     * `BsFillSendFill` icon from [Bootstrap Icons](https://react-icons.github.io/react-icons/icons/bs/)
     */
    SendIcon: BsFillSendFill,

    /**
     * `FaDatabase` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    SitsVisionIcon: FaDatabase,

    /**
     * `SiTailwindcss` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    TailwindIcon: SiTailwindcss,

    /**
     * `FaVial` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    TestingIcon: FaVial,

    /**
     * `FaTools` icon from [Font Awesome 5](https://react-icons.github.io/react-icons/icons/fa/)
     */
    ToolsIcon: FaTools,

    /**
     * `BsBoxArrowDownLeft` icon from [Bootstrap Icons](https://react-icons.github.io/react-icons/icons/bs/)
     */
    TurnitinIcon: BsBoxArrowDownLeft,

    /**
     * `FaUser` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    UsersIcon: FaUser,

    /**
     * `FaX` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    XIcon: FaXTwitter,
};

/**
 * Centralised collection of external URLs used across the site.
 *
 * Ensures consistent and maintainable links to social profiles,
 * external apps, and project repositories.
 */
export const externalLinks = {
    /** Blog subdomain */
    BlogLink: "https://www.karlhorning.dev/dev-blog",

    /** Karl Horning’s CodePen profile */
    CodePenLink: "https://codepen.io/karlhorning",

    /** Karl Horning’s GitHub profile */
    GitHubLink: "https://github.com/Karl-Horning",

    /** Karl Horning’s Ko-fi profile */
    KofiLink: "https://ko-fi.com/karlhorning",

    /** Karl Horning’s LinkedIn profile */
    LinkedInLink: "https://www.linkedin.com/in/karl-horning",

    /** Karl Horning’s portfolio site */
    PortfolioLink: "https://www.karlhorning.dev",

    /** GitHub repository for Karl Horning’s portfolio site */
    PortfolioRepoLink: "https://github.com/Karl-Horning/Karl-Horning.github.io",

    /** RSS feed for the blog subdomain */
    RssLink: "https://www.karlhorning.dev/dev-blog/feed.xml",
} satisfies SiteLink;

/**
 * Collection of internal route paths used for navigation and routing.
 *
 * Provides a single source of truth for route definitions within
 * the site to prevent hard-coded paths in multiple components.
 */
export const internalRoutes = {
    /** Home page */
    HomeRoute: "/",

    /** About page */
    AboutRoute: "/about",

    /** CMALT page */
    CmaltRoute: "/cmalt",

    /** Contact page */
    ContactRoute: "/contact",

    /** Projects page */
    ProjectsRoute: "/projects",
} satisfies SiteLink;

/**
 * Navigation link configuration for the site header and menu.
 *
 * Combines internal and external URLs for easy reuse in
 * navigation components.
 */
export const navLinks = [
    { label: "About", href: internalRoutes.AboutRoute },
    { label: "Blog", href: externalLinks.BlogLink },
    { label: "CMALT", href: internalRoutes.CmaltRoute },
    { label: "Projects", href: internalRoutes.ProjectsRoute },
    { label: "Contact", href: internalRoutes.ContactRoute },
] satisfies readonly NavLink[];

/**
 * A collection of social navigation links, each with a label, URL, and icon.
 * Includes links to external profiles and internal routes.
 */
export const socialLinks: SocialLink[] = [
    {
        label: "About",
        href: internalRoutes.AboutRoute,
        icon: icons.InfoIcon,
    },
    {
        label: "GitHub",
        href: externalLinks.GitHubLink,
        icon: icons.GitHubIcon,
    },
    {
        label: "LinkedIn",
        href: externalLinks.LinkedInLink,
        icon: icons.LinkedInIcon,
    },
    {
        label: "Contact",
        href: internalRoutes.ContactRoute,
        icon: icons.ContactIcon,
    },
    {
        label: "RSS Feed",
        href: externalLinks.RssLink,
        icon: icons.RssIcon,
    },
];
