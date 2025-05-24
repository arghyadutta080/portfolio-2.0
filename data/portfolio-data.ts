export const portfolioData = {
  personal: {
    name: "Arghya Dutta",
    title: "Full Stack Developer",
    email: "arghyadutta080@gmail.com",
    phone: "+91-90512-44326",
    location: "Kolkata, India",
    bio: "Full-stack developer passionate about building scalable web applications. Proficient in modern web technologies and experienced in both frontend and backend development. I enjoy solving real-world problems with code and creating seamless user experiences.",
    background: "Full-stack developer passionate about building scalable, user-focused web applications. Proficient in both frontend and backend technologies like Next.js, TypeScript, Node.js, and Firebase, with practical experience from internships at startups. Skilled in developing responsive UIs, integrating APIs, and optimizing performance. Actively involved in hackathons and open-source projects, with a strong focus on writing clean, efficient, and maintainable code to solve real-world problems.",
    profileImage: "/profile-picture.jpeg",
    signatureLogo: "/signature_logo.png",
  },

  education: [
    {
      college: "RCC Institute of Information Technology (RCCIIT)",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      cgpa: "8.33/10",
      graduationYear: "2025",
    },
    {
      college: "Hindu School",
      degree: "Higher Secondary Education (Science)", 
      cgpa: "94%",
      graduationYear: "2021",
    }
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/arghyadutta080",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arghya-dutta-developer",
      icon: "linkedin",
    },
    {
      name: "Portfolio",
      url: "https://arghya-dutta.vercel.app",
      icon: "globe",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_arghya_dutta_",
      icon: "instagram",
    },
  ],

  experience: [
    {
      id: 1,
      company: "Paraheights Technologies Pvt. Ltd.",
      position: "Software Developer Intern",
      duration: "Feb 2025 - April 2025",
      location: "Gurgaon, India",
      description:
        "Developed dynamic API-driven video content for Edzy.ai using Remotion. Integrated APIs to enable lightweight real-time video generation and optimized pipelines for better performance.",
      technologies: ["TypeScript", "Next.js", "Remotion", "Zustand", "TanStack Query", "Tailwind CSS", "REST APIs"],
      link: "https://drive.google.com/file/d/1EUze4W-2gvN04_75tQQ8TSv3Mw6W2ib9/view",
    },
    {
      id: 2,
      company: "Fibo Health Tech Pvt. Ltd.",
      position: "Software Development Engineer Intern",
      duration: "May 2024 - August 2024",
      location: "Bangalore, India",
      description:
        "Handled frontend development and deployment. Integrated PWA functionality, optimized state management, and participated in code reviews and documentation.",
      technologies: ["TypeScript", "Next.js", "Zustand", "Firebase", "Node.js", "Express.js", "SCSS", "Tailwind CSS"],
      link: "https://drive.google.com/file/d/1FEvMG2i0Hdpbgm5cafhcMz0KAJsyVlnG/view",
    },
    {
      id: 3,
      company: "YouEkko Communications Pvt. Ltd.",
      position: "Software Development Engineer Intern (Full-Stack)",
      duration: "April 2024 - May 2024",
      location: "Kolkata, India",
      description:
        "Built frontend and backend features, implemented code-splitting and lazy loading, and optimized routing for better performance.",
      technologies: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS", "REST APIs"],
      link: "https://drive.google.com/file/d/1nAEcXY50QFRq3lDO9hJgf6RvptdbZYL-/view",
    },
  ],

  projects: [
    {
      id: 1,
      name: "Blogi - Share Your Thoughts",
      description:
        "A blogging platform where users can compose, publish, and manage blogs. Features JWT auth, rich-text editor, and user dashboard.",
      technologies: ["TypeScript", "Next.js", "Zustand", "Tailwind CSS", "FastAPI", "PostgreSQL"],
      liveUrl: "https://blogi-ashen.vercel.app/",
      githubUrl: "https://github.com/arghyadutta080/Blogi",
      image: "/projects/blogi.png",
    },
    {
      id: 2,
      name: "Certificate Generator",
      description:
        "A certificate issuing platform with admin-panel, PDF preview, JWT authentication, and role-based access control.",
      technologies: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/arghyadutta080/Certificate-Generator",
      image: "/projects/certificate-generator.png",
    },
    {
      id: 4,
      name: "Blogger's Site",
      description:
      "A personal blogging web app where users can log in, create and read blogs. Features Google login, rich UI, and dynamic routing.",
      technologies: ["TypeScript", "Vite", "React.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://bloggers-world.netlify.app",
      githubUrl: "https://github.com/arghyadutta080/Blogger-s-Site",
      image: "/projects/bloggers_site.png",
    },
    {
      id: 3,
      name: "Saarthi Chatbot",
      description:
        "An intelligent chatbot powered by OpenAI API to support agriculture-related queries. Includes chat history, role-based auth, and user experience focus.",
      technologies: ["TypeScript", "Vite", "React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
      liveUrl: "", // Add live URL if deployed
      githubUrl: "https://github.com/arghyadutta080/Saarthi-Chatbot",
      image: "/projects/saarthi.png",
    },
    {
      id: 5,
      name: "stockXplore Client Site",
      description:
        "A stock prediction platform that visualizes stock trends using data from a Python/Django backend. Provides predictions and charts.",
      technologies: ["React.js", "Tailwind CSS", "Python", "Django", "Machine Learning"],
      liveUrl: "", // Add live URL if deployed
      githubUrl: "https://github.com/arghyadutta080/stockXplore-clientsite",
      image: "/projects/stockxplore.png",
    },
    {
      id: 6,
      name: "Food Delivery App",
      description:
        "Frontend design of a food delivery mobile app built with React Native and Expo. Features Redux state management and UI components.",
      technologies: ["React Native", "Expo", "Redux Toolkit", "Nativewind"],
      liveUrl: "", // Add live URL if deployed
      githubUrl: "https://github.com/arghyadutta080/Food-Delivery-App",
      image: "/projects/deliveroo.png",
    }
  ],


  certificates: [
    {
      id: 1,
      name: "AWS APAC's Solutions Architecture",
      issuer: "Forage",
      date: "2025",
      credentialId: "B2GzruYPwGe6wirRr",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_LuQwtbQJuznd5QfLa_1737313207075_completion_certificate.pdf",
    },
    {
      id: 2,
      name: "SQL Certification",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "74335e6bf21c",
      link: "https://www.hackerrank.com/certificates/74335e6bf21c",
    },
    {
      id: 3,
      name: "API Development and Testing",
      issuer: "Postman",
      date: "2023",
      credentialId: "34r6OvdwRUGG6O8mSE50IQ",
      link: "https://badgr.com/public/assertions/34r6OvdwRUGG6O8mSE50IQ?identity__email=arghyadutta080@gmail.com",
    },
    {
      id: 4,
      name: "Certificate of Leadership",
      issuer: "Google Developer Student Clubs, RCCIIT",
      date: "2023",
      credentialId: "1TMnpjPOrvjAWpseHcFJ4Rbo9socW2tVO5t0GsydFlmY",
      link: "https://drive.google.com/file/d/1u-zwW-wZa3yrom6-Qaskb9l_Gn8dDrdn/view?usp=sharing",
    },
    {
      id: 5,
      name: "Smart Bengal Hackathon 2.0 Finalist",
      issuer: "SBH 2.0",
      date: "2024",
      credentialId: "not_available",
      link: "https://drive.google.com/file/d/1W3d1_mI3VZPTZ5B5ZGEHdTZY8z0i4yVq/view?usp=sharing",
    },
    {
      id: 6,
      name: "Hack4Bengal 2.0 Finalist",
      issuer: "Hack4Bengal",
      date: "2023",
      credentialId: "da9b30b6-5a11-4732-b1a9-635a218f1285",
      link: "https://certificate.givemycertificate.com/c/da9b30b6-5a11-4732-b1a9-635a218f1285",
    },
  ],

  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "Remotion",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Firebase",
      "Supabase",
      "REST APIs",
      "Socket.io",
    ],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Netlify",
      "Vercel",
      "Postman",
      "Swagger",
      "Replit",
    ],
    database: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    languages: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
};
export type PortfolioData = typeof portfolioData;