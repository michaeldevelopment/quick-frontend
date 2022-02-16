import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/auth";
import req from "./axiosReq/index";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MyFavs from "./Pages/MyFavs";
import EmailRecovery from "./Pages/EmailRecovery";
import PasswordReset from "./Pages/PasswordReset";
import PasswordChanged from "./Pages/PasswordChanged";
import CreateRecipe from "./Pages/CreateRecipe";
import PrivateRoute from "./Pages/PrivateRoute";
import RedirectUser from "./Pages/RedirectUser";
import RecipeCreated from "./Pages/RecipeCreated";
import MyRecipes from "./Pages/MyRecipes";

import Navigation from "./Components/Navigation";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    req.getRecipesReq().then((response) => setRecipes(response.data));
  }, []);

  return (
    <>
      <AuthProvider>
        <Navigation>
          <Routes>
            <Route path="/" element={recipes && <Home recipes={recipes} />} />
            <Route
              path="/login"
              element={
                <RedirectUser>
                  <Login />
                </RedirectUser>
              }
            />
            <Route
              path="/signup"
              element={
                <RedirectUser>
                  <SignUp />
                </RedirectUser>
              }
            />
            <Route path="/emailrecovery" element={<EmailRecovery />} />
            <Route
              path="/recipecreated"
              element={
                <PrivateRoute>
                  <RecipeCreated />
                </PrivateRoute>
              }
            />
            <Route
              path="/myrecipes/:id"
              element={
                recipes && (
                  <PrivateRoute>
                    <MyRecipes recipes={recipes} />
                  </PrivateRoute>
                )
              }
            />
            <Route path="/myfavs/:id" element={<MyFavs />} />
            <Route path="/passwordreset/:id" element={<PasswordReset />} />
            <Route path="/passwordchanged/:id" element={<PasswordChanged />} />
            <Route
              path="/createrecipe"
              element={
                <PrivateRoute>
                  <CreateRecipe recipes={recipes} setRecipes={setRecipes} />
                </PrivateRoute>
              }
            />
          </Routes>
        </Navigation>
      </AuthProvider>
    </>
  );
}

export default App;
