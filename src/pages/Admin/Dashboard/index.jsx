import { Container, Row, Col } from "react-bootstrap";
import { dashboardVector } from "../../../assets";
import "./style.css";

const Dashboard = () => {
  return (
    <Container fluid className="p-3 ">
      <Row>
        <Col md={8}>
          <Row className="bg-white rounded-4 p-3 m-0 h-100 d-flex align-items-center ">
            <Col md={7} >
              <h4 className="text-primary">
                Welcome Back <span className="fw-bolder">John!</span>
              </h4>
              <p className="text-secondary">Maximize Control and Insight: <span className="text-orenge fw-bold">Empower</span>  Your Management Experience with Intuitive Tools and Analytics, Elevating <span className="text-orenge fw-bold">Efficiency</span>  and  <span className="text-orenge fw-bold">Performance</span> in Your E-commerce Universe.</p>
            </Col>
            <Col md={5}>
              <img src={dashboardVector} alt="" className="w-100" />
            </Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
