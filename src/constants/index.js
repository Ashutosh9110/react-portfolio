import posture from "../assets/projects/posture.gif";
import dobby from "../assets/projects/dobby.gif";
import MovieRecommender from "../assets/projects/Movie-Recommender.png";
import whatsapp from "../assets/projects/whatsapp.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in Python, C++, SQL || Front-End Technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and a bit of travelling`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Internship",
    company: "STOCNERVE - EQUITY ANALYST",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Internship",
    company: "BOWLED.IO - BETA TESTER",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2015-2021",
    role: "Management Trainee",
    company: "Genpact India",
    description: `Led a team in developing and maintained their performance by conducting sessions/feedbacks for the Team Members.
  Collaborated with stakeholders in defining Quaterly target for the portofolio, project requirements and timelines.`,
    technologies: ["Leadership", "Team Handling", "Interpersonal skills", "Project management"],
  },

];

export const PROJECTS = [
  {
    title: "Real-time Human Pose Estimation in your browser",
    image: posture,
    description:
      "With PoseNet running on TensorFlow.js anyone with a decent webcam-equipped desktop or phone can experience this technology right from within a web browser.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Chatbot_Dobby",
    image: dobby,
    description:
      "Dobby is looking for his master Lucius Malfoy to get his hard-earned gold coins meanwhile he is happy to assist anyone with currency conversion and with some witty replies..",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Movie-Recommender",
    image: MovieRecommender,
    description:
      "Movie-Recommender using Text Vectorization and Cosine Similarity.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Whatsapp Chat Analyzer",
    image: whatsapp,
    description:
      "An NLP-based project where you can analyze any WhatsApp chat. You just have to export the chat and upload it on the website. And you will get a detailed analysis of the chat (You can either include individual or group chats). You can get the busiest month, most active user, most words used and most emojis used in the chat..",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "New Delhi, Dwarka ",
  phoneNo: "+91 987 143 7696",
  email: "ashutoshadhikari@outlook.com",
};
