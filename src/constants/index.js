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
    company_name: "HCL Technologies",
    client_name: "Healthcare",
    icon: zensar,
    iconBg: "#FFFFFF",
    date: "Jan 2018 - Apr 2019",
    points: [
     "Configured and supported Cisco and Juniper switching and routing platforms, ensuring stable and high-performance connectivity for retail business operations.",
"Enhanced system scalability and functionality by building RESTful APIs and backend services with Java and Spring Framework, ensuring seamless integration with front-end applications.",
"Boosted application performance by 30% and increased user engagement through the development of cross-platform applications using Java and modern JavaScript frameworks.",
"Improved deployment efficiency by 40% and optimized resource utilization by introducing Docker-based containerization into the CI/CD pipeline.",
"Strengthened application reliability by implementing unit and integration testing with JUnit and Mockito, achieving over 85% test coverage and reducing production bugs.",
"Improved monitoring and system observability by integrating ELK Stack (Elasticsearch, Logstash, Kibana), enabling real-time tracking of application performance and faster issue resolution.",
"Increased team productivity by 20% by actively contributing to Agile workflows sprint planning, Jira task management, daily stand-ups, and retrospectives.",
"Elevated database performance by 25% through optimized schema design, advanced indexing techniques, and efficient data modeling across MySQL and MongoDB environments.",
"Modernized the data pipeline by replacing a legacy framework with a Kafka-powered messaging system, enabling real-time data streaming and improving processing efficiency by 50%."
      
    ],
    techStack: ["JAVA(Spring boot)", "MySQL", "Redis", "Jenkins", "Confluence","CI/CD","Angular","Bootstrap", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Kafka","Docker","AWS"], 
  },



  {
    title: "Front-end Developer",
    company_name: "TATA CONSULTANCY SERVICES",
    client_name: "HDFC Bank",
    icon: TCS,
    iconBg: "#FFFFFF",
    date: "May 2019 - Dec 2022",
    points: [
" Designed and developed responsive front-end user interfaces for HDFC Bank's mobile application using Angular and HTML5, enhancing user engagement by 25%.",
"Developed dynamic forms and dashboards with Angular Reactive Forms and RxJS, ensuring smooth state management and real-time updates.",
"Engineered the UPI module for the HDFC App, optimizing payment processing speed by 20% for over 2 million users through efficient API integration and streamlined workflows.",
"Engineered scalable microservices using Spring Boot and Hibernate, handling high-volume financial transactions with optimized ORM mappings and connection pooling.",
"Built QR code scanning capabilities and implemented deep linking on Android using Java, ensuring smooth in-app payment completion with a 15% reduction in transaction drop-offs.",
"Developed fraud prevention mechanisms by implementing real-time blocking functionality, reducing fraudulent transactions by 15% through advanced algorithmic checks.",
"Delivered a comprehensive credit card management module within the HDFC app, allowing users to manage credit limits, block/unblock cards and modify billing cycles via secure RESTful APIs.",
"Created a dynamic EMI conversion feature for eligible credit card transactions based on transaction type, increasing user adoption of flexible repayment options by 30%.",
"Architected a centralized loan dashboard leveraging Spring Boot and Hibernate, enabling users to view active loans, EMI schedules, outstanding balances, loan tenure and download essential documents such as interest certificates and welcome letters directly from the app.",
"Worked in Agile Scrum teams, delivering Java back-end and Angular front-end features in 2-week sprints with 90% on-time delivery."
      
    ],
    techStack: ["Angular JS","Java(Spring boot)", "Native : Android - Java"],
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
    company_name: "Morgan Stanley",
    icon: homedepot,
    client_name: "Morgan Stanley",
    iconBg: "#FFFFFF",
    date: " Jan 2024 - Current",
    points: [
      "Built modular and scalable microservices with Spring Boot, Java, and Spring Cloud (Eureka, Config Server, API Gateway) to streamline digital loan origination, KYC checks, and payment workflows.",
"Increased financial transaction API throughput by 42% by implementing GraphQL with Next.js SSR, resulting in faster rendering and reduced load times on high-traffic B2B dashboards.",
"Achieved flawless PCI DSS and SOX audit compliance by deploying Spring Security mechanisms—OAuth 2.0, RBAC, and tokenization—to safeguard PII and transaction metadata.",
"Designed and deployed responsive portfolio analytics dashboards using React.js, Redux Toolkit, and Tailwind CSS, providing auditors and compliance teams with real-time insights.",
"Developed backward-compatible RESTful and SOAP APIs for ACH, SEPA, and SWIFT tracking, ensuring seamless integration with legacy COBOL-based financial systems.",
"Automated end-to-end DevOps pipelines with Jenkins, GitHub Actions, Docker, and Helm; deployed microservices to AWS EKS, ensuring high availability in trading environments.",
"Enforced secure authentication and authorization with JWT, OAuth 2.0, and OIDC for sensitive banking applications, including loan records, mortgage systems, and credit scoring.",
"Integrated LLM-powered intelligent assistants with AI/ML algorithms (XGBoost, Random Forest) to automate loan application anomaly detection, generate real-time creditworthiness insights, and support auditors with natural language query processing across compliance datasets.",
"Built fraud detection dashboards in Splunk by integrating AML rule sets with transactional logs, reducing fraud identification times by 36%.",
"Ensured 90% test coverage across unit, integration, and contract testing using JUnit 5, Mockito, and Rest Assured, with code quality enforced via JaCoCo and SonarQube.",
"Leveraged Oracle 19c, MongoDB, and Redis with Hibernate JPA and Spring Data to enable real-time credit risk analytics and low-latency caching for high-volume financial data.",
    ],
    techStack: ["JAVA(Spring boot)", "SSO", "AWS Cognito","Amazon API Gateway","AWS","Next.js","Tailwind CSS","Node.js","React.js"],
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
