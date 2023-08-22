import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my Experience!</EduIntro>
      {eduBg.map(({ title, desc ,tech }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="desc">{tech}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "1. FrontEnd Developer Intern At FundsIndia ------------------------------------------ Jan 2023 - April 2023",
    desc: "In this internship, I have Developed the calculator for Central Government Schemes and five web calculators, which are hosted on the Funds India official website. ",
    tech:"Technology Used : React JS , Next JS , Tailwind CSS"
  }, 
  {
    title: "2. MERN DEVELOPER INTERN ------------------------------------------------------------- Jun 2023 - Jul 2023",
    desc: "I have done my intern as a MERN stack developer. In this intern I have gained lots of practical experience in MongoDB, ExpressJS, NodeJS, ReactJS. The intership was offered by The Better Tomorrow training institute with the duration of 15 days.",
    tech:"Technology Used : MongoDB , ExpressJS , NodeJS , ReactJS."
  },
  {
    title: "3. OSINT at KCFS --------------------------------------------------------------------- Aug 2023 - Present ",
    desc: "Open Source Intelligence intern at Kriyavan Cyber Forensics , plays a crucial role in cybersecurity.It involves gathering information from publicly available sources to understand potential threats, vulnerabilities, and risks to an organization's digital infrastructure. I'm eager to grow my knowledge in the field of the cyber forensics and improving security",
    tech:"Technology Used : Tools , Website"
  },
];

export default Experience;
