import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import menuItem from "../../../constants";
import { logo1, responsiveIcon } from "../../../assets";
import { user, notification } from "../../../assets/Admin";
import "./style.css";
const Headbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOffcanvas = () => {
    setShow(false);
  };
  return (
    <>
      <div className="headerbar w-100 px-4 d-flex align-items-center justify-content-end gap-3">
        <div className="headbar-icon bg-secondary rounded-circle d-flex justify-content-center align-items-center">
          <img src={notification} alt="" />
        </div>
        <div className="headbar-icon bg-secondary rounded-circle d-flex justify-content-center align-items-center">
          <img src={user} alt="" />
        </div>
        <img
          src={responsiveIcon}
          alt=""
          onClick={handleShow}
          className="  d-inline-block d-md-none"
        />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header
            closeButton
            className="bg-primary"
            closeVariant="white"
          ></Offcanvas.Header>
          <Offcanvas.Body className="bg-primary px-5">
            <img
              src={logo1}
              alt=""
              className="mb-3"
              style={{ height: "60px" }}
            />
            {/* Print all Navigation Links here*/}
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link mt-2  p-2"
                activeclassName="active"
                onClick={() => handleOffcanvas()}
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Headbar;
