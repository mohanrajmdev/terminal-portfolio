import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
  ProjectLink
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc ,repo }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          <ProjectLink><a href={repo} >Github Link</a></ProjectLink>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Youtube Clone",
    desc: "Developed a YouTube clone using React JS and its popular frontend framework.Integrated third-party APIs, such as RapidAPI, for video hosting and embedding,enhancing the platform's capability.",
    url: "https://utubevideos.netlify.app/",
    repo:"https://github.com/mohanrajmdev/Youtube-clone-api"
  },
  {
    id: 2,
    title: "chainproof",
    desc: "Chainproof web3 application which enable user's certificate credentials by verifying and validating the right person.Solidity and IPFS protocol ensures user's details in well-advanced manner by implementing polygon blockchain.",
    url: "https://chainproof.netlify.app/",
    repo:"https://github.com/waseem0605/ChainProof"
  },
  {
    id: 3,
    title: "Todo App",
    desc: "It is used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.",
    url: "https://github.com/mohanrajmdev/Todo-app-react",
    repo:"https://github.com/mohanrajmdev/Todo-app-react"
  },
  {
    id: 4,
    title: "Quiz Game",
    desc: "Quiz is a form of game or mind sport in which players attempt to answer questions correctly on one or several specific topics.",
    url: "https://mohanrajmdev.github.io/Quiz-Game/",
    repo:"https://github.com/mohanrajmdev/Quiz-Game"
  },
];

export default Projects;
