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
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "PHP",
    "MySQL",
    "Postgres",
    "TypeORM",
    "Primsa",
    "Drizzle ORM",
    "Docker",
    "Laravel",    
    "GraphQL",
    "RESTful APIs",
    "Google Cloud Platform",
    "Vercel",
    "Payload CMS",
    "Jest",
    "Storybook",
    "TailwindCSS",
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
      location: "Hybrid/Remote - Parkland, FL",
      title: "Software Engineer",
      logoUrl: "/site_impact_logo.jpeg",
      start: "February 2024",
      end: "Present",
      description: [
        "Developed a Traffic Quality System analytics dashboard, creating a centralized solution to monitor campaign traffic quality metrics ( Click Through Rate, Shown Percentage, etc). This implementation reduced manual workload for 4 media buyers and an overseas team by 6 hours per day, allowing them to focus on revenue generating tasks.",
        "Developed a Monetization Platform using NextJS, Payload CMS, and Tanstack Query. This project generatedadditional revenue through Google Adsense integration, enabling the company to reinvest in higher quality traffic, resulting in 30% increase in customer retention and campaign orders."
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
    {
      title: "Jobly",
      href: "https://llm.report",
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
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
