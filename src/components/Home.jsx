import { useState } from "react";
import { Route, Routes, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const [errrorText, setErrorText] = useState("");
  function handleClick(e) {
    e.preventDefault();
  }
  function handleError(e) {
    if (e.target.value.toUpperCase() == "BOMB") {
      console.log(e.target.value);
      setErrorText("BOMB");
    }
  }
  if (errrorText == "BOMB") {
    throw new Error("Error Boundary. Checked.");
  }

  return (
    <div className="home-page">
      <div className="dark-bg-wrapper">
        <div className="meet-conectar">
          <p>Meet the right people to connect with at</p>
          <h2>Conectar</h2>
        </div>
        <form>
          <div className="meet-people">
            Do you want to connect with amazing people? Enter details to signup
          </div>
          <div>
            <input type="text" placeholder="Enter your firstname" />
          </div>
          <div>
            <input type="text" placeholder="Enter your lastname" />
          </div>
          <div>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <input
              onChange={handleError}
              type="text"
              placeholder="Enter bomb to check error boundary"
            />
          </div>
          <NavLink to="/users" className="button">
            Sign up
          </NavLink>
        </form>
      </div>
    </div>
  );
};
export default Home;
