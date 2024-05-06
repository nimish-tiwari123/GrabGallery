import {
  dashboard,
  productmanagement,
  stockmanagement,
  customerfeedback,
  usermanagement,
} from "../assets/Admin/Sidebar";
const menuItem = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <img src={dashboard} alt="" />,
  },

  {
    path: "/productmanagement",
    name: "Product Management",
    icon: <img src={productmanagement} alt="" />,
  },

  {
    path: "/stockmanagement",
    name: "Stock Management",
    icon: <img src={stockmanagement} alt="" />,
  },

  {
    path: "/usermanagement",
    name: "User Management",
    icon: <img src={usermanagement} alt="" />,
  },

  {
    path: "/customerfeedback",
    name: "Customer Feedback",
    icon: <img src={customerfeedback} alt="" />,
  },
];

export default menuItem;
