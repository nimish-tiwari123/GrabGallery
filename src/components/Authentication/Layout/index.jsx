/* eslint-disable react/prop-types */
import { Container, Row, Col } from "react-bootstrap";
import { layoutVector } from "../../../assets/Authentication";
import { logo } from "../../../assets/index";

import "./style.css";
const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className="layout-container">
        <Row className="h-100">
          <Col
            md={6}
            className=" d-flex justify-content-center align-items-center flex-column h-100"
          >
            <Container fluid className="authentication-container">
              <img
                src={logo}
                alt=""
                className="layout-logo d-block mx-auto mb-5"
              />

              {children}
            </Container>
          </Col>
          <Col
            md={6}
            className="layout-bg d-none d-md-flex justify-content-center align-items-center flex-column h-100"
          >
            <img src={layoutVector} alt="" className="px-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Layout;
