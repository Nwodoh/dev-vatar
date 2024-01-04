import logo from "./logo.svg";
import "./App.css";
import "./index.css";

const levelsEmoji = {
  advanced: "💪",
  intermediate: "👍",
  beginner: "👶",
};

function App() {
  const dev = {
    photoUrl: "dev.jpg",
    name: "Nwodoh Daniel",
    about:
      "Full-stack web developer and teacher. When not coding or building a project, I like to play music and read books, to eat, or to just enjoy the Nigerian sun at the bus-stop.",
    skills: [
      {
        title: "HTML+CSS",
        level: "advanced",
        theme: "Blue",
      },
      {
        title: "JavaScipt",
        level: "advanced",
        theme: "Yellow",
      },
      {
        title: "Web Design",
        level: "advanced",
        theme: "Olive",
      },
      {
        title: "Git and GitHub",
        level: "intermediate",
        theme: "pink",
      },
      {
        title: "React",
        level: "advanced",
        theme: "Aqua",
      },
      {
        title: "Svelte",
        level: "beginner",
        theme: "Red",
      },
    ],
  };
  const { name, photoUrl, about, skills } = dev;

  return (
    <div className="card">
      <Avatar name={name} photoUrl={photoUrl} />
      <Details name={name} about={about} skills={skills} />
    </div>
  );
}

function Avatar(props) {
  const { name, photoUrl } = props;
  return <img src={photoUrl} alt={name} className="avatar" />;
}

function Details(props) {
  return (
    <div className="data">
      <NameHeading childProps={props} />
      <About childProps={props} />
      <SkillList skills={props.skills} />
    </div>
  );
}

function NameHeading(props) {
  const { name } = props.childProps;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

function About(props) {
  const { about } = props.childProps;
  return <div>{about}</div>;
}

function SkillList(props) {
  const { skills } = props;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill(props) {
  const { skill } = props;
  return (
    <div className="skill" style={{ backgroundColor: skill.theme }}>
      <div>{skill.title + ` ${levelsEmoji[skill.level]}`}</div>
    </div>
  );
}

export default App;
