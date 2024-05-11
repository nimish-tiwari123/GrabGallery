// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConstant } from "./AppRoutesConstants";
import Layout from "../components/Authentication/Layout";
import {
  Login,
  SignUp,
  ForgotPassword,
  CreatePassword,
  OtpVerification,
} from "../pages/Authentication";
import { NoConnection, NoDataFound, PageNotFound } from "../components";
import AdminRoutes from "../pages/Admin/routes/AdminRoutes";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={routesConstant.home.path}
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path={routesConstant.login.path}
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path={routesConstant.signup.path}
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path={routesConstant.forgotpassword.path}
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path={routesConstant.createpassword.path}
            element={
              <Layout>
                <CreatePassword />
              </Layout>
            }
          />
          <Route
            path={routesConstant.otpverification.path}
            element={
              <Layout>
                <OtpVerification />
              </Layout>
            }
          />
           <Route
            path={routesConstant.dashboard.path}
            element={<AdminRoutes />}
          />
          <Route
            path={routesConstant.noconnection.path}
            element={<NoConnection />}
          />
          <Route
            path={routesConstant.pagenotfound.path}
            element={<PageNotFound />}
          />
          <Route
            path={routesConstant.nodatafound.path}
            element={<NoDataFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
