import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
//const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const Certificate = dynamic(()=> import('../containers/Certificate'))
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";
import {ThemeContext} from "../styles/theme/theme";
import {useContext} from "react";


export default function Home({ githubProfileData }: { githubProfileData: GithubUserType }) {
  const { theme } = useContext(ThemeContext);
    const { globalBg } = theme;
    return (
        <div className={globalBg}>
            <SEO/>
            <Navigation/>
            <Greetings/>
            <Skills/>
            <Proficiency/>
            <Education/>
            <Experience/>
           
            <Projects/>
            <Certificate />
            <GithubProfileCard prof={githubProfileData}/>
            
        </div>
    );
}

Home.propTypes = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const githubProfileData = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
      props: {githubProfileData},
  };
}