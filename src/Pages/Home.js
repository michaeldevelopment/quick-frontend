import React, { Suspense } from "react";

import HeroHome from "../Components/HeroHome";
import AllRecipes from "../Components/AllRecipes";
import WhyQuick from "../Components/WhyQuick";
import About from "../Components/About";

import { useSelector } from "react-redux";

import "./pages.scss";

const Home = ({ recipes }) => {
  const userData = useSelector((state) => state.userData);
  const token = useSelector((state) => state.userToken);

  return (
    <div id="homeSection">
      <HeroHome />
      {!userData?.username && (
        <AllRecipes recipes={recipes} className="bg-white" />
      )}
      <WhyQuick />
      <About />
    </div>
  );
};

export default Home;
