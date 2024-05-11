import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "../../../components/Admin/Searchbar";
import "./style.css";
import ProductTable from "./ProductTable";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
const ProductManagement = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="p-3 overflow-auto h-100 ">
        <Row>
          <Col md={6} lg={7}>
            <h2 className="text-primary fw-bolder primary-font">
              Product Management
            </h2>
          </Col>
          <Col md={6} lg={5}>
            <Row className="gap-2 gap-sm-0">
              <Col sm={8} md={8}>
                <Searchbar placeholder="Search Product" />
              </Col>
              <Col sm={4} md={4} className="ps-md-0">
                <button
                  className="rounded-3 border bg-primary text-light px-3 w-100 add-product-btn"
                  style={{ height: "40px" }}
                  onClick={()=>navigate("/productmanagement/addproduct")}
                >
                  + Add Product
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="text-secondary" />

        <Row className="px-0 px-md-3" style={{ height: "87%" }}>
          <Col className="bg-light p-3 rounded-2 h-100">
            <Row className="px-3 pb-3 gap-2 justify-content-end">
            <PrimaryButton btntext="Mans" />
              <PrimaryButton btntext="Womens" />
              <PrimaryButton btntext="Kids" />
              <PrimaryButton btntext="New Arrivals" />
              <PrimaryButton btntext="Best Selling" />
              <PrimaryButton btntext="Featured" />
              <PrimaryButton btntext="Trending" />
             
            </Row>
            <ProductTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductManagement;
