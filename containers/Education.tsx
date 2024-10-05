import React, {useContext} from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import {ThemeContext} from "../styles/theme/theme";

const Education = () => {
  const {theme, mode} = useContext(ThemeContext);
  const {oppositeTextColor, bgGradient} = theme;

  // Conditional background and border classes
  const sectionBgClass = mode === "dark" ? "bg-gradient-dark" : "bg-gradient-info"; // Background for light/dark mode
  const textClass = mode === "dark" ? "text-light" : "text-info"; // Text color for light/dark mode

  return (
    educationInfo && (
      <Fade left duration={2000}>
        {/* Retaining original bg-gradient-info class, removing border, but keeping other styles */}
        <section className={`section pb-100 ${sectionBgClass} border-none my-5 ${bgGradient}`}>
          <Container>
            <div className="d-flex px-3">
              <div>
                {/* Adjusting the icon container color for dark mode */}
                <div className={`icon icon-lg icon-shape ${mode === "dark" ? "bg-gradient-secondary" : "bg-gradient-white"} shadow rounded-circle ${textClass}`}>
                  <i className={`ni ni-books text-info`} />
                </div>
              </div>
              <div className="pl-4">
                {/* Heading with blue color in light mode and white in dark mode */}
                <h4 className="display-3 text-info" style={{ color: mode === "dark" ? "#f8f9fa" : "#007bff" }}>
                  Education
                </h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {educationInfo.map(info => {
                return (
                  <Col className="order-lg-1" lg="6" key={info.schoolName}>
                    <EducationCard {...info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 -0.5 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className={mode === "dark" ? "fill-darker" : "fill-white"} // Dynamic fill for dark mode
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </Fade>
    )
  );
};

export default Education;
