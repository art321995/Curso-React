import { Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Register from "./routes/Register";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import AccessContainer from "./components/AccessContainer";

const App = () => {
  const { user } = useContext(UserContext);
  if (user === false) return <p>Loading...</p>;

  return (
    <>
      <div className="container">
        <Navbar />
        
        <Routes>
        <Route
          path="/"
          element={<AccessContainer />}
          
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
        </Routes>
      </div>
    </>
  );
};

export default App;