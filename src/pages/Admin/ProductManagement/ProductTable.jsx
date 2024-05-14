import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { action, tableheader } from "../../../assets/icons";
import f5 from "../../../assets/f5.png";
import Pagination from "../../../components/Paginations/Pagination";
import { DeleteModal, ViewProductModal, AddArrivalsModal,AddBestSellingModal,AddFeaturedModal,AddTrendingModal } from "./Modal";
import "./style.css";
const ProductTable = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewProductModal, setShowViewProductModal] = useState(false);
  const [showAddArrivalsModal, setShowAddArrivalsModal] = useState(false);
  const [showAddBestSellingModal, setShowAddBestSellingModal] = useState(false);
  const [showAddFeaturedModal, setShowAddFeaturedModal] = useState(false);
  const [showAddTrendingModal, setShowAddTrendingModal] = useState(false);
  return (
    <>
      <Container fluid>
        <Row className="header-row rounded-2 py-3 d-none d-md-flex">
          <Col className="sno">
            S.No.
           
          </Col>
          <Col className="product-image">
            Product Image
           
          </Col>
          <Col className="product-name">
            Product Name
           
          </Col>

          <Col className="price">
            Price
           
          </Col>
          <Col className="stock-status">
            Stock Status
           
          </Col>
          <Col className="quantity">
            Quantity
           
          </Col>
          <Col className="created-at">
            Created At
           
          </Col>
          <Col className="action">
            Action
           
          </Col>
        </Row>
        {/* Sample data */}
        <Row className="data-row py-3 d-none d-md-flex">
          <Col className="sno d-flex align-items-center justify-content-center">
            1
          </Col>
          <Col className="product-image">
            <img src={f5} alt="Product" className="product-img" />
          </Col>
          <Col className="product-name d-flex align-items-center justify-content-center">
            Printed Shirt
          </Col>
          <Col className="price d-flex align-items-center justify-content-center">
            300 Rs
          </Col>
          <Col className="stock-status d-flex align-items-center justify-content-center text-success fw-bold">
            In Stock
          </Col>
          <Col className="quantity d-flex align-items-center justify-content-center">
            10
          </Col>
          <Col className="created-at d-flex align-items-center justify-content-center">
            05/05/2024
          </Col>
          <Col className="action d-flex align-items-center justify-content-center">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ width: "30px", height: "30px" }}
                className="bg-secondary rounded-circle d-flex justify-content-center align-items-center border cursor-pointer "
              >
                <img src={action} alt="" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowDeleteModal(true)}>
                  Delete
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowViewProductModal(true)}>
                  View Product
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowAddArrivalsModal(true)}>
                  Add Arrivals
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowAddBestSellingModal(true)}>
                  Add Best Selling
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowAddFeaturedModal(true)}>
                  Add Featured
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowAddTrendingModal(true)}>
                  Add Trending
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="responsive-data-row py-3 d-md-none  border rounded-3">
          <Row className="m-0">
            <Col className="sno col-1">1</Col>
            <Col className="product-image col-4">
              <img src={f5} alt="Product" className="product-img rounded-2" />
            </Col>
            <Col>
              <Col className="product-name text-start fw-bold">
                Printed Shirt
              </Col>
              <Col className="price text-start">300 Rs</Col>
              <Col className="stock-status text-start fw-bold text-success">
                In Stock
              </Col>
            </Col>
            <Col className="action col-2">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ width: "30px", height: "30px" }}
                  className="bg-secondary rounded-circle d-flex justify-content-center align-items-center border cursor-pointer "
                >
                  <img src={action} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowDeleteModal(true)}>
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowViewProductModal(true)}>
                    View Product
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowAddArrivalsModal(true)}>
                    Add Arrivals
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setShowAddBestSellingModal(true)}
                  >
                    Add Best Selling
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowAddFeaturedModal(true)}>
                    Add Featured
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowAddTrendingModal(true)}>
                    Add Trending
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Col className="quantity text-start col-4 mt-3">
            Quantity: <span className="fw-bold">20</span>
          </Col>
          <Col className="created-at col-8 mt-3">
            Created At: <span className="fw-bold"> 05/05/2024</span>
          </Col>
        </Row>
        <Container fluid className="d-flex justify-content-center">
          <Row className="position-absolute bottom-0 mb-5 d-flex m-auto ">
            <Pagination totalPages={3} currentPage={1} onPageChange={true} />
          </Row>
        </Container>
      </Container>
      {/* Modals */}
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
      />
      <ViewProductModal
        show={showViewProductModal}
        onHide={() => setShowViewProductModal(false)}
      />
      <AddArrivalsModal
        show={showAddArrivalsModal}
        onHide={() => setShowAddArrivalsModal(false)}
      />
      <AddBestSellingModal
        show={showAddBestSellingModal}
        onHide={() => setShowAddBestSellingModal(false)}
      />
      <AddFeaturedModal
        show={showAddFeaturedModal}
        onHide={() => setShowAddFeaturedModal(false)}
      />
      <AddTrendingModal
        show={showAddTrendingModal}
        onHide={() => setShowAddTrendingModal(false)}
      />
    </>
  );
};

export default ProductTable;
