// here we will have the routes of the application
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  generalRoutes,
  ideaRelatedRoutes,
  userRelatedRoutes,
} from "./routes";




const AppRoutes = () => {
  return (
    <>
      <Routes>
        {generalRoutes.map((currRoute) => (
          <Route
            key={currRoute.path}
            path={currRoute.path}
            element={currRoute.component}
          />
        ))}

        {ideaRelatedRoutes.map((currRoute) => (
          <Route
            key={currRoute.path}
            path={currRoute.path}
            element={currRoute.component}
          />
        ))}

        {userRelatedRoutes.map((currRoute) => (
          <Route
            key={currRoute.path}
            path={currRoute.path}
            element={currRoute.component}
          />
        ))}

        
      </Routes>
    </>
  );
};

export default AppRoutes;
