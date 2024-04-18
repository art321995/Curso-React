import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default Navbar;