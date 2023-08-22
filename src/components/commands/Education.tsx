import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
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
    title: "Sri Eshwar College Of Engineering, Coimbatore ",
    desc: "B.E CSE              | CGPA : 8.62          |  2021 - present",
  }, 
  {
    title: "K.C.A.D Chidambaram Gnangiri Matric Hr.Sec School,Sattur.",
    desc: "Standard - 12th ( HSC ) | Percentage : 88.4 |  2020 - 2021",
  },
  {
    title: "K.C.A.D Chidambaram Gnangiri Matric Hr.Sec School,Sattur. ",
    desc: "Standard - 10th ( SSLC ) | Percentage : 81.3 | 2018 - 2019",
  },
];

export default Education;
