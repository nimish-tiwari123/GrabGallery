import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo1 } from "../../../assets";
import HeadNavbar from "../Headbar";
import menuItem from "../../../constants";
import { togglearrow1, togglearrow2 } from "../../../assets/Admin";
import "./style.css";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); //this hook created for toggle a side bar
  const [activeItemName, setActiveItemName] = useState("");
  const toggle = () => setIsOpen(!isOpen);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="d-flex gap-0">
      <div
        style={{ width: isOpen ? "70px" : "300px" }}
        className="sidebar position-relative bg-primary py-4 d-none d-md-block"
      >
        <div className="top_section">
          <img
            src={logo1}
            alt=""
            style={{ visibility: isOpen ? "hidden" : "visible" }}
            className="logo ms-4"
          />
          <div
            className="toggle-btn position-absolute top-0 end-0 mt-3 cursor-pointer"
            style={{marginRight:"30px"}}
          >
            {!isOpen ? (
              <img
                src={togglearrow1}
                alt="toggle"
                onClick={toggle}
                className="toggle bg-secondary rounded-start-4 p-2 position-absolute "
              />
            ) : (
              <img
                src={togglearrow2}
                alt="toggle"
                onClick={toggle}
                className="toggle bg-secondary rounded-start-4 p-2 position-absolute"
              />
            )}
          </div>
        </div>
        <div className="bodysection px-3 py-2 mt-3">
          {/* Print all Navigation Links here*/}
          {menuItem.map((item, index) => (
            <div key={index}>
              {/* Main Menu Item */}
              <NavLink
                to={item.path}
                className="link mt-2 p-2"
                onClick={() => setActiveItemName(item.name)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                title={showTooltip && isOpen ? item.name : ""}
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "none" : "block" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <main className="w-100" >
        <HeadNavbar itemName={activeItemName} />
        <div className="bg-secondary" style={{ height: "calc(100vh - 60px)" }}>{children}</div>

      </main>
    </div>
  );
};

export default Sidebar;
