import { IconType } from "react-icons"
import {
  FaMapMarkerAlt,
  FaBook,
  FaLanguage,
  FaGamepad,
  FaUniversity,
  FaSkiing,
  FaBuilding,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaGoodreads,
  FaEnvelope,
  FaInstagram,
  FaReddit,
  FaDribbble,
  FaYoutube,
  FaStackOverflow,
  FaDesktop,
} from "react-icons/fa"
import { FaBluesky, FaXTwitter } from "react-icons/fa6"

/**
 * Configuration for the home page intro section
 */
export const homeIntroConfig = {
  /**
   * Your full name (used in breadcrumbs, footer, and other places)
   */
  name: "Mohammad Jose Rizal",

  /**
   * Your short/first name (optional - used in "Hi, I'm..." greeting)
   * If not provided, the full name will be used
   */
  shortName: "Jose",

  /**
   * Introduction paragraphs (can be multiple)
   */
  introParagraphs: [
    "I’m a Web Developer with over two years of experience building responsive and high-performance websites. I work with HTML, CSS, and JavaScript, and have hands-on experience with frontend tools like Bootstrap and jQuery. I also use n8n to automate workflows and integrate systems to improve business efficiency. I enjoy turning business needs into practical technical solutions and collaborating with teams to deliver impactful digital products.",
    "I am currently working at Gmedia as a Front-End Developer, where I focus on building responsive and user-friendly web applications. In addition to frontend development, I also work on workflow automation using n8n and contribute to full-stack development with Laravel and PHP. I enjoy collaborating with cross-functional teams to deliver efficient, scalable, and high-quality digital solutions.",
  ],

  /**
   * Quick facts displayed as chips below your introduction
   * Fill in the fields below. Leave empty ("") to hide a fact.
   */
  facts: {
    company: "GMEDIA",
    education: "Informatics Engineering",
    location: "Yogyakarta",
    languages: "ID",
    role: "Front-End Developer",
  },

  /**
   * Additional custom facts to display below the predefined ones.
   * Add any extra facts you want to display with their icons.
   * You must use an icon from react-icons and provide its label.
   */
  additionalFacts: [
    { icon: FaGamepad, label: "Gamers" },
    { icon: FaYoutube, label: "YouTuber (@freakyjoo)" },
    { icon: FaDesktop, label: "PC Enthusiast" },
  ] as Array<{ icon: IconType; label: string }>,

  /**
   * Number of work items to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero.
   */
  workItemsToShow: 3,

  /**
   * Number of projects to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero. We recommend keeping it low and
   * having a multiple of 2 for better grid layout (e.g., 2 or 4).
   */
  projectsToShow: 4,

  /**
   * Number of blog posts and projects to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero. We recommend keeping it low (=3) and
   * having a multiple of 3 for better grid layout.
   */
  blogPostsToShow: 3,
}

/**
 * Configuration for pagination settings within the site.
 */
export const paginationConfig = {
  /**
   * Number of blog posts to show per page for "/blog" and "/blog?page=n" routes.
   * This number must be a number greater than zero.
   */
  blogPostsPerPage: 5,

  /**
   * Number of work items to show per page for "/work" and "/work?page=n" routes.
   * This number must be a number greater than zero.
   */
  workItemsPerPage: 6,

  /**
   * Number of projects to show per page for "/projects" and "/projects?page=n" routes.
   * This number must be a number greater than zero.
   */
  projectsPerPage: 6,
}

/**
 * Configuration for the footer
 */
export const footerConfig = {
  /**
   * Name displayed in the copyright notice
   */
  copyrightName: "John Doe",

  /**
   * Show version and attribution section
   * Set to true if you want to hide the "built by @alemoraru" attribution and version number.
   * By default, this is true to give credit to the template creator, but you can disable it if desired.
   */
  showVersionAndAttribution: true,

  /**
   * Social media links
   * Simply add your URLs below. Leave empty ("") to hide a social link.
   */
  socialLinks: {
    github: "https://github.com/mjoserizal",
    linkedin: "https://www.linkedin.com/in/mjoserizal",
    instagram: "https://www.instagram.com/mjoserizal_",
    youtube: "https://www.youtube.com/@freakyjoo",
    email: "jrizal963@gmail.com",
  },
}

// USERS DO NOT NEED TO MODIFY BELOW THIS LINE
// YOU CAN, HOWEVER, EXTEND THE ICON MAPS IF NEEDED

/**
 * Internal mapping of predefined fact categories to their icons
 * This is used internally by the HomeContent component - users don't need to modify this
 */
export const factIconMap: Record<keyof typeof homeIntroConfig.facts, IconType> = {
  company: FaBuilding,
  education: FaUniversity,
  location: FaMapMarkerAlt,
  languages: FaLanguage,
  role: FaTools,
}

/**
 * Internal mapping of social platforms to their icons and labels
 * This is used internally by the Footer component - users don't need to modify this
 */
export const socialIconMap: Record<
  keyof typeof footerConfig.socialLinks,
  { icon: IconType; label: string }
> = {
  github: { icon: FaGithub, label: "GitHub" },
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  instagram: { icon: FaInstagram, label: "Instagram" },
  youtube: { icon: FaYoutube, label: "YouTube" },
  email: { icon: FaEnvelope, label: "Email" },
}
