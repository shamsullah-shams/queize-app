import React, { useContext, useEffect } from "react";
import "./Main.css";
import { replace, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const MainPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name === "") {
      return navigate("/login");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <aside className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </aside>
        <main className="content">
          <h1>Welcome {user.name}</h1>
          <p>
            This is a basic example of a page with a sidebar layout. You can add
            more content here as needed.
          </p>
          <button onClick={() => navigate("/quiz")}>Start Quiz</button>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
