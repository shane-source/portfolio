import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: " Internship",
      company_name: "Muriithi Kireria & Associate Advocates, Nairobi  ",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2019 - May 2020",
      points: [
        "Produced high-quality documents, spreadsheets and presentations for internal and customer-facing needs.",
        "Helped with administrative support by managing incoming calls, coordinating files and sorting mail.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Intern Student",
      company_name: "KCA University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - Dec 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Scanning and printing documents",
        "Doing any other work given by legal counsel or assistant legal counsel",
        "Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.",
      ],
    },
    {
      title: "Internship",
      company_name: "Kenya Airport Authorities",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2022 - July 2022",
      points: [
        "Ensuring that ICT facilities meet the need of users",
        "Troubleshooting computer operations",
        "Checking up Computer network connections",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: " Developer ",
      company_name: "Upwork",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "DEc 2022 - Present",
      points: [
        "Manage code documentation and version control",
        "Troubleshoot and debug software",
        "Write clean, concise, and efficient code",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Hardworking, disciplined and focused in everything she does ",
      name: "Mercy Epiche",
      designation: "Executive Manager",
      company: "KCA University",
    },
    {
      testimonial:
        "I've never met an intern who truly cares about their clients' success like Sharon does.",
      name: "Michael Amimmoh",
      designation: "Accountant",
      company: "KCA University",
    },
    {
      testimonial:
        "A quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions",
      name: "Kennedy",
      designation: "ICT Officer",
      company: "KAA",
    },
  ];
  
  const projects = [
    {
      name: "Modern Youtube Clone",
      description:
        "The YouTube Clone is a full-featured video streaming application designed to emulate the core functionalities of YouTube. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Modern Exercises App",
      description:
        "A comprehensive web application designed to help users discover, track, and manage their fitness routines.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };