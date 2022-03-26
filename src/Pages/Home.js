import React, { Suspense } from "react";

import HeroHome from "../Components/HeroHome";
import AllRecipes from "../Components/AllRecipes";
import WhyQuick from "../Components/WhyQuick";
import About from "../Components/About";
import { useAuth } from "../Context/useAuth";

import { useSelector } from "react-redux";

import "./pages.scss";

const Home = ({ recipes }) => {
  const auth = useAuth();
  const { user } = auth;

  const userData = useSelector((state) => state.userData);
  const token = useSelector((state) => state.userToken);

  console.log(userData, token);

  return (
    <div id="homeSection">
      <HeroHome />
      {!user?.username && <AllRecipes recipes={recipes} className="bg-white" />}
      <WhyQuick />
      <About />
    </div>
  );
};

export default Home;
