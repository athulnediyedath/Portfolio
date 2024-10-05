import { Icon } from "@iconify/react";
//import React, { Fragment } from "react";
import React, {Fragment, useContext} from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import {ThemeContext} from "../styles/theme/theme";

const Skills = () => {
  const {theme} = useContext(ThemeContext);
	const {textColor, oppositeTextColor, oppositeTextColorLighter} = theme;
  return (
    skillsSection && (
      <Fade left duration={2000}>
      <Container className="text-center my-5 section section-lg">
          <h1 className={`h1 ${oppositeTextColor}`}>{skillsSection.title}</h1>
          <p className={`lead ${oppositeTextColor}`}>{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                <h3 className={`h3 mb-2 ${oppositeTextColorLighter}`}>{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p className={`  ${oppositeTextColorLighter}`} key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
