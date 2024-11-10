import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,

  CertificateType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Athul Nediyedath",
  title: "Hi all, I'm Athul",
  description:
    "I am a Data Analyst and I am eager to bring my analytical skills and enthusiasm for data to the real world. I have a solid foundation in data analysis, statistical methods, and SQL, and I am driven by a passion for turning raw data into meaningful insights.",
  resumeLink: "https://drive.google.com/file/d/1yUXFQJeFaIg8hWz1VB70gw1FdBGLfGkR/view?usp=sharing",
  
};

export const openSource = {
  githubUserName: "athulnediyedath",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "athulnediyedath@gmail.com",
  linkedin: "https://www.linkedin.com/in/athul-nediyedath-746a78211",
  github: "https://github.com/athulnediyedath",
  //instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://x.com/AthulS2025',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Data Enthusiast WHO WANTS TO EXPLORE data world and real life problems",
  data: [
    {
      title: "Data Analyst",
      lottieAnimationFile: "/lottie/Data Analyst.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Visualizing DATA through various visualizing techniques"),
        emoji("⚡ Accelerating Data Analysis through PYTHON and SQL"),
        emoji("⚡ Deploying data analytics model in HEROKU and FLASK"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "SQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Database",
          iconifyTag: "vscode-icons:file-type-sql",
        },
        {
          skillName: "Tableau",
          iconifyTag: "logos:tableau",
        },
        {
          skillName: "MS-Excel",
          iconifyTag: "file-icons:microsoft-excel",
        },
        {
          skillName: "R",
          iconifyTag: "vscode-icons:file-type-rproj",
        },
        {
          skillName: "Matplotlib",
          iconifyTag: "logos:matplotlib",
        },
        {
          skillName: "NumPy",
          iconifyTag: "vscode-icons:file-type-numpy",
        },
        {
          skillName: "Pandas",
          iconifyTag: "devicon:pandas-wordmark",
        },
        {
          skillName: "Seaborn",
          iconifyTag: "logos:seaborn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji('⚡ Performing AWS Cloud services like Amazon S3 and many more'),
        emoji('⚡ Deployment of various analytical models and applications through this cloud-based services'),
        ],
      softwareSkills: [
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
      ],
    },
    {
      title: "iOS Development",
      lottieAnimationFile: "/lottie/iOS_developer.json", // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Developing iOS apps using Swift, focusing on performance and safety.'),
        emoji('⚡ Skilled in Xcode, Apples IDE for coding, testing, and deploying apps.'),
        emoji('⚡ Deployment of various iOS applications through Firebase and many more cloud-services'),
        ],
      softwareSkills: [
        {
          skillName: "Swift",
          iconifyTag: "logos:swift",
        },
        {
          skillName: "XCode",
          iconifyTag: "devicon:xcode",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Data Visualization", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Data Cleaning",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "Story Telling",
    progressPercentage: "95",
  },
  {
    Stack: "Statistics",
    progressPercentage: "95",
  },
  {
    Stack: "iOS Development",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Mumbai",
    subHeader: "Bachelor of Engineering in Computer Science Engg.(AI&ML)",
    duration: "December 2020 - May 2024",
    desc: "",
    grade: "Distinction",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Python Developer Intern",
    company: "CodeClause",
    companyLogo: "/img/icons/common/codeclause_logo.png",
    date: "July 2023 - August 2023",
    desc: "During my Python Development Internship, I worked on developing a URL shortener and an interactive alarm clock. In the URL shortener project, I gained experience handling HTTP requests, URL encoding, and managing data using file storage or databases to improve the user experience. For the alarm clock, I built a tool that allowed users to set alarms and trigger them using Python's time modules, and I explored concepts like threading for non-blocking operations. These projects helped me enhance my Python programming skills, familiarize myself with libraries like datetime, requests, and tkinter, and improve my ability to manage and complete projects from start to finish.",
  },
  {
    role: "Machine Learning Intern",
    company: "iNeuron",
    companyLogo: "/img/icons/common/ineuron_logo.png",
    date: "August 2023 - September 2023",
    desc: "During my Machine Learning Internship, I worked on a project involving Big Mart sales data prediction. I performed data cleaning to ensure the dataset was accurate and ready for analysis, followed by data visualization to identify patterns and insights. After building and training the prediction model, I successfully deployed the solution using Flask, allowing for real-time predictions. Through this project, I strengthened my skills in data preprocessing, machine learning model development, and web deployment. Additionally, I gained hands-on experience with libraries like Pandas, Matplotlib, and Flask, and learned how to integrate machine learning models into web applications.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: "Full Stack Developer",
  //   company: "ZRTechnologies",
  //   companyLogo: "/img/icons/common/zrtech.jpeg",
  //   date: "Aug 2022 - Jun 2023",
  //   desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  // },
  // {
  //   role: "Backend Developer",
  //   company: "Bleed-AI",
  //   companyLogo: "/img/icons/common/bleedAI.jpg",
  //   date: "Sept 2021 - Oct 2021",
  //   desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  // },
];

export const Certificates: CertificateType[] = [
  {
    name:"Introduction to iOS Mobile App Development",
    img:"/img/icons/common/Meta_certificate.jpg",
    // des:"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elit"
    link:"/img/icons/common/Meta_certificate.jpg"
  },
  {
    name:"Leadership Skills",
    img:"/img/icons/common/Leadership_certificate.jpg",
    // des:"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elit"
    link:"/img/icons/common/Leadership_certificate.jpg"
  },
  {
    name:"R Essentials",
    img:"img/icons/common/R_Essentials_Certificate.jpg",
    // des:"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elit"
    link:"img/icons/common/R_Essentials_Certificate.jpg"
  },
  {
    name:"Introduction to Cloud Computing",
    img:"/img/icons/common/Cloud_Computing_Certificate.jpg",
    // des:"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elitLorem ipsum dolor sit amet, consectetur adipdfgiscing elit"
    link:"/img/icons/common/Cloud_Computing_Certificate.jpg"
  },
]

export const projects: ProjectType[] = [
  {
    name: "iOS Chat Application",
    desc: "iOS Chatting platform also known as 'CSERE' built with SWIFT UI and Google FIREBASE for backend purpose.",
    github: "https://github.com/athulnediyedath/IOS-Chat-Application",
    //link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Food Delivery Application",
    desc: "An iOS powered Ecommerce platform also known as 'FUDZEE' built with FLUTTER and LARAVEL for backend purpose.",
    github: "https://github.com/athulnediyedath/Food_Delivery_App",
  },
  {
    name: "Health Care Application",
    desc: "An iOS powered Health Care platform built with SWIFT UI and Google FIREBASE for backend purpose and REST-API is also used here to fetch data.",
    github: "https://github.com/athulnediyedath/HealthCareApplication",
  },
  {
    name: "Store Sales Prediction",
    desc: "An Machine Learning model that predicts the sales of a Store built with FLASK as a deploying platform.",
    github: "https://github.com/athulnediyedath/StoreSalesPrediction",
  },
  {
    name: "Airbnb",
    desc: "An Airbnb project powered by Tableau analyzed a dashboard for the perfect booking of a hotel.",
    github: "https://github.com/athulnediyedath/Airbnb",
  },
  {
    name: "Music Store Analysis",
    desc: "An Music Platform model that analyze the database built with POSTGRESQL and PgAdmin4.",
    github: "https://github.com/athulnediyedath/Music-Store-Analysis",
  },
  {
    name: "Portfolio",
    desc: "My Personal PORTFOLIO built with REACT.JS and NEXT.JS BOOTSTRAP.",
    github: "https://github.com/athulnediyedath/Portfolio",
  },
];



// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Athul Nediyedath",
  description: greetings.description,
  author: "Athul Nediyedath",
  //image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://athul04.netlify.app/",
  keywords: [
    "Athul",
    "Athul Nediyedath",
    "@athulnediyedath",
    "athul-nediyedath-746a78211",
    "Portfolio",
    "Athul Portfolio ",
    "Athul Nediyedath Portfolio",
  ],
};
