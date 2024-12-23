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
        <main className="content">
          <h1>Welcome {user.name}</h1>
          <p>
            Introducing the Quiz App Step into the world of interactive learning
            with our feature-rich quiz app, built using React! Whether you're a
            student preparing for exams, a teacher testing your students'
            knowledge, or just someone looking to have fun while learning, this
            app is designed with you in mind. Its intuitive interface ensures a
            seamless experience, letting you focus entirely on the quiz without
            distractions. From general knowledge to specific subjects, the app
            offers a variety of topics to challenge and engage users of all
            ages.
          </p>
        </main>

        <div class="button-container">
          <div class="button" onClick={() => navigate("/quiz")}>
            Ready! Start the Quiz
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
