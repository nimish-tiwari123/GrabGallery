import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { backIcon, upload } from "../../../assets/icons";
import InputField from "../../../components/InputField";
import TextAreaField from "../../../components/InputField/TextAreaField";
import RadioField from "../../../components/InputField/RadioField";
import { addproductSchema } from "../../../schema/ProductManagement";
import { noImage } from "../../../assets";
import "./style.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);

  const validationSchema = addproductSchema;
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      brand: "",
      productImages:selectedImages,
      color: "",
      material: "",
      size: "",
      description: "",
      featured: false,
      price: "",
      discount: "",
      discountPrice: "",
      discountStartDate: "",
      discountEndDate: "",
      tax: "",
      totalStockQuantity: "",
      availableStock: "",
      stockStatus: "In Stock", // Assuming default value is "In Stock"
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedImages.length > 6) {
      alert("You can only select up to 6 images.");
      return;
    }
    setSelectedImages([...selectedImages, ...files]);
  };
  return (
    <>
      <Container fluid className="px-1 py-3 p-md-3 overflow-auto h-100 ">
        <Row>
          <Col md={6} lg={7}>
            <h2 className="text-primary fw-bolder primary-font ">
              <button
                className="back-icon border-0 d-inline-block d-md-none"
                onClick={() => navigate("/productmanagement")}
              >
                <img
                  src={backIcon}
                  alt=""
                  style={{ width: "27px" }}
                  className="mx-2"
                />{" "}
              </button>
              Add Product
            </h2>
          </Col>
          <Col md={6} lg={5}>
            <Breadcrumb className="d-md-flex justify-content-end pt-2 d-none">
              <Link
                to="/productmanagement"
                className="breadcrumb_item breadcrumb-item text-secondary text-underline-none"
              >
                Product Management
              </Link>
              <span className="px-1">/</span>
              <p>
                <span className="text-primary breadcrumb_item breadcrumb-item text-underline-none">
                  {" "}
                  Add Product
                </span>
              </p>
            </Breadcrumb>
          </Col>
        </Row>
        <hr className="text-secondary m-0" />
        <Row className="bg-white m-0 px-4 py-5 mt-3 rounded-3 overflow-auto">
          <form className="text-start fw-500" onSubmit={formik.handleSubmit}>
            {/* Basic Details */}
            <Container fluid>
              <Row className="comon-border px-md-3 py-4 rounded-3 ">
                <h4>Basic Details</h4>
                <Col md={8}>
                  <Row>
                    <Col md={6}>
                      <InputField
                        label="Name"
                        required="*"
                        name="name"
                        placeholder="Product Name"
                        formik={formik}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        label="Category"
                        required="*"
                        name="category"
                        placeholder="Product Category"
                        formik={formik}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        label="Brand"
                        required="*"
                        name="brand"
                        placeholder="Product Brand"
                        formik={formik}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        label="Color"
                        required="*"
                        name="color"
                        placeholder="Product Color"
                        formik={formik}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        label="Material/Fabric"
                        required="*"
                        name="material"
                        placeholder="Material/Fabric"
                        formik={formik}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        label="Size"
                        required="*"
                        name="size"
                        placeholder="Product Size"
                        formik={formik}
                      />
                    </Col>
                    <Col md={12}>
                      {/* Description */}
                      <TextAreaField
                        label="Description"
                        required="*"
                        name="description"
                        placeholder="Product Description"
                        formik={formik}
                      />
                    </Col>
                    <Col md={12}>
                      {/* Featured */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="featured"
                          name="featured"
                          checked={formik.values.featured}
                          onChange={formik.handleChange}
                        />
                        <label className="form-check-label" htmlFor="featured">
                          Featured Product:{" "}
                          <span className="text-success fw-bold">
                            Highlighted for Special Attention
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} className="px-md-3">
                  <input
                    type="file"
                    accept="image/*"
                    id="product-img"
                    multiple
                    onChange={handleImageChange}
                    className="d-none"
                  />
                  <label
                    htmlFor="product-img"
                    className="select-product-label rounded-pill px-3 py-2 text-primary fw-bold w-100 text-center cursor-pointer mt-4 mt-md-0"
                  >
                    Select Product Image
                    <img
                      src={upload}
                      alt=""
                      style={{ width: "35px" }}
                      className="ps-2"
                    />
                  </label>
                  <Row className="mt-3">
                    {selectedImages.map((image, index) => (
                      <Col key={index} className="p-2 col-4">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Image ${index + 1}`}
                          className="border rounded-3 w-100"
                        />
                      </Col>
                    ))}
                    {selectedImages.length === 0 && (
                      <img src={noImage} alt="" className="w-100" />
                    )}
                  </Row>
                </Col>
              </Row>
            </Container>

            {/* Price Details */}
            <Container fluid className="mt-4">
              <Row className="comon-border rounded-3 px-md-3 py-4">
                <h4>Price Details</h4>
                <Col lg={4} md={6}>
                  <InputField
                    label="Price"
                    required="*"
                    name="price"
                    placeholder="Product Price"
                    formik={formik}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <InputField
                    label="Discount"
                    name="discount"
                    placeholder="Discount"
                    formik={formik}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <InputField
                    label="Discount Price"
                    name="discountPrice"
                    placeholder="Discount Price"
                    formik={formik}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <InputField
                    label="Discount Start Date"
                    type="date"
                    name="discountStartDate"
                    formik={formik}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <InputField
                    label="Discount End Date"
                    type="date"
                    name="discountEndDate"
                    formik={formik}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <InputField
                    label="Tax"
                    name="tax"
                    placeholder="Tax"
                    formik={formik}
                  />
                </Col>
              </Row>
            </Container>

            {/* Stock Details */}
            <Row className="comon-border rounded-3 my-4 m-0 px-md-3 py-4">
              <h4>Stock Details</h4>
              <Col lg={4} md={6}>
                <InputField
                  label="Total Stock Quantity"
                  required="*"
                  name="totalStockQuantity"
                  placeholder="Total Stock Quantity"
                  formik={formik}
                />
              </Col>
              <Col lg={4} md={6}>
                <InputField
                  label="Available Stock"
                  required="*"
                  name="availableStock"
                  placeholder="Available Stock"
                  formik={formik}
                />
              </Col>

              <Col lg={4} md={6}>
                {/* Stock Status */}
                <RadioField
                  label="Stock Status"
                  required="*"
                  name="stockStatus"
                  options={["In Stock", "Out of Stock"]}
                  formik={formik}
                />
              </Col>
            </Row>
            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-primary text-light rounded-pill px-5 ms-auto d-block fw-bold"
            >
              Submit
            </button>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default AddProduct;