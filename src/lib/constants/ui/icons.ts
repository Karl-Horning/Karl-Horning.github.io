import { IconRegistry } from "@/types";
import {
    BsBox2HeartFill,
    BsBoxArrowDownLeft,
    BsFillSendFill,
    BsInfoSquareFill,
} from "react-icons/bs";
import {
    FaArrowAltCircleRight,
    FaArrowLeft,
    FaBlog,
    FaSearch,
    FaTools,
} from "react-icons/fa";
import {
    FaArrowRight,
    FaBluesky,
    FaCalendar,
    FaClock,
    FaCode,
    FaCodepen,
    FaDatabase,
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
    SiTailwindcss,
    SiTeratail,
    SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { BiLogoPostgresql, BiSolidHomeHeart } from "react-icons/bi";
import { GrCertificate, GrContact, GrTestDesktop } from "react-icons/gr";

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
     * `FaBlog` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    BlogIcon: FaBlog,

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
     * `GrCertificate` icon from [Grommet-Icons](https://react-icons.github.io/react-icons/icons/gr/)
     */
    CertificateIcon: GrCertificate,

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
     * `GrContact` icon from [Grommet-Icons](https://react-icons.github.io/react-icons/icons/gr/)
     */
    ContactIcon: GrContact,

    /**
     * `FaDatabase` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    DatabaseIcon: FaDatabase,

    /**
     * `GrTestDesktop` icon from [Grommet-Icons](https://react-icons.github.io/react-icons/icons/gr/)
     */
    DemoIcon: GrTestDesktop,

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
     * `BiSolidHomeHeart` icon from [BoxIcons](https://react-icons.github.io/react-icons/icons/bi/)
     */
    HomeIcon: BiSolidHomeHeart,

    /**
     * `FaCircleInfo` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    InfoIcon: BsInfoSquareFill,

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
     * `BiLogoPostgresql` icon from [BoxIcons](https://react-icons.github.io/react-icons/icons/bi/)
     */
    PostgreSqlIcon: BiLogoPostgresql,

    /**
     * `FaArrowLeft` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    PreviousIcon: FaArrowLeft,

    /**
     * `BsBox2HeartFill` icon from [Bootstrap Icons](https://react-icons.github.io/react-icons/icons/bs/)
     */
    ProjectIcon: BsBox2HeartFill,

    /**
     * `FaReact` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ReactIcon: FaReact,

    /**
     * `FaArrowAltCircleRight` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    ReadMoreIcon: FaArrowAltCircleRight,

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
     * `SiTypescript` icon from [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
     */
    TypeScriptIcon: SiTypescript,

    /**
     * `FaUser` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    UsersIcon: FaUser,

    /**
     * `FaX` icon from [Font Awesome 6](https://react-icons.github.io/react-icons/icons/fa6/)
     */
    XIcon: FaXTwitter,
};
