import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import TotalSell from "./TotalSell";
import PieChart from "./PieChart";

const Dashboard = () => {
 
  return (
    <Container fluid className="p-3 overflow-auto h-100">
      <h2 className="text-primary fw-bolder primary-font">Dashboard</h2>
<TotalSell/>
    </Container>
  );
};

export default Dashboard;
