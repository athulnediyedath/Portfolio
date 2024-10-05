import React from 'react';
import { Certificates } from '../portfolio';
import { Container, Row } from 'reactstrap';
import CertificateCard from '../components/CertificateCard';
import Fade from "react-reveal/Fade";


const Certificate = () => {
  return (
    Certificates && (
      <Fade left duration={2000}>
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-certificate text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Certificates</h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {Certificates.map((data, i) => {
              return <CertificateCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
      </Fade>
    )
  );
};

export default Certificate;