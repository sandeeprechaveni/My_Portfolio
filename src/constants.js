// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import RsquareLogo from './assets/company_logo/rsquare.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import MRDLogo from './assets/education_logo/MRDU.png';
import SRLogo from './assets/education_logo/SR_JR.png';
import ZPHSLogo from './assets/education_logo/ZPHS.png';

// Project Section Logo's
import martovaLogo from './assets/work_logo/martova.png';
import keeperLogo from './assets/work_logo/keeper.png';
import netflixLogo from './assets/work_logo/netflix.png';
import sentinelsLogo from './assets/work_logo/sentinels.png';
import tinDogLogo from './assets/work_logo/tinDog.png';
import simonLogo from './assets/work_logo/simon.png';
import bitcoinLogo from './assets/work_logo/bitcoin.png';
import imageEditorhLogo from './assets/work_logo/imgEditor.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: RsquareLogo,
      role: "Jr web Developer",
      company: "R square educational services",
      date: "May 2022 - July 2022",
      desc: "Developed dynamic and scalable web applications using the PERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Bootstrap",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: MRDLogo,
      school: "MRD University, Hyderabad",
      date: "Sept 2022 - July 2026",
      grade: "8.66 CGPA",
      desc: "I am currently persuing my bachelor's degreer (B TECH) in Computer Science and engineering from MRD University, Hyderabad. During my time at MRD, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MRD University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B TECH",
    },
    {
      id: 1,
      img: SRLogo,
      school: "SR jr College, karimnagar",
      date: "Sept 2020 - Aug 2022",
      grade: "91.6%",
      desc: "I completed my Intermediate from SR jr College, Karimnagar. I studied with dedication, building a strong foundation in core academic subjects. During this time, I developed effective study habits and improved my problem-solving and analytical skills.",
      degree: "Intermediate",
    },
    {
      id: 2,
      img: ZPHSLogo,
      school: "Zilla parishad high school, Durshed",
      date: "Apr 2019 - March 2020",
      grade: "100%",
      desc: "I completed my class 10 education from Zilla parishad high School, Durshed,I completed my schooling with enthusiasm, actively participating in both academics and extracurricular activities. This phase helped me develop discipline, curiosity, and a strong work ethic.",
      degree: "10 - Schooling",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Martova",
      description:
        "A powerful and user-friendly full-stack e-commerce web application inspired by Flipkart, utilizing React, Node.js,Express, and PostgreSQL. Implemented product management features, including the ability to add, update, and delete products through RESTful APIs. Integrated rate-limiting and basic bot detection mechanisms to enhance security and prevent abuse.",
      image: martovaLogo,
      tags: ["HTML", "CSS", "React JS", "API","postgres","nodeJs","express"],
      github: "https://github.com/sandeeprechaveni/Martova",
      webapp: "#",
    },
    {
      id: 1,
      title: "Keeper App",
      description:
        "A note-taking web application inspired by Google Keep, where users can create, edit, and organize personal notes. The app utilizes React.js for the frontend, providing a smooth, dynamic,and responsive user interface.The backend is powered by Motoko, a smart contract language for building decentralized applications on the DFINITY Internet Computer, ensuring secure and scalable storage of notes.",
      image: keeperLogo,
      tags: ["React JS", "Node.js", "motoko", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sandeeprechaveni/Keeper-app",
      webapp: "#",
    },
    {
      id: 2,
      title: "Netflix clone",
      description:
        "A fully functional Netflix clone designed to replicate the UI/UX of the popular streaming platform. The project allows users to browse a variety of movies and TV shows, complete with a dynamic user interface and seamless interaction. Built using HTML, CSS, and JavaScript, Demonstrates strong skills in interactive UI development and responsive design.",
      image: netflixLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sandeeprechaveni/netflix-clone",
      webapp: "#",
    },
    {
      id: 3,
      title: "Sentinels",
      description:
        "Sentinels is a web-based application designed to detect and flag potentially fake or suspicious social media accounts. Built using HTML, CSS, and Python, this tool analyzes user data and behavioral patterns to determine the authenticity of a profile.",
      image: sentinelsLogo,
      tags: ["html", "css", "bootstrap", "python"],
      github: "https://github.com/sandeeprechaveni/Sentinels",
      webapp: "#",
    },
    {
      id: 4,
      title: "Tin Dog A dog rental platform",
      description:
        "TinDog is a modern and playful web application that allows users to browse, choose, and rent their desired dogs for companionship, events, or casual outings. Inspired by popular dating-style apps, TinDog presents an intuitive interface where users can explore various dog profiles, view details, and make rental bookings with ease.",
      image: tinDogLogo,
      tags: [ "HTML", "CSS", "Bootstrap" ],
      github: "https://github.com/sandeeprechaveni/TinDog",
      webapp: "#",
    },
    {
      id: 5,
      title: "Simon game",
      description:
        "The Simon Game is a classic memory-based game that challenges users to replicate an increasingly long sequence of colors and sounds. This project is a web-based version of the game, built using HTML, CSS, JavaScript, and jQuery.",
      image: simonLogo,
      tags: ["HTML", "CSS", "JavaScript", "jquery"],
      github: "https://github.com/sandeeprechaveni/Simon-game",
      webapp: "#",
    },
    {
      id: 6,
      title: "Bitcoin price predictor",
      description:
        "The Bitcoin Price Predictor is a desktop application built using Python and Tkinter that forecasts the future price of Bitcoin (BTC) based on historical data. The application provides a user-friendly graphical interface where users can view predictions and understand price trends.",
      image: bitcoinLogo,
      tags: ["Tkinter", "Python"],
      github: "https://github.com/sandeeprechaveni/Bitcoin-price-prediction",
      webapp: "#",
    },
    {
      id: 7,
      title: "Image Editor App",
      description:
        "The Image Editor is a browser-based application that allows users to edit images directly on the web without needing to install any software. Built using HTML, CSS, and JavaScript, the tool provides a simple and interactive interface to apply various edits such as filters, brightness/contrast adjustments, rotation, cropping, and more.",
      image: imageEditorhLogo,
      tags: [ "Html", "CSS", "Javascript"],
      github: "https://github.com/sandeeprechaveni/Image-editor/",
      webapp: "#",
    },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  