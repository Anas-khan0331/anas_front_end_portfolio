export interface IProject {
    title: string;
    slug: string;
    liveUrl: string;
    sourceCode?: string;
    year: number;
    description: string;
    techStack?: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    role: string;
}

export interface IExperience {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
}

export const GENERAL_INFO = {
    name: 'Anas Mehboob Khan',
    email: 'khansaab0331@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anas-mehboob-khan-aa310b216/',
    github: 'https://github.com/Anas-khan0331?tab=repositories',
    currentCompany: 'Ecomminds',
    currentPosition: 'Mid-Senior Front End Dev',
    totalExperience: '3 years',
    facebook: 'https://www.facebook.com/anas.mehboob.khan',
};

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        icon: '/logo/github.svg',
        url: 'https://github.com/Anas-khan0331?tab=repositories',
    },
    {
        name: 'LinkedIn',
        icon: '/logo/linkedin.svg',
        url: 'https://www.linkedin.com/in/anas-mehboob-khan-aa310b216/',
    },
    {
        name: 'Email',
        icon: '/logo/email.svg',
        url: 'mailto:khansaab0331@gmail.com',
    },
];

export const MY_STACK = {
    Frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Material Design',
            icon: '/logo/material.svg',
        },
        {
            name: 'Ant Design',
            icon: '/logo/ant.svg',
        },
        {
            name: 'Radix UI',
            icon: '/logo/radix.svg',
        },
        {
            name: 'shadcn',
            icon: '/logo/shadcn.svg',
        },
        {
            name: 'Storybook',
            icon: '/logo/storybook.svg',
        },
        {
            name: 'Shopify Polaris',
            icon: '/logo/shopify.svg',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.svg',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'React Query',
            icon: '/logo/react-query.svg',
        },
    ],
    Tools: [
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'Vite',
            icon: '/logo/vitejs.svg',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
    ],
    'AI-Tools': [
        {
            name: 'WARP',
            icon: '/logo/warp.svg',
        },
        {
            name: 'Windsurf',
            icon: '/logo/windsurf.svg',
        },
        {
            name: 'Antigravity',
            icon: '/logo/antigravity-color.svg',
        },
        {
            name: 'Cursor',
            icon: '/logo/cursor.svg',
        },
        {
            name: 'Gemini',
            icon: '/logo/gemini-color.svg',
        },
        {
            name: 'Deepseek',
            icon: '/logo/deepseek-color.svg',
        },
        {
            name: 'Claude Code',
            icon: '/logo/claude.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Swapproo',
        slug: 'swapproo',
        liveUrl: 'https://swapproo-clientside-zr27.vercel.app/',
        sourceCode: 'https://github.com/Anas-khan0331/swapproo_clientside',
        year: 2024,
        description:
            'Swapproo — Trade-in Platform. Reverse marketplace where customers trade-in electronic devices and recyclers bid on them. Multi-device trade-in flow with dynamic pricing calculator, authentication system, user account management, and complete checkout process.',
        techStack: [
            'Next.js 16.2.4',
            'React 19',
            'TypeScript',
            'Tailwind CSS v4',
            'shadcn/ui',
            'Radix UI',
            'React Hook Form',
            'Zod',
            'GSAP',
            'Iconsax React',
        ],
        thumbnail: '/projects/thumbnail/swapproo-thumbnail.png',
        longThumbnail: '/projects/long/swapproo.png',
        images: ['/projects/images/swapproo.jpg'],
        role: 'Frontend Developer - Built complete frontend architecture with modern React patterns, TypeScript expertise, responsive design mastery, form validation, performance optimization, and accessibility implementation.',
    },
    {
        title: 'Grace Remodeling & Construction',
        slug: 'grace-remodeling',
        liveUrl: 'https://renovate-plus.vercel.app/',
        sourceCode: 'https://github.com/Anas-khan0331/renovate_plus',
        year: 2025,
        description:
            'White-Label Contractor Website — A fully production-ready, white-label business website for home remodeling and construction companies. Built to be deployed for any contractor client by editing a single configuration file. Features include single-file client config, dynamic logo system, 9 service pages, lead capture system with Next.js Server Actions, before/after gallery with interactive drag-slider, filterable portfolio section, automated SEO with JSON-LD schema, and scroll-triggered animations via Framer Motion.',
        techStack: [
            'Next.js 14',
            'React',
            'Tailwind CSS',
            'Framer Motion',
            'shadcn/ui',
            'Next.js Server Actions',
            'Zod',
        ],
        thumbnail: '/projects/thumbnail/renovate.png',
        longThumbnail: '/projects/long/renovate.png',
        images: ['/projects/images/renovate_plus.png'],
        role: 'Full-Stack Developer - Built complete white-label contractor website with configurable client system, multi-step lead capture forms, interactive before/after galleries, automated SEO, and performance-optimized static generation.',
    },
    {
        title: 'SellBack',
        slug: 'sellback',
        liveUrl: '#',
        year: 2024,
        description:
            'SellBack is a modern e-commerce platform for selling electronic devices (mobile phones, consoles, watches, laptops) for cash. The platform provides instant valuations, counter-offer functionality, and a streamlined checkout process.',
        techStack: [
            'Next.js',
            'React',
            'Redux Toolkit',
            'RTK Query',
            'SCSS',
            'GSAP',
            'Three.js',
            'React Hook Form',
        ],
        thumbnail: '/projects/thumbnail/sell-back.png',
        longThumbnail: '/projects/long/sellback.jpg',
        images: ['/projects/images/sell-back-full.png'],
        role: 'Full-Stack Developer - Built complete device trade-in platform with real-time valuations, multi-step trade-in flow, counter-offer system, and seamless checkout integration.',
    },
    {
        title: 'Trust Score Platform',
        slug: 'trust-score-platform',
        liveUrl: '#',
        sourceCode: '#',
        year: 2024,
        description:
            "Pakistan's first comprehensive trust and review management platform. A monorepo project featuring customer-facing application, business admin dashboard, and shared component library. Enables businesses to build trust through verified customer feedback while providing customers with reliable reviews and ratings.",
        techStack: [
            'Next.js 15',
            'React 19',
            'TypeScript',
            'Tailwind CSS v4',
            'React Hook Form',
            'Yup',
            'GSAP',
            'Storybook',
            'Vite',
            'pnpm',
        ],
        thumbnail: '/projects/thumbnail/trust-score-platform.jpg',
        longThumbnail: '/projects/long/trust-score-platform.jpg',
        images: ['/projects/images/trust-score-full.png'],
        role: 'Full-Stack Developer - Architected and developed complete monorepo with 200+ reusable components, customer platform, business dashboard, and shared UI library with comprehensive testing and documentation.',
    },
    {
        title: '1Fitout',
        slug: '1fitout',
        liveUrl: 'https://1fitout.com/',
        year: 2024,
        description:
            'High-performance renovation services platform built with React, Vite, and GSAP animations.',
        techStack: ['React', 'Vite', 'GSAP', 'Tailwind CSS'],
        thumbnail: '/projects/images/1fitout-thumbnail.png',
        longThumbnail: '/projects/long/1fitout.jpg',
        images: ['/projects/images/1fitout.png'],
        role: 'Frontend Developer - Built responsive UI with smooth animations and interactive components.',
    },
    {
        title: 'Nike Store',
        slug: 'nike-store-clone',
        liveUrl: 'http://nike-store-blue.vercel.app/',
        sourceCode: 'https://github.com/Anas-khan0331/Nike-store',
        year: 2024,
        description: 'Modern Nike store layout with clean responsive design.',
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        thumbnail: '/projects/thumbnail/nike-store.jpg',
        longThumbnail: '/projects/long/nike-store.jpg',
        images: ['/projects/images/nike-store.png'],
        role: 'Frontend Developer - Created pixel-perfect replica with modern UI/UX patterns.',
    },
    {
        title: 'QR Menu Maker',
        slug: 'qr-menu-maker',
        liveUrl: '#',
        year: 2024,
        description:
            'Next.js & MUI platform allowing businesses to create digital menus via QR codes.',
        techStack: ['Next.js', 'Material-UI', 'React'],
        thumbnail: '/projects/thumbnail/qr-menu.jpg',
        longThumbnail: '/projects/long/qr-menu.jpg',
        images: ['/projects/images/qr-menu.png'],
        role: 'Full-Stack Developer - Developed complete QR code generation and menu management system.',
    },
    {
        title: 'IMDB Clone',
        slug: 'imdb-clone',
        liveUrl: 'https://github.com/AnasKhan0331/IMDB_clone',
        year: 2023,
        description:
            "Replicates IMDB's core features to showcase movies with sleek design.",
        techStack: ['React', 'Redux', 'TMDB API', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/imdb-clone.jpg',
        longThumbnail: '/projects/long/imdb-clone.jpg',
        images: [
            '/projects/images/imdb-clone.png',
            '/projects/images/imdb-clone-2.png',
        ],
        sourceCode: 'https://github.com/AnasKhan0331/IMDB_clone',
        role: 'Frontend Developer - Integrated TMDB API and built movie display components.',
    },
    {
        title: 'GPT-3 Clone',
        slug: 'gpt3-clone',
        liveUrl: 'https://github.com/AnasKhan0331/GPT3_website',
        year: 2023,
        description:
            'Showcasing integration of modern UI components for an AI landing page.',
        techStack: ['React', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
        thumbnail: '/projects/thumbnail/gpt3-clone.jpg',
        longThumbnail: '/projects/long/gpt3-clone.jpg',
        images: ['/projects/images/gpt3-clone.png'],
        sourceCode: 'https://github.com/AnasKhan0331/GPT3_website',
        role: 'Frontend Developer - Created AI interface with modern design patterns.',
    },
    {
        title: 'Forever Commerce',
        slug: 'forever-commerce',
        liveUrl: 'https://github.com/Anas-khan0331/Shop.Co-Ecommerce',
        year: 2023,
        description:
            'Full e-commerce platform built with Next.js focusing on trendy apparel.',
        techStack: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/forever-commerce.jpg',
        longThumbnail: '/projects/long/forever-commerce.jpg',
        images: ['/projects/images/forever-commerce.png'],
        sourceCode: 'https://github.com/Anas-khan0331/Shop.Co-Ecommerce',
        role: 'Full-Stack Developer - Built complete e-commerce solution with payment integration.',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Mid-Senior Software Engineer',
        company: 'Ecomminds',
        location: 'Lahore, Punjab',
        duration: 'May 2025 - Present',
        description: `
            Architected scalable React-based applications, improving enterprise platform usability by 35%.<br/>
            Refactored legacy Next.js and Redux implementations, improving rendering efficiency and reducing initial load duration by 35%.<br/>
            Streamlined asynchronous data handling through RTK Query and TanStack Query, minimizing redundant network calls and accelerating deployment cycles.<br/>
            Engineered improved front-end solutions aligned with performance best practices and maintainability standards.<br/>
            Integrated RESTful services to enhance data consistency, boosting system reliability and backend communication stability.<br/>
            Delivered stakeholder presentations translating complex design frameworks into functional, accessible interfaces.
        `,
    },
    {
        title: 'Associate Software Engineer',
        company: 'Transcure',
        location: 'Lahore, Punjab',
        duration: 'June 2023 - May 2025',
        description: `
            Contributed to large-scale e-commerce solutions utilizing Shopify Polaris, enhancing interface consistency and increasing conversion performance by 22%.<br/>
            Strengthened dashboard stability through advanced exception handling mechanisms and proactive monitoring systems, reducing system errors by 40%.<br/>
            Implemented third-party service integrations to extend application capabilities and improve platform scalability.<br/>
            UI responsiveness to support high-traffic medical and commerce environments.
        `,
    },
    {
        title: 'Junior Software Engineer',
        company: 'ITsolz',
        location: 'Remote, Lahore',
        duration: 'October 2022 - June 2023',
        description: `
            Built reusable interface modules supporting modular architecture principles, accelerating development efficiency by 30%.<br/>
            Participated in structured code evaluations to enhance maintainability and enforce engineering standards.<br/>
            Developed responsive storefront prototypes ensuring device adaptability and seamless interaction across browsers.
        `,
    },
];
