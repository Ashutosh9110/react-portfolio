import posture from "../assets/posture.gif";
import weather from "../assets/weather.png";
import foodapp from "../assets/foodapp.jpg"
import pokemon from "../assets/pokemon.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in Python, C++, SQL || Front-End Technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and a bit of travelling`;

export const EXPERIENCES = [
  {
    date: "August 2023",
    role: "Internship",
    company: "STOCNERVE - EQUITY ANALYST",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: [],
  },
  {
    date: "September 2023",
    role: "Internship",
    company: "BOWLED.IO - BETA TESTER",
    description: `Finding and reporting bugs, suggesting creative game ideas. Consistently offering valuable feedback.`,
    technologies: [],
  },
  {
    year: "Feb 2015 - May 2021",
    role: "Management Trainee",
    company: "Genpact India",
    description: `Conducting sessions/feedback for the Team members to improve their performance.
    Collaborated with stakeholders in defining Quaterly target for the portofolio, project requirements and timelines.
    Showcased bi-weekly/monthly reports to overseas U.S. clients.`,
    technologies: ["Leadership", "Team Handling", "Interpersonal skills", "Project management"],
  },

];

export const PROJECTS = [
  {
    title: "Weather App",
    image: weather,
    description:
      "A sleek and modern Weather App that gives you real-time accurate and up-to-date weather information for any city worldwide. Visualize weather data trends such as temperature, humidity, and precipitation with Recharts.",
    technologies: ["TypeScript", "React", "Next.js", "ShadCN", "Recharts"],
    link: "https://weather-app-nblv-ashutoshs-projects-b91f7c39.vercel.app/"
  },
  {
    title: "Food-Recipe-App",
    image: foodapp,
    description:
      "A simple MERN stack Recipe application that displays different delicious recipes added by the users. It showcases a variety of recipes along with their descriptions, ingredients, and time it took to prepare the dish. Following these recipes will make you the Gordon Ramsay of your household. You just need to follow the instructions carefully and puff... A MAGNIFICIENT DISH IS READY TO GET SERVED",
    technologies: ["MERN stack", "jsonwebtoken", "bcrypt"],
    link: "https://food-recipee-app-beta.vercel.app/",
  },
  {
    title: "Pokémon React App",
    image: pokemon,
    description:
      "Explore your favourite Pokémon and discover their amazing abilities! Compare strengths to see which Pokémon reigns supreme.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://pokemon-app-one-blush.vercel.app/",
  },
  {
    title: "Real-time Human Pose Estimation in your browser",
    image: posture,
    description: "With PoseNet running on TensorFlow.js anyone with a decent webcam-equipped desktop or phone can experience this technology right from within a web browser.",
    technologies: [ "TensorFlow.js", "Posenet", "ML5.js", "P5.js"],
    link: "https://ashutosh9110.github.io/Real-time-Human-Pose-Estimation-in-your-browser/"
  }
];

export const CONTACT = {
  address: "New Delhi, Dwarka ",
  phoneNo: "+91 987 143 7696",
  email: "ashutoshadhikari@outlook.com",
};
