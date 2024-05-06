// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesConstant } from "./AdminRoutesConstants";
import Dashboard from "../Dashboard";
import ProductManagement from "../ProductManagement";
import StockManagement from "../StockManagement";
import UserManagement from "../UserManagement";
import CustomerFeedback from "../CustomerFeedback";
import Notification from "../Notification";
import Sidebar from "../../../components/Admin/Sidebar";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={routesConstant.dashboard.path}
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path={routesConstant.productmanagement.path}
          element={
            <Sidebar>
              <ProductManagement />
            </Sidebar>
          }
        />
        <Route
          path={routesConstant.stockmanagement.path}
          element={
            <Sidebar>
              <StockManagement />
            </Sidebar>
          }
        />
        <Route
          path={routesConstant.usermanagement.path}
          element={
            <Sidebar>
              <UserManagement />
            </Sidebar>
          }
        />
        <Route
          path={routesConstant.customerfeedback.path}
          element={
            <Sidebar>
              <CustomerFeedback />
            </Sidebar>
          }
        />
        <Route
          path={routesConstant.notification.path}
          element={
            <Sidebar>
              <Notification />
            </Sidebar>
          }
        />
      </Routes>
    </>
  );
};

export default AdminRoutes;
