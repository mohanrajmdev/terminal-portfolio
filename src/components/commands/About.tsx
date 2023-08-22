import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Mohanraj M</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Blockchain  & CyberSecurity Enthusiast</HighlightAlt> 
      </p>
      <p>
      I'm currently pursuing 3rd year of my bachelor's degree in the field of Computer
Science and Engineering.<br /> Highly motivated and driven software engineering student seeking an
opportunity to leverage my skills and knowledge in Cyber Security.<br /> Seeking opportunities to contribute my expertise in enhancing information security protocols and promoting a secure digital environment.
      </p>
    </AboutWrapper>
  );
};

export default About;
