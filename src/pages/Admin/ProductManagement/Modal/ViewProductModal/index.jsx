/* eslint-disable react/prop-types */
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import f5 from "../../../../../assets/f5.png";

const ViewProductModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" className="ps-0">
      <Modal.Header closeButton>
        <Modal.Title>View Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12} lg={3}>
              <Row>
                <p className="m-0 fw-medium fw-bold">Product Images:</p>
                <Col className="col-4 mt-2 p-2">
                  <img src={f5} alt="" className="w-100 rounded-3 border" />
                </Col>
                <Col className="col-4 mt-2 p-2">
                  <img src={f5} alt="" className="w-100 rounded-3 border" />
                </Col>{" "}
                <Col className="col-4 mt-2 p-2">
                  <img src={f5} alt="" className="w-100 rounded-3 border" />
                </Col>{" "}
                <Col className="col-4 mt-1 p-2">
                  <img src={f5} alt="" className="w-100 rounded-3 border" />
                </Col>{" "}
                <Col className="col-4 mt-1 p-2">
                  <img src={f5} alt="" className="w-100 rounded-3 border" />
                </Col>{" "}
                <Col className="col-4 mt-1 p-2">
                  <img src={f5} alt="" className="w-100 rounded-3 border" />
                </Col>
              </Row>
              <Row className="mt-4">
                <p className="m-0 fw-medium fw-bold">Product Description:</p>
                <p className="text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta doloribus provident facilis magni aspernatur officia,
                  vel laboriosam ex similique ullam recusandae ad repellendus
                  labore deserunt ratione. Architecto sequi nam tempora.
                </p>
              </Row>
            </Col>
            <Col md={12} lg={5}>
              <p>
                Product Name: <span className="fw-bold">Printed Shirt</span>
              </p>
              <p>
                Brand: <span className="fw-bold">Zara</span>
              </p>
              <p>
                Category: <span className="fw-bold">Mens</span>
              </p>
              <p>
                Clothing Category: <span className="fw-bold">Shirt</span>
              </p>
              <p>
                Available Sizes: <span className="fw-bold">md,lg</span>
              </p>

              <p>
                Material: <span className="fw-bold">md,lg</span>
              </p>
              <p>
                Color Variants: <span className="fw-bold">md,lg</span>
              </p>
              <p>
                Age: <span className="fw-bold">0-10</span>
              </p>
              <Container fluid className="border rounded-2 p-3 my-2">
                <Row>
                  <Col md={8}>
                    <strong>Featured:</strong>{" "}
                    <span className="text-success">
                      This product is featured
                    </span>
                  </Col>
                  <Col md={4}>
                    <strong>Tax:</strong>
                    <span>5%</span>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="my-2">
                <Row>
                    <button className="text-secondary bg-secondary-subtle py-2 px-3 fw-bold w-auto border rounded-pill m-1">Added in Arrivals</button>
                    <button className="text-secondary bg-secondary-subtle py-2 px-3 fw-bold w-auto border rounded-pill m-1">Added in Best Selling</button> <button className="text-secondary bg-secondary-subtle py-2 px-3 fw-bold w-auto border rounded-pill m-1">Added in Trending</button>
                </Row>
              </Container>
            </Col>
            <Col md={12} lg={4}>
              <p>
                Price: <span className="fw-bold">&#8377; 1000</span>
              </p>
              <p>
                Discount: <span className="fw-bold">5%</span>
              </p>
              <p>
                Discount Price: <span className="fw-bold">&#8377; 950</span>
              </p>
              <Row>
                <p>
                  Discount Start Date:{" "}
                  <span className="fw-bold"> 05/11/2022</span>
                </p>
                <p>
                  Discount End Date:{" "}
                  <span className="fw-bold"> 11/11/2022</span>
                </p>
              </Row>
              <Container fluid className="border rounded-3 p-3">
                <Row>
                  <p>
                    Total Stock Quantity:
                    <span className="fw-bold"> 100000</span>
                  </p>
                  <p>
                    Available Stock:
                    <span className="fw-bold"> 10000</span>
                  </p>{" "}
                  <p>
                    Stock Status
                    <span className="fw-bold text-success"> In Stock</span>
                  </p>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Button
              className="bg-secondary-subtle text-secondary border w-auto ms-auto mt-3"
              onClick={onHide}
            >
              Close
            </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ViewProductModal;
