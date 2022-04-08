import React, { Fragment } from "react";

import OgelFooter from "./components/footer/OgelFooter";
import OgelHeader from "./components/header/OgelHeader";
import Container from "./components/Container";

import User from "./pages/User";
import Users from "./pages/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const menuItems = ["Users", "About", "Contact"];

const Pages = () => {
  let routes = useRoutes([
    { path: "/users", element: <Users /> },
    { path: "/user/:id", element: <User /> },
    // { path: "/users/2", element: <Users /> },
    // { path: "/users/3", element: <Users /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> }
  ]);
  return routes;
};

const App = () => {
  return (
    <Fragment>
      <Container>
        <Router>
          <OgelHeader menuItems={menuItems} />
          <Pages />
        </Router>
      </Container>
      <OgelFooter />
    </Fragment>
  );
};

export default App;
