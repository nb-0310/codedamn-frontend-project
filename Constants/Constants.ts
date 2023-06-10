const abcity: string = require("../Assets/Projects/abcity.png") as string;
const weather: string = require("../Assets/Projects/weather.png") as string;
const pathfinding: string = require("../Assets/Projects/pathfinding.png") as string;
const portfolio: string = require("../Assets/Projects/portfolio.png") as string;

const about: string =
  "Minato Namikaze, also known as the Yellow Flash, is a legendary character from the Naruto series created by Masashi Kishimoto. He was the Fourth Hokage of the Hidden Leaf Village and a highly skilled ninja. Minato possessed incredible speed and was renowned for his ability to teleport using the Flying Thunder God Technique. With his spiky blond hair and bright blue eyes, Minato was known for his calm and collected demeanor. Minato's most notable achievement was sealing the Nine-Tailed Fox within his newborn son, Naruto Uzumaki, in order to protect the village. This selfless act ultimately led to his untimely death during an attack by the masked villain, Obito Uchiha. Despite his tragic fate, Minato's legacy lived on, as he became a source of inspiration for many young ninjas, including his son Naruto, who inherited his determination and unwavering spirit. Throughout the series, Minato's intelligence, strategic thinking, and mastery of various jutsu made him a formidable force on the battlefield. He was known for his signature move, the Rasengan, a powerful spinning technique that required precise chakra control. Minato's skills and reputation as the fastest ninja in history earned him the respect of both allies and enemies alike. Minato Namikaze remains an iconic character in the Naruto universe, symbolizing sacrifice, bravery, and the indomitable spirit of a true hero. His legacy continues to shape the lives of those who follow in his footsteps, reminding them of the power of love, loyalty, and the strength to protect what is dear to them.";

export const profile: {
  name: string;
  about: string;
  dob: string;
  gender: string;
  prof: string;
  followers: boolean;
  xp: boolean;
  achievements: boolean;
  img: string;
  cover: string;
} = {
  name: "Nirzar Bhatt",
  about: about,
  dob: "2000-10-03",
  gender: "Male",
  prof: "Frontend Developer",
  followers: true,
  xp: true,
  achievements: true,
  img: "",
  cover: "",
};

export const socials: {
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  dribbble: string;
  behance: string;
} = {
  github: "https://github.com/nb-0310",
  linkedin: "https://www.linkedin.com/in/nirzar-bhatt-30a644214",
  facebook: "https://www.facebook.com/exampleuser",
  instagram: "https://www.instagram.com/nb_0310",
  dribbble: "https://dribbble.com/exampleuser",
  behance: "https://www.behance.net/exampleuser",
};

export const playgrounds: {
  title: string;
  tech: string;
}[] = [
  {
    title: "Playground Title 1",
    tech: "HTML/CSS",
  },
  {
    title: "Playground Title 2",
    tech: "Javascript",
  },
  {
    title: "Playground Title 3",
    tech: "React",
  },
  {
    title: "Playground Title 4",
    tech: "Next JS",
  },
];

export const projects: {
  title: string;
  demo: string;
  tech: string[];
  img: string;
  contri: string[];
}[] = [
  {
    title: "Personal Portfolio Website",
    demo: "https://nirzarbhatt.netlify.app/",
    tech: ["React", "Next JS"],
    img: portfolio,
    contri: ["Nirzar"],
  },
  {
    title: "AbCity Gym",
    demo: "https://ab-city-gym-website.vercel.app/",
    tech: ["React", "HTML/CSS"],
    img: abcity,
    contri: ["Nirzar"],
  },
  {
    title: "Pathfinding Visualizer",
    demo: "https://nb-0310.github.io/Pathfinding-Visualizer/",
    tech: ["HTML/CSS", "Javascript"],
    img: pathfinding,
    contri: ["Nirzar"],
  },
  {
    title: "Weather App",
    demo: "https://reacttailwindweatherapp.netlify.app/",
    tech: ["React", "HTML/CSS"],
    img: weather,
    contri: ["Nirzar"],
  },
];

export const experience: {
  title: string;
  company: string;
  desc: string;
  start: string;
  end: string;
  tech: string[];
}[] = [
  {
    title: "Software Developer - Frontend",
    company: "Google",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impeddolorem placeat odio dolores blanditiis at ut voluptatibus rerum est quae modi recusandae ex deserunt dolorum debitis, vitae, fugit quas dicta.",
    start: "March, 2022",
    end: "Present",
    tech: ["NextJS", "Typescript", "Tailwind", "React"],
  },
  {
    title: "Intern - Fullstack",
    company: "Meta",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impeddolorem placeat odio dolores blanditiis at ut voluptatibus rerum est quae modi recusandae ex deserunt dolorum debitis, vitae, fugit quas dicta.",
    start: "January, 2022",
    end: "March, 2022",
    tech: ["Angular", "NodeJS", "MongoDB", "Sass", "ExpressJS"],
  },
];

export const education: {
  name: string;
  degree: string;
  sub: string;
  cgpa: string;
  start: string;
  end: string;
  desc: string;
}[] = [
  {
    name: "Harvard University",
    degree: "PHD",
    sub: "Quantum Physics",
    cgpa: "10.0",
    start: "June 2020",
    end: "April 2022",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae assumenda dolor deserunt voluptatum fuga nihil minima ex odit, architecto culpa quod ea aliquid voluptatibus sapiente totam nesciunt fugit unde.",
  },
  {
    name: "Oxford University",
    degree: "MBA",
    sub: "Finance & Entrepreunarship",
    cgpa: "10.0",
    start: "May 2018",
    end: "April 2020",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae assumenda dolor deserunt voluptatum fuga nihil minima ex odit, architecto culpa quod ea aliquid voluptatibus sapiente totam nesciunt fugit unde.",
  },
  {
    name: "Massechussets Institute of Technology",
    degree: "BS",
    sub: "Computer Science",
    cgpa: "9.0",
    start: "May 2015",
    end: "April 2018",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae assumenda dolor deserunt voluptatum fuga nihil minima ex odit, architecto culpa quod ea aliquid voluptatibus sapiente totam nesciunt fugit unde.",
  },
];

export const skills: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next JS",
];
