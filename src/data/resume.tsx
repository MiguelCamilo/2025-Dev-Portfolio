import { Icons } from "@/components/icons";
import { HomeIcon, MessageCircle, User, Briefcase, GraduationCap, Brain, Code, LoaderCircle } from "lucide-react";

export const DATA = {
  name: "Miguel Camilo",
  initials: "MC",
  url: "https://www.miguelcamilo.dev/",
  location: "Florida, USA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer passionate about creating intuitive products that solve real problems and create meaningful impact.",
  summary:
    "Inspired by Apple's innovation during my tenure, I transitioned into Software Engineering to build products that impact people's lives. A goal I achieved in my first developer role was being part of a start up that built an emergency response app that served 2,000 users during Hurricane Ian's first 24 hours and supported Florida's disaster recovery efforts. That experience of creating something people actually needed in a crisis solidified my passion for creating products that leave an impact. Now, I'm working on [Digitz, a SaaS platform that will help solve the money management challenges my peers and I face, making financial literacy accessible to a generation that needs it most.](#projects)",
  avatarUrl: "/miguel_camilo.jpg",
  skills: [
    { name: "React", url: "https://react.dev" },
    { name: "React Native", url: "https://reactnative.dev" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Typescript", url: "https://www.typescriptlang.org" },
    { name: "Node.js", url: "https://nodejs.org" },
    { name: "PHP", url: "https://www.php.net" },
    { name: "MySQL", url: "https://www.mysql.com" },
    { name: "Postgres", url: "https://www.postgresql.org" },
    { name: "TypeORM", url: "https://typeorm.io" },
    { name: "Primsa", url: "https://www.prisma.io" },
    { name: "Drizzle ORM", url: "https://orm.drizzle.team" },
    { name: "Claude Code", url: "https://claude.com/product/claude-code" },
    { name: "MCP", url: "https://modelcontextprotocol.io" },
    { name: "Docker", url: "https://www.docker.com" },
    { name: "Laravel", url: "https://laravel.com" },
    { name: "GraphQL", url: "https://graphql.org" },
    { name: "RESTful APIs", url: "https://restfulapi.net" },
    { name: "Google Cloud Platform", url: "https://cloud.google.com" },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "Payload CMS", url: "https://payloadcms.com" },
    { name: "Jest", url: "https://jestjs.io" },
    { name: "Storybook", url: "https://storybook.js.org" },
    { name: "TailwindCSS", url: "https://tailwindcss.com/docs" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#contact", icon: MessageCircle, label: "Contact Me" },
  ],
  sidebar: [
     { href: "#hero", icon: User, label: "About" },
     { href: "#work", icon: Briefcase, label: "Work Experience" },
     { href: "#education", icon: GraduationCap, label: "Education" },
     { href: "#skills", icon: Brain, label: "Skills" },
     { href: "#projects", icon: Code, label: "Projects" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MiguelCamilo?tab=overview",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/miguel-camilo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Site Impact",
      href: "https://siteimpact.com",
      hasBadges: true,
      hasLinks: false,
      displayChevron: true,
      links: [],
      badges: ["Typesript", "Next.js", "NEST.js", "MySQL", "Postgres", "Redis", "GCP", "Docker", "PHP", "Laravel"],
      location: "Hybrid - Parkland, FL",
      title: "Senior Software Engineer",
      logoUrl: "/site_impact_logo.jpeg",
      start: "March 2026",
      end: "Present",
      description: [
        "Developed a Traffic Quality System analytics dashboard, creating a centralized solution to monitor campaign traffic quality metrics ( Click Through Rate, Shown Percentage, etc). This implementation reduced manual workload for 4 media buyers and an overseas team by 6 hours per day, allowing them to focus on revenue generating tasks.",
      ],
    },
    {
      company: "Site Impact",
      href: "https://siteimpact.com",
      hasBadges: true,
      hasLinks: false,
      displayChevron: true,
      links: [],
      badges: [],
      location: "Hybrid/Remote - Parkland, FL",
      title: "Software Engineer",
      logoUrl: "/site_impact_logo.jpeg",
      start: "February 2024",
      end: "Febuary 2026",
      description: [
        // "Developed a Monetization Platform using NextJS, Payload CMS, and Tanstack Query. This project generatedadditional revenue through Google Adsense integration, enabling the company to reinvest in higher quality traffic, resulting in 30% increase in customer retention and campaign orders."
      ],
    },
    {
      company: "ManIt Labs",
      href: "https://manitlabs.com/",
      hasBadges: true,
      hasLinks: false,
      displayChevron: true,
      links: [],
      badges: [],
      location: "Fort Lauderdale, FL",
      title: "Software Engineer",
      logoUrl: "/man_it_labs.jpeg",
      start: "August 2023",
      end: "November 2023",
      description: [
        "Collaborated with the teams UI/UX designer to build out web UI components using React.",
        "Participated in AGILE code reviews in a bi-weekly schedule using JIRA to review current and upcoming sprint goals.",
        "Developed reusable React components using Storybook to test and organize the components and also focused on performance best practices with testing using Jest.",
      ],
    },
    {
      company: "Emergency Co.",
      hasBadges: true,
      hasLinks: true,
      displayChevron: true,
      links: [
        {
          label: "Fox News Coverage",
          href: "https://www.foxnews.com/video/6313465568112",
        },
        {
          label: "Refresh Miami Coverage",
          href: "https://refreshmiami.com/news/west-palm-beach-based-emergency-app-is-equipping-us-with-the-digital-tools-necessary-to-weather-disasters/"
        }
      ],
      badges: [],
      href: "https://www.linkedin.com/company/emergency/",
      location: "Hybrid/Remote - West Palm Beach, FL",
      title: "Frontend Software Engineer",
      logoUrl: "/emergency_company.jpeg",
      start: "January 2021",
      end: "April 2021",
      description: [
        "Contributed to emergency response platform frontend as part of 5-engineer team that served 2000 users during Hurricane Ian's first 24 hours, with app data utilized by Florida Division of Emergency Management for disaster recovery efforts.",
        "Developed critical UI components during crisis deployment, including interactive weather condition filter controls, real-time news integration module, and primary navigation system, enabling users to access life-saving emergency information during active disaster events.",
        "Implemented responsive UI components using React and Tailwind CSS that successfully handled 2000 concurrent users during Hurricane Ian without performance degradation, ensuring emergency information remained accessible during disaster response periods."
      ],
    },
    {
      company: "Apple",
      href: "https://apple.com",
      hasBadges: false,
      hasLinks: false,
      displayChevron: true,
      links: [],
      badges: [],
      location: "Palm Beach Gardens, FL",
      title: "Repair Technician / Genius",
      logoUrl: "apple_logo.jpg",
      start: "April 2019",
      end: "July 2024",
      description: [
        "Maintained an average  customer satisfaction rating of 95% by providing expert technical support and troubleshooting  software systems, as well as offering exceptional customer service.",
        "Collaborated effectively with team members to achieve team goals and objectives, contributing to team performance and providing guidance and mentorship. Earned Apple Certified iOS Technician (ACiT) certifications."
      ],
    },
  ],
  certifications: [
    {
      title: "Model Context Protocol: Advanced Topics",
      certificationProvider: "Anthropic",
      url: "https://verify.skilljar.com/c/t7kgfjekuypc",
      displayChevron: false,
      logoUrl: "/anthropic_logo.jpg",
      altText: "Anthropic",
      subtitle: "Anthropic",
      period: "2026",
      hasLinks: true,
      links: [
        {
          label: "View credential",
          href: "https://verify.skilljar.com/c/t7kgfjekuypc",
        },
      ],
    },
    {
      title: "Introduction to Model Context Protocol",
      certificationProvider: "Anthropic",
      url: "https://verify.skilljar.com/c/oijuioqpqyo3",
      displayChevron: false,
      logoUrl: "/anthropic_logo.jpg",
      altText: "Anthropic",
      subtitle: "Anthropic",
      period: "2026",
      hasLinks: true,
      links: [
        {
          label: "View credential",
          href: "https://verify.skilljar.com/c/oijuioqpqyo3",
        },
      ],
    },
  ],
  education: [
    {
      displayChevron: false,
      school: "Boca Code",
      href: "https://bocacode.com/alumni/software-engineer/miguel-camilo",
      degree: "Software Engineer Career Course",
      logoUrl: "/boca_code.png",
      start: "2023",
      end: "2023",
    },
    {
      displayChevron: false,
      school: "Palm Beach State College",
      href: "https://uwaterloo.ca",
      degree: "Associates Degree, Computer Science",
      logoUrl: "/pbsc_logo.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Digitz",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Developed Digitz, a SaaS platform that will help solve the money management challenges my peers and I face, making the process of managing money accessible to a generation that needs it most.",
      technologies: [
        "Next.js",
        "Typescript",
        "Hono API",
        "Drizzle ORM",
        "TailwindCSS",
        "Plaid",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website Coming Soon",
          href: "",
          icon: <LoaderCircle className="size-3 animate-spin" />,
        },
      ],
      image: "",
      video:
        "https://0xd31ij6emv2ohnp.public.blob.vercel-storage.com/digitz-web.mp4",
    },
    {
      title: "Jobly",
      href: "https://jobly-careers.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Jobly was created to challenge and improve my abilities in building a platform where users can consistently post and interact. The project focused on developing a well thought out UI and UX, along with managing forms for creating job listings with Markdown support. For SEO, I implemented dynamic search parameters that update based on user filters, allowing users to share filtered links so others can view jobs with those filters already applied.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shaden Ul",
        "Clerk Auth",
        "Prisma ORM",
        "PostgresSQL",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://jobly-careers.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MiguelCamilo/Jobly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://0xd31ij6emv2ohnp.public.blob.vercel-storage.com/jobly-web.mp4",
    },
    {
      title: "DevLink",
      href: "https://devlinkapp.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "DevLink is a tech community for anyone, whether you're a seasoned developer, a student just getting started, or simply tech curious, there's a place where you can ask questions and find out more about the tech community!",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "NextAuth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://devlinkapp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MiguelCamilo/DevLinks-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://0xd31ij6emv2ohnp.public.blob.vercel-storage.com/devlink-web.mp4",
    },
  ],
  hackathons: [
    {
      // title: "Hack Western 5",
      // dates: "November 23rd - 25th, 2018",
      // location: "London, Ontario",
      // description:
      //   "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      // image:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      // links: [],
    },
    {
      // title: "Hack The North",
      // dates: "September 14th - 16th, 2018",
      // location: "Waterloo, Ontario",
      // description:
      //   "Developed a mobile application which delivers university campus wide events in real time to all students.",
      // image:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      // links: [],
    },
  ],
} as const;
