// Import the necessary hooks and context
import React, { useContext } from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";
import { ThemeContext } from "../styles/theme/theme"; // Import your ThemeContext

interface GithubProfileCardProps {
  prof: GithubUserType;  // Define that 'prof' is of type 'GithubUserType'
}

const GithubProfileCard: React.FC<GithubProfileCardProps> = ({ prof }) => {
  // Access the theme context
  const { theme } = useContext(ThemeContext);
  const { textColor, bgGradient } = theme; // Destructure necessary colors

  return (
    <Card className={`section-lg ${bgGradient} shadow-lg border-0`}>
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className={textColor}>Reach Out to me!</h2> {/* Apply dynamic text color */}
              <p className={`lead ${textColor} mt-3`}>
                If you have any query can message me or drop a HI? MY INBOX IS OPEN FOR ALL
              </p>
              <p className={`${textColor} mt-3`}>{prof.bio}</p> {/* Apply dynamic text color */}
              <div className={`my-3 icon-shape bg-gradient-white shadow rounded text-info`}>
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
