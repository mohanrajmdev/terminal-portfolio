import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my Skills!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "1. Programming Languages ",
    desc: "C | Java | Python | C++ | Solidity",
  }, 
  {
    title: "2. Core Concepts   ",
    desc: "DSA | OOPS | DBMS | Operating System | Software Engineering",
  },
  {
    title: "3. Databases    ",
    desc: "MySQL | MongoDB | Firebase ",
  },
  {
    title: "4. Web Technologies",
    desc: "HTML | CSS | JavaScript | TailwindCSS | Boostrap | Jquery",
  },
  {
    title: "5. Other tools ",
    desc: "VS - Code | GitHub | Pycharm | Canva | Remix IDE | Kali Linux",
  },
];

export default Skills;
