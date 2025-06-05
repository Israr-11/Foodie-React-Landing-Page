import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";

import Working from "./components/Working";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
    
      <About />
      <Working />
      <Menu
        pic1="pic1.jpg"
        name1="Chicken Salad &nbsp; $12"
        text1="Try it out it's best"
        pic2="pic2.jpg"
        name2="Cheese Burger &nbsp; $15"
        text2="Yummy food for hunger"
        pic3="pic3.jpg"
        name3="Toast &nbsp; $15"
        text3="Best for Breakfast"
        pic4="pic4.jpg"
        name4="Vegetable Salad &nbsp; $09"
        text4="Nice ingredients for health"
        pic5="pic5.png"
        name5="kabab &nbsp; $13"
        text5="Nutrition-rich food"
        pic6="pic6.jpg"
        name6="Healthy Salad &nbsp; $07"
        text6="Best for health"
      />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
