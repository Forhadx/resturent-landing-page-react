import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from './Header/Header';
import Home from "./Home/Home";
import About from "./About/About";
import Menu from "./Menu/Menu";
import Testimonial from "./Testimonials/Testimonial";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Route path="/" component={Header} />
      <Route path="/" component={Home} />
      <Route path="/" component={About} />
      <Route path="/" component={Menu} />
      <Route path="/" component={Testimonial} />
      <Route path="/" component={Contact} />
      <Route path="/" component={Footer} />
      <Redirect to="/" />
    </div>
  );
};

export default App;
