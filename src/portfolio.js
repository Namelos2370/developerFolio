/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Namelos2370",
  title: "Hi, I'm a Full-Stack Developer",
  subTitle: emoji(
    "A passionate Full-Stack Developer 🚀 building web and mobile applications with JavaScript / TypeScript / React / Next.js / Node.js / Python / Django and modern frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Namelos2370",
  // linkedin: "https://www.linkedin.com/in/your-profile/",
  // gmail: "your-email@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER WHO LOVES BUILDING MODERN WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build responsive and interactive Front-End applications with React, Next.js and Astro"
    ),
    emoji(
      "⚡ Develop robust Back-End APIs with Node.js, Django REST Framework and JWT authentication"
    ),
    emoji(
      "⚡ Deploy full-stack applications on Vercel with Docker and cloud services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set to true and fill in your school details
  schools: [
    {
      schoolName: "Your University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2023 - Present",
      desc: "Studying Computer Science with a focus on data structures, algorithms and software engineering.",
      descBullets: [
        "INF231 - Data Structures",
        "INF231 - Image Processing in C"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / UI", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend / API",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (C / Python)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE BUILT AND DEPLOYED",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Blue Energy V6",
      projectDesc:
        "E-commerce platform with admin panel and shopping cart, built with Next.js and TypeScript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blue-energy-v6.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Namelos2370/blue-energy-v6"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Eglise Connect",
      projectDesc:
        "Full-stack community connection web application with frontend and backend architecture, deployed on Vercel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eglise-connect-final.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Namelos2370/eglise-connect-final"
        }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "Newsletter SaaS",
      projectDesc:
        "Newsletter subscription SaaS platform built with Node.js, featuring user management and server-side logic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://newsletter-saas-dusky.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Namelos2370/newsletter-saas"
        }
      ]
    },
    {
      image: require("./assets/images/codeInLogo.webp"),
      projectName: "Reisetur",
      projectDesc:
        "Candidate management platform with Django REST Framework, React frontend, JWT authentication, file uploads and WhatsApp API integration.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Namelos2370/Reisetur"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? Feel free to reach out!",
  number: "", // Add your phone number here
  email_address: "" // Add your email address here
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
