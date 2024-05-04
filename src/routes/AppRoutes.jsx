// all routing parts are here

// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConstant } from "./AppRoutesConstants";
import Layout from "../components/Authentication/Layout";
import { Login, SignUp, ForgotPassword} from "../pages/Authentication";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
