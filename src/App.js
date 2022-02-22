import React, { useEffect, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Context/useAuth";
import req from "./axiosReq/index";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import EmailRecovery from "./Pages/EmailRecovery";
import PasswordReset from "./Pages/PasswordReset";
import PasswordChanged from "./Pages/PasswordChanged";
import CreateRecipe from "./Pages/CreateRecipe";
import PrivateRoute from "./Pages/PrivateRoute";
import RedirectUser from "./Pages/RedirectUser";
import RecipeCreated from "./Pages/RecipeCreated";
import ShowAllRecipes from "./Pages/ShowAllRecipes";
import Plans from "./Pages/Plans";

import Navigation from "./Components/Navigation";

import Spinner from "react-bootstrap/Spinner";

const MyRecipes = React.lazy(() => import("./Pages/MyRecipes"));
const MyFavs = React.lazy(() => import("./Pages/MyFavs"));

function App() {
  const auth = useAuth();
  const { allRecipes } = auth;

  useEffect(() => {
    req.getRecipesReq().then((response) => auth.addAllRecipes(response.data));
  }, []);

  return (
    <>
      <Navigation>
        <Routes>
          <Route
            path="/"
            element={allRecipes && <Home recipes={allRecipes} />}
          />
          <Route
            path="/allrecipes"
            element={allRecipes && <ShowAllRecipes recipes={allRecipes} />}
          />
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
              <PrivateRoute>
                <Suspense
                  fallback={
                    <Spinner
                      animation="border"
                      variant="secondary"
                      className="mx-5"
                    />
                  }
                >
                  <MyRecipes />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="/myfavs/:id"
            element={
              <PrivateRoute>
                <Suspense
                  fallback={
                    <Spinner
                      animation="border"
                      variant="secondary"
                      className="mx-5"
                    />
                  }
                >
                  <MyFavs />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route path="/passwordreset/:id" element={<PasswordReset />} />
          <Route path="/passwordchanged/:id" element={<PasswordChanged />} />
          <Route
            path="/createrecipe"
            element={
              <PrivateRoute>
                <CreateRecipe />
              </PrivateRoute>
            }
          />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
