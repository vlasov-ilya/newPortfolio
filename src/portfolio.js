// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to true to use active SVG 
};

const greeting = {
  username: "Ilya Vlasov",
  title: "Hi all, I'm Ilya",
  subTitle: emoji(
    "A team player with knowledge of HTML, CSS and JavaScript and prior experience in the service industry. Calm under pressure, quick learner with the goal of customer satisfaction."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1m27T1hMv7RsvQBUMu7qP8-xrZsp5zZgL/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vlasov-ilya",
  linkedin: "https://www.linkedin.com/in/ilya-vlasov/",
  gmail: "ilyavlasov93@gmail.com",
  instagram: 'https://www.instagram.com/fox20073/',
  facebook: "https://www.facebook.com/IVV5793",
  // gitlab: "https://gitlab.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/",
  // twitter: 'https://twitter.com/',
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "JUNIOR FULL STACK WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK, IMPROVE SKILLS, AND BECOME BETTER  ",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase and AWS "
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CareeFoundry Boot Camp",
      logo: require("./assets/images/CF.png"),
      subHeader: "Full-Stack Web Development Program",
      duration: "September 2020 - January 2021",
      desc: "MERN and MEAN Web Development",
    },
    {
      schoolName: "Le Cordon Bleu College Of Culinary Art",
      logo: require("./assets/images/LCB.jpg"),
      subHeader: "Bachelor of restaurant hospitality and management",
      duration: "September 2013 - July 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    }
  ]
};

// My top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", 
      progressPercentage: "50%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "45%"
    },
    {
      Stack: "Programming",
      progressPercentage: "35%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to false to hide workExperiences Section
  experience: [
    {
      role: "FULL STACK WEB DEVELOPMENT TUTOR",
      company: "Westcliff University",
      companylogo: require("./assets/images/westcliff-logo.png"),
      date: "December 2020 – Present",
      descBullets: [
        "Created lesson materials, visuals, and digital presentations to supplement lesson plans",
        "Run office hours for students over Zoom",
        "Helping student with existing projects in a friendly atmosphere"
      ]
    },
    {
      role: "SOFTWARE ENGINEER INTERN",
      company: "ExporAstay",
      companylogo: require("./assets/images/explorastay.png"),
      date: "November 2020 – December 2020",
      descBullets: [
        "Upgrade website search page by using map clustering",
        "Suggested ideas for improving UI",
        "Managed time-sensitive updates, including content changes",
        "Collaborated with team members to implement new feature developments",
        "Worked closely with CTO when needed "
      ]
    },
    {
      role: "ASSISTANT GENERAL MANAGER",
      company: "Lexx Restaurant",
      companylogo: require("./assets/images/Lexx.jpg"),
      date: "May 2018 – December 2019",
      descBullets: [
        "Maintain and develop interpersonal communication with clientele (customer relations)",
        "Managed all aspects of restaurant operations achieving high level of customer satisfaction",
        "Effectively resolved various internal and customer facing issues and conflicts",
        "Motivated and led team members to work together to achieve targets",
        "Creating a positive workplace atmosphere"
      ]
    }
  ]
};

// /* Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.bf7810e05d3e5b2543a84c85984e1f9a29d16b60,
  githubUserName: "vlasov-ilya",
  showGithubProfile: "true", 
  display: false 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   projectName: "Saayahealth",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "fa"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters !",

  achievementsCards: [
    {
      title: "StackSkills Certifications ",
      subtitle:
        "stackskills.com certifications for completing the program",
      image: require("./assets/images/SS.png"),
      footerLink: [
        {
          name: "Certification",
          image:
            "../src/assets/images/certificate-of-completion-for-beginners-r-programming-data-science-and-machine-learning.pdf"
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
  ],
  display: false // Set true to show this section, defaults to false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Contact me at anytime!",
  number: "(617) 599 8604",
  email_address: "ilyavlasov93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", 
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
