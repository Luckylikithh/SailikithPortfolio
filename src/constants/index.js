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
  carrent,
  TCS,
  SUNY,
  zensar,
  homedepot,

  threejs,
  aws,
  knockout,
  java,
  vuejs,
  python,
  angular,
  framer,
  Deep,
  CUBE
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
    para:"I build responsive, user-friendly websites with modern frameworks, across all devices.",
  },
  {
    title: "React JS Developer",
    icon: mobile,
    para:"I create cross-platform mobile apps with React Native, delivering high-performance solutions for iOS and Android.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    para:"I develop scalable backend systems and APIs, ensuring robust, secure, and efficient server-side functionality."
  },

];

const technologies = [
  
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
const technologies2 = [
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "knockout js",
    icon: knockout,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Vuejs",
    icon: vuejs,
  },
 
  
]

const FE= [
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
  
]

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Zensar Technologies",
    client_name: "Healthcare",
    icon: zensar,
    iconBg: "#FFFFFF",
    date: "Jan 2018 - Apr 2019",
    points: [
      "Developed a microservices-based architecture utilizing Spring Boot, achieving a 30% reduction in deployment time and enhancing system scalability for healthcare applications.",
      "Implemented RESTful APIs that improved data retrieval speed by 25%, significantly enhancing user experience for healthcare professionals accessing patient data.",
     " Integrated Fast Healthcare Interoperability Resources (FHIR) standards to ensure interoperability, facilitating seamless data exchange between Electronic Medical Record (EMR) systems and third-party applications.",
      "Achieved 95% compliance with Health Insurance Portability and Accountability Act (HIPAA) regulations through the implementation of rigorous security measures, including data encryption and access controls.",
      "Designed and developed scalable backend services using Core Java and the Spring Framework, ensuring robust performance for healthcare applications handling large volumes of patient data.",
     " Created responsive frontend applications using Angular and Bootstrap, leading to a 40% increase in user engagement among healthcare staff and patients.",
      "Implemented optimized database solutions using Oracle and MySQL, enhancing query performance and ensuring quick access to critical healthcare information.",
     "Developed unit and integration tests using JUnit and Mockito, ensuring high code quality and reliability of healthcare applications through rigorous testing protocols.",
      "Managed Continuous Integration/Continuous Deployment (CI/CD) pipelines using Jenkins, automating build and deployment processes to streamline updates and feature releases in healthcare software.",
      "Engaged in Agile/Scrum ceremonies, actively contributing to sprint planning, daily stand-ups and retrospectives to enhance team collaboration and project delivery in a fast-paced healthcare environment.",
      "Implemented caching strategies using Redis to improve application performance, resulting in faster data access and reduced load times for healthcare applications.",
      "Utilized Confluence to document technical designs, sprint retrospectives, and team knowledge bases, ensuring transparency and streamlined collaboration across cross-functional teams.",
      
    ],
    techStack: ["JAVA(Spring boot)", "MySQL", "Redis", "Jenkins", "Confluence","CI/CD","HIPPA","FHIR","EMR","Angular","Bootstrap"], 
  },



  {
    title: "Front-end Developer",
    company_name: "TATA CONSULTANCY SERVICES",
    client_name: "HDFC Bank",
    icon: TCS,
    iconBg: "#FFFFFF",
    date: "May 2019 - May 2022",
    points: [
      "Developed front-end UI screens of HDFC Bank's mobile app.",
      "Developed UI screens for UPI module in HDFC App, resulting in 20% faster payment processing for 2M+ users.",
      "Implemented native iOS methods to ensure app functionality on iOS devices, enabling features such as gestures and camera access during runtime.",
      "Developed QR code scanning capability and implemented deep linking functionality on Android, enabling seamless payment completion within the app.",
      "Implemented blocking functionality for fraud prevention, reducing fraudulent transactions by 15%.",
      
    ],
    techStack: ["Angular JS","Java(Spring boot)", "Native : Android - Java", "IOS - Objective-C"],
  },
 
  {
    title: "Front-end Developer",
    company_name: "TATA CONSULTANCY SERVICES",
    icon: TCS,
    client_name: "ICICI Bank",
    iconBg: "#FFFFFF",
    date: " May 2022 - Dec 2022",
    points: [
      "Credit cards- One can manage everything related to credit card using imobile application like managing cc limits, block or unlock, mange billing cycle", 
      "Credit card EMI : With this feature user able to convert their transactions of current cycle into emi based on the transaction type",
      "Loans: User can see all his loans in this section. Can check all the emi details, balance amount, tenure , interest certificate, welcome letter and also can pay emi using this application.",
    ],
    techStack: ["KnockoutJS","Python(Django)", "Native : Android - Java", "IOS - Swift"],
  },


  {
    title: "Master's Degree in Computer Science",
    company_name: "State University of New York at New Paltz",
    icon: SUNY,
    iconBg: "#FFFFFF",
    date: " Jan 2023- Dec 2024",
    points: [
      "Completed Master’s degree in Computer Science with a focus on All major topics of computer science.",
      "Built a deep learing model to predict song popularity based on lyrics and audio features.",
      "Enhanced coding efficiency by practicing diverse challenges, enabling me to write clean, optimized, and scalable code."

    ],
    techStack: ["JavaScript","Java","Tailwind CSS,","Figma","Deep Learning","Node.js","React.js"],
  },

  {
    title: "Full Stack Developer",
    company_name: "The Home Depot",
    icon: homedepot,
    client_name: "The Home Depot",
    iconBg: "#FFFFFF",
    date: " Jan 2024 - Current",
    points: [
      "Deployed scalable Spring Boot 3.x microservices for catalog, order management and customer reviews, integrating OAuth 2.0 and Spring Security for secure, role-based API access in a multi-tenant e-commerce platform.",
      "Built enterprise-grade components using Angular for admin dashboards and internal tools.",
      "Implemented server-side rendering (SSR) with Next.js to improve Time to First Byte (TTFB) and boost organic traffic, increasing Google Lighthouse SEO scores on key product and category pages by 28%.",
      "Developed high-performance Node.js middleware services using Express.js to aggregate and proxy third-party inventory APIs, reducing frontend load times by 30% and enabling real-time stock synchronization across 5+ vendor platforms.",
      "Engineered asynchronous event-driven architecture with Apache Kafka, decoupling inventory updates, order confirmation and shipment tracking across services, reducing inter-service latency by 40%.",
     "Developed pixel-perfect responsive UI using Tailwind CSS, aligning front-end components with Figma design specs and improving page load speed by 22% through code splitting and lazy loading.",
      "Integrated AWS Cognito with JWT-based authentication, enabling secure Single Sign-On (SSO), multi-factor authentication (MFA) and seamless user registration for active shoppers.",
      "Utilized Amazon API Gateway and AWS Lambda to of load and asynchronously handle marketing analytics, promotional campaign click-through tracking and A/B testing data ingestion without impacting core transactional performance.",
    ],
    techStack: ["JAVA(Spring boot)", "SSO", "AWS Cognito","Amazon API Gateway","AWS","Next.js","Tailwind CSS","Node.js"],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Music Popularity Forecasting",
    description:
      "Developed a predictive model to identify whether a song by a famous artist will become a hit based on features extracted from the Spotify API",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Spotify API",
        color: "pink-text-gradient",
      },
    ],
    image: Deep,
    source_code_link: "https://github.com/Luckylikithh/DeepLearning-Model",
  },
  {
    name: "CUBE",
    description:
      "CUBE is an innovative e-commerce platform that enhances online shopping with a virtual 3D fitting experience, Using body-scanning technology, users can create customizable avatars to visualize how clothes will fit their unique body shapes.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "marvel",
        color: "green-text-gradient",
      },
      
    ],
    image: CUBE,
    source_code_link: "https://github.com/Luckylikithh/VirtualtryonBetaprototype",
  },

];

export { services, technologies,technologies2, FE,experiences, testimonials, projects };
