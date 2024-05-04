import { Container, Row, Col } from "react-bootstrap";
import { logo } from "../../../assets/index";
import "./style.css";
const Layout = ({children}) => {
 
  return (
    <>
      <Container fluid className="layout-container">
      
        <Row className="h-100">
          <Col md={6} className="p-4">
          <Container fluid className="authentication-container">
      <img src={logo} alt="" className="layout-logo d-block mx-auto my-5" />

          {children}
          </Container>
          </Col>
          <Col md={6} className="layout-bg d-none d-md-block"></Col>

        </Row>
       
      </Container>
    </>
  );
};
export default Layout;
