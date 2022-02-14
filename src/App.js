import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RecipeDetail from "./Pages/RecipeDetail";
import MyFavs from "./Pages/MyFavs";
import EmailRecovery from "./Pages/EmailRecovery";
import PasswordReset from "./Pages/PasswordReset";
import PasswordChanged from "./Pages/PasswordChanged";
import PrivateRoute from "./Pages/PrivateRoute";
import { AuthProvider } from "./Context/auth";

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <PrivateRoute>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRoute>
                  <SignUp />
                </PrivateRoute>
              }
            />
            <Route path="/recipedetail/:id" element={<RecipeDetail />} />
            <Route path="/myfavs/:id" element={<MyFavs />} />
            <Route path="/emailrecovery" element={<EmailRecovery />} />
            <Route path="/passwordreset/:id" element={<PasswordReset />} />
            <Route path="/passwordchanged/:id" element={<PasswordChanged />} />
          </Routes>
        </Navigation>
      </AuthProvider>
    </>
  );
}

export default App;
