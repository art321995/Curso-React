import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import LayoutContainerForm from "./components/LayoutContainerForm";
import Register from "./routes/Register";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import Layout404 from "./components/Layout404";
import RequireAuth from "./components/RequireAuth";


const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<RequireAuth />}
        >
          <Route
            index
            element={<Home />}
          />
        </Route>

        <Route
          path="/"
          element={<LayoutContainerForm />}
        >
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Route>

        <Route
          path="*"
          element={<Layout404 />}
        />
      </Routes>
    </>
  );
};

export default App;