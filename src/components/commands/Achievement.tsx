import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Achievement: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my Achievements!</EduIntro>
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
    title: "1. MINI PROJECT EXPO-2023 WINNER ",
    desc: "We as a team developed a document validation software using blockchain technology and also got the first prize for the same in Mini Project Expo-2023.",
  }, 
  {
    title: "2. PITCH-FEST 2023 FINALIST  ",
    desc: "Our team got selected as a finalist for Pitch Fest-2023. There are totally 204 teams participated in this hackathon and Our team is one among top 10 teams.",
  },
  {
    title: "3. CTF CHALLENGE TOP-3    ",
    desc: "We as a team participated in 12 hours non stop Capture The Flag(CFT) challenge which was conducted by Saptang Labs. And our team secure a third position.    ",
  },
  {
    title: "4. CENTURION STAR PERFORMER",
    desc: "Among top 100 top coders I'm the star Performer of CSE Department in internal coding contest which was conducted by Sri Eshwar College of Engineering(SECE). Out of 100 problems I solved 77 problems in a given interval of time.",
  },
  {
    title: "5. KBA IDEATHON-2023 SEMI-FINALIST",
    desc: "Our team got shortlisted for KBA Ideathon. It was a national level Blockchain ideathon which was conducted by KBA",
  },
];

export default Achievement;
